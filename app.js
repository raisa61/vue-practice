const app = Vue.createApp({
  data() {
    return {
      alertMsg: "Hi I'm here",
      userInput: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMsg);
    },
    showUserInput(event) {
      return (this.userInput = event.target.value);
    },
  },
});

app.mount("#assignment");
