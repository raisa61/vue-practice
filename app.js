const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "raisa",
          name: "Raisa",
          phone: 6762386,
        },
        {
          id: "rodela",
          name: "Rodela",
          phone: 672486,
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: ``,
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
