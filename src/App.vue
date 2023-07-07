<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @update-data="updateData"></user-data>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      user : {
        name: 'Raisa',
        age: '23',
      }

    }
  },
  methods: {
    updateData(newName, newAge) {
    this.user.name = newName;
    this.user.age = newAge;
  }
  }
};
</script>