<template>
  <div>

    <b-card no-body header="Payment Schedule">
      <table class="table card-table">
        <thead class="thead-light">
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Start Balance</th>
            <th>Payment Amt.</th>
            <th>End Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>01/15/2019</td>
            <td>$1,000.00</td>
            <td>$110</td>
            <td>$890</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>02/15/2019</td>
            <td>$890</td>
            <td>$110</td>
            <td>$780</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>03/15/2019</td>
            <td>$780</td>
            <td>$110</td>
            <td>$670</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>04/15/2019</td>
            <td>$670</td>
            <td>$110</td>
            <td>$560</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>05/15/2019</td>
            <td>$560</td>
            <td>$110</td>
            <td>$450</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>06/15/2019</td>
            <td>$450</td>
            <td>$110</td>
            <td>$340</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>07/15/2019</td>
            <td>$340</td>
            <td>$110</td>
            <td>$230</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>08/15/2019</td>
            <td>$230</td>
            <td>$110</td>
            <td>$120</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>09/15/2019</td>
            <td>$120</td>
            <td>$110</td>
            <td>$10</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>10/15/2019</td>
            <td>$120</td>
            <td>$10</td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'debt-schedule',
  data: () => ({
    jsonData: [],
    originalJsonData: [],

    // Pagination
    perPageOptions: [10, 20, 30, 40, 50],
    perPage: 10,
    currentPage: 1,

    // Table options
    headerStyleOptions: [{ text: 'Default', value: null }, { text: 'Light', value: 'light' }, { text: 'Dark', value: 'dark' }],
    isStriped: false,
    isHoverable: false,
    isBordered: false,
    isSmall: false,
    isFixed: false,
    isDark: false,
    isFootClone: false,
    headerStyle: null
  }),
  computed: {
    totalItems () {
      return this.jsonData.length
    },
    totalPages () {
      return Math.floor(this.totalItems / this.perPage) || (this.totalItems ? 1 : 0)
    }
  },
  created () {
    /* Fetch json data
    const req = new XMLHttpRequest()
    req.open('GET', `${this.baseUrl}json/table-data.json`)

    req.onload = () => {
      const data = JSON.parse(req.response)
      this.jsonData = data
      this.originalJsonData = data.slice(0)
    }

    req.send()*/
  },
  methods: {
    filter (value) {
      const val = value.toLowerCase()

      // filter our data
      const filtered = this.originalJsonData.filter(d => {
        // Concat data
        return Object.keys(d)
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(val) !== -1 || !val
      })

      // update the rows
      this.jsonData = filtered
    }
  }
}
</script>
