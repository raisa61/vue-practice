const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn vue.",
      courseGoalB: "Just testing <i>raw html</i>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    changeGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
