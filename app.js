const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  watch: {
    // name(value) { //means whenever name changes, this method will re-execute
    //   this.fullname = value + " " + "zaman";
    // },
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    // fullname() {
    //   return this.name + " " + "zaman";
    // },
  },
  methods: {
    outputFullname() {
      return this.name + " " + "Zaman";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
