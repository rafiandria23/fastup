<template>
  <div class="col-md-3 my-2">
    <div class="room py-4 px-2 d-flex flex-column">
      <h4 class="text-center">{{ room.name }}</h4>

      <br />

      <p class="text-center">Player : {{ room.Players.length }}</p>

      <input
        type="button"
        @click.prevent="joinRoom"
        class="btn btn-danger btn-lg"
        value="Join"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Services
import { PlayerService } from '../../services';

import socketIO from 'socket.io-client';
const io = socketIO('https://localhost:3000');

export default defineComponent({
  name: 'Room',
  props: ['room'],
  methods: {
    async joinRoom() {
      const player = JSON.parse(localStorage.getItem('player') as string);

      await PlayerService.joinRoom({
        player_id: player.id,
        room_id: this.room.id,
      });

      player.room_id = this.room.id;

      localStorage.setItem('player', JSON.stringify(player));

      this.$router.push('/game');

      io.emit('room.update');
    },
  },
});
</script>
