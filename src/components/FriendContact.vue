<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? 'fav' : '' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite()">Toggle Fav</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend()">Delete</button>
  </li>
</template>

<script>
export default {
  
  props: {
    id: {
      type: String,
      required: true },
    name: {
      type: String,
      required: true },
    phoneNumber: {
      type: String,
      required: true },
    isFavorite: {
      type: Boolean,
      required: true,
      default: false },
    emailAddress: {
      type: String,
      required: true },
  },
  emits: {
    'toggle-favorite': function(id) {
      if (id) return true;
      else return false;
    }
  },
    data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id );
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    }
  }
};
</script>