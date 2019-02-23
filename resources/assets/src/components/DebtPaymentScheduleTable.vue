<template>
  <div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <template slot="edit" slot-scope="props">
        <div>
          <b-btn variant="outline-success borderless icon-btn" class="btn-xs" @click.prevent="edit(props.row)"><i class="ion ion-md-create"></i></b-btn>
          <b-btn variant="outline-danger borderless icon-btn" class="btn-xs" @click.prevent="remove(props.row)"><i class="ion ion-md-close"></i></b-btn>
        </div>
      </template>
      <template slot="child_row" slot-scope="props">
        <div v-if="props.row.interest_paid"><b>Interest Paid:</b> ${{moneyFormat(props.row.interest_paid)}}</div>
        <div v-if="props.row.interest_paid"><b>Principal Paid:</b> ${{moneyFormat(props.row.principal_paid)}}</div>
        <div v-if="!props.row.interest_paid"><b>No additional data</b></div>
      </template>
    </v-client-table>
  </div>
</template>

<style src="@/vendor/libs/vue-data-tables/vue-data-tables.scss" lang="scss"></style>

<script>
import { ClientTable } from 'vue-tables-2'

export default {
  name: 'debt-payment-schedule-table',
  props: ['data'],
  data: () => ({
    tableData: [],
    columns: [
      'payment_date',
      'debt_name',
      'start_balance',
      'min_payment',
      'debtcelerator',
      'total_payment',
      'end_balance',
    ],
    options: {
      pagination: { chunk: 5 },
      sortIcon: {
        is: 'fa-sort',
        base: 'fas',
        up: 'fa-sort-up',
        down: 'fa-sort-down'
      }
    }
  }),
  created () {
    // Add IDs for child rows functionality
    this.tableData = this.data.map((item, index) => {
      item['start_balance'] = '$' + this.moneyFormat(item['start_balance'])
      item['end_balance'] = '$' + this.moneyFormat(item['end_balance'])
      item['min_payment'] = '$' + this.moneyFormat(item['min_payment'])
      item['debtcelerator'] = item['debtcelerator'] ? '$' + this.moneyFormat(item['debtcelerator']) : '---'
      item['total_payment'] = '$' + this.moneyFormat(item['total_payment'])
      item['id'] = index
      return item
    })
  },
  methods: {
    edit (row) {
      alert(`Edit: ${row.first_name} ${row.last_name}`)
    },
    remove (row) {
      alert(`Remove: ${row.first_name} ${row.last_name}`)
    },
    moneyFormat: function(value) {
      return parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
  }
}
</script>
