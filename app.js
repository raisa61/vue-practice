const app = Vue.createApp({
  data() {
    return {
      name: "Raisa",
      age: parseInt(23),
      imgUrl:
        "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
    };
  },
  methods: {
    addAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
