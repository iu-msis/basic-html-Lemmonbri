var patientWaitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients:[]
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => patientWaitingApp.patients = json);

    }
  },
  created() {
    this.fetchPatients();
  }
})
