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

// Services
import { RoomService } from '../../services';

export default defineComponent({
  name: 'CreateRoomForm',
  data() {
    return {
      loading: false,
      name: '',
    };
  },
  methods: {
    async createRoom() {
      this.loading = true;
      await RoomService.createRoom({
        name: this.name,
      });
      this.loading = false;

      this.$emit('room.created');
    },
  },
});
</script>
