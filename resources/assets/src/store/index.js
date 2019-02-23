import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8888/api'

const state = {
    token: localStorage.getItem('token') || null,
    user: {
        name: '',
        surname: '',
        email: '',
        membership: {
            tier: '',
            status: ''
        },
        debts: [],
        paymentPlan: null
    }
}

export const store = new Vuex.Store({
    state,
    plugins: [
        createPersistedState({
            key: 'debtBuddy',
            getState: () => {
                if (localStorage.getItem('debtBuddy')) {
                    Object.assign(state, JSON.parse(localStorage.getItem('debtBuddy')));
                }
            },
        })
    ],
    getters: {
        loggedIn(state) {
            return state.token != null
        },
        user(state) {
            return state.user
        },
        debts(state) {
            return state.user.debts
        },
        plan(state) {
            return state.user.paymentPlan
        }
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },
        purgeLoginState(state) {
            localStorage.removeItem('token')
            state.token = null
            state.user.name = ''
            state.user.surname = ''
            state.user.email = ''
            state.user.membership.tier = ''
            state.user.membership.status = ''
            state.user.debts = null
            state.user.paymentPlan = null
        },
        setUserData(state, user) {
            state.user.name = user.name
            state.user.surname = user.surname
            state.user.email = user.email
        },
        setDebts(state, debts) {
            state.user.debts = debts
        },
        addDebt(state, debt) {
            state.user.debts.push(debt)
        },
        clearDebts(state) {
            state.user.debts = []
        },
        setPaymentPlan(state, plan) {
            state.user.paymentPlan = plan

            state.user.debts.forEach((debt, index, debts) => {
                if (plan.payment_plan.individual[debt.id]) {
                    debts[index]['payment_plan'] = plan.payment_plan.individual[debt.id]
                }
            })
        }
    },
    actions: {
        register(context, registrant) {
            return new Promise((resolve, reject) => {
                axios.post('/register', {
                    name: registrant.name,
                    surname: registrant.surname,
                    email: registrant.email,
                    password: registrant.password
                })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        generateToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                    username: credentials.username,
                    password: credentials.password
                })
                .then(response => {
                    const token = response.data.access_token
                    context.commit('setToken', token)

                    context.dispatch('fetchUserData').then(() => {
                        context.dispatch('fetchUserDebts').then(() => {
                            resolve(response)
                        })
                    })
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        destroyToken(context) {
            if (context.getters.loggedIn) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                return new Promise((resolve, reject) => {
                    axios.post('/logout')
                    .then(response => {
                        context.commit('purgeLoginState')
                        resolve(response)
                    })
                    .catch(error => {
                        context.commit('purgeLoginState')
                        reject(error)
                    })
                })
            }
        },
        fetchUserData(context) {
            if (context.getters.loggedIn) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.get('/user').then(response => {
                    context.commit('setUserData', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        fetchUserDebts(context) {
            if (context.getters.loggedIn) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                axios.get('/user/debt').then(response => {
                    context.commit('setDebts', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        addDebt(context, debtData) {
            return new Promise((resolve, reject) => {
                if (context.getters.loggedIn) {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

                    axios.post('/user/debt', debtData).then(response => {
                        context.commit('addDebt', response.data)
                        resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
                } else {
                    reject('User not logged in')
                }
            })
        },
        calculatePaymentPlan(context, debtCelerator) {
            return new Promise((resolve, reject) => {
                if (context.getters.loggedIn) {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                    
                    axios.post('/user/payment-plan', {debtCelerator: debtCelerator}).then(response => {
                        context.commit('setPaymentPlan', response.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
                } else {
                    reject('User not logged in')
                }
            })
        },
    }
})