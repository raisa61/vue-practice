<template>
  <section><label>Name</label>
    <input type="text" v-model="name"/>
    <label>Age</label>
    <input type="text" v-model="age"/>
    <button @click="sendToApp">Update Data</button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      age: '',
    }
  },
  methods: {
    sendToApp() {
      this.$emit('update-data', this.name, this.age);
    }
  }
};
</script>
