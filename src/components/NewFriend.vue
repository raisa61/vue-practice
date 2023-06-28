<template>
  <form @submit.prevent="sendDataToParent()">
    <label>Name</label>
    <input type="text" v-model="name"> <br>
    <label>Phone</label>
    <input type="text" v-model="phone"><br>
    <label>Email</label>
    <input type="text" v-model="email">
    <button type="submit">Submit</button>
  </form>
  
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone:'',
      email: '',
    }
  },
  methods: {
    sendDataToParent(){
      this.$emit('add-new-friend', this.name, this.phone, this.email);
    }
  }
};
</script>