<template>
  <div class="mt-5">
    <form
      id="form-join"
      class="d-flex flex-column"
      @submit.prevent="createRoom"
    >
      <input
        type="text"
        v-model="name"
        class="input-form"
        placeholder="Room name"
      />
      <br />
      <input type="submit" class="btn btn-danger btn-lg" value="Create" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: '',
    };
  },
  methods: {
    async createRoom() {
      await this.$axios.post('/rooms', {
        name: this.name,
      });

      this.$emit('room.created');
    },
  },
});
</script>
