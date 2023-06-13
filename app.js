const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    addNumber(num) {
      return (this.counter = this.counter + num);
    },
    reduceNumber(num) {
      return (this.counter = this.counter - num);
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("submitted");
    },
  },
});

app.mount("#events");
