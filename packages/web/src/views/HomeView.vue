<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 100vh; width: 100vw"
  >
    <div class="d-flex flex-column">
      <h1 class="text-white" id="title">" FastUp "</h1>
      <div class="mt-5">
        <form id="form-join" class="d-flex flex-column" @submit.prevent="enter">
          <input
            type="text"
            v-model="name"
            class="input-form"
            placeholder="Your name"
          />
          <br />
          <input type="submit" class="btn btn-danger btn-lg" value="Enter" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Service
import { PlayerService } from '../services';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    async enter() {
      const { token, player } = await PlayerService.signIn({
        name: this.name,
      });

      localStorage.setItem('token', token);
      localStorage.setItem('player', JSON.stringify(player));
      this.$router.push('/main');
    },
  },
});
</script>
