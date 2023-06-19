const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: "",
    };
  },
  methods: {
    add(num) {
      return (this.counter = this.counter + num);
    },
  },
  computed: {
    calculatedResult() {
      if (this.counter < 37) {
        return (this.result = "Not there yet");
      } else if (this.counter == 37) {
        return (this.result = "Oh wow");
      } else {
        return (this.result = "Too much!");
      }
    },
  },
});

app.mount("#assignment");
