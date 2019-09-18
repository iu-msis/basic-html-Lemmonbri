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
  handleCreateRecord(event) {
    this.patients.push(this.formPatient);
    this.formPatient = {
      firstName: '',
      lastName: '',
      dob: '',
      sexAtBirth: ''
    }
  },
  handleRecordClick(patient) {
    //TODO: Pass this data to another Vue app
    console.log(patient);
  },
  created() {
    this.fetchPatients();
  }
})
