import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

// Layouts
import LayoutWithoutSidenav from '@/layout/LayoutWithoutSidenav'
import { store } from '../store';

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    component: LayoutWithoutSidenav,
    meta: {
      requiresAuth: true
    },
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/components/Dashboard')
    }, {
      path: '/debts',
      name: 'debts',
      component: () => import('@/components/Debts')
    }, {
      path: '/payment-plan',
      name: 'payment-plan',
      component: () => import('@/components/PaymentPlan')
    }, {
      path: '/logout',
      name: 'logout',
      component: () => import('@/components/auth/Logout')
    }]
  }, {
    path: '/landing',
    name: 'landing',
    component: () => import('@/components/Landing'),
    meta: {
      visitorsOnly: true
    }
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/components/auth/Register'),
    meta: {
      visitorsOnly: true
    }
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/components/auth/Login'),
    meta: {
      visitorsOnly: true
    }
  }]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.visitorsOnly)) {
    // this route is only visible to visitors, check if logged in
    // if they are, redirect to dashboard page.
    if (store.getters.loggedIn) {
      next({
        name: 'debts'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

router.afterEach(() => {
  // On small screens collapse sidenav
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }

  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  // Set loading state
  document.body.classList.add('app-loading')

  // Add tiny timeout to finish page transition
  setTimeout(() => next(), 10)
})

export default router