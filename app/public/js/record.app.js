var recordWaitingApp = new Vue({
  el: '#recordWaitingApp',
  data: {
    patients:[]
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => recordWaitingApp.patients = json);

    }
  },
  created() {
    this.fetchPatients();
  }
})
