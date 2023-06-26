const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      isClicked: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleList() {
      this.isClicked = !this.isClicked;
    },
  },
  computed: {
    buttonLabel() {
      if (!this.isClicked) {
        return "Hide List";
      } else {
        return "Show List";
      }
    },
  },
});

app.mount("#assignment");
