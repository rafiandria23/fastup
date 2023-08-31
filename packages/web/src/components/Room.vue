<template>
  <div class="col-md-3 my-2">
    <div class="room py-4 px-2 d-flex flex-column">
      <h4 class="text-center">{{ room.name }}</h4>

      <br />

      <p class="text-center">
        Player : {{ room.Players.length ? room.Players.length : 0 }}
      </p>

      <input
        type="button"
        @click.prevent="join"
        class="btn btn-danger btn-lg"
        value="Join"
      />
    </div>
  </div>
</template>

<script lang="ts">
import socketIO from 'socket.io-client';
const io = socketIO('https://localhost:3000');

export default {
  props: ['room'],
  methods: {
    async join() {
      const player = JSON.parse(localStorage.player);

      await this.$axios.put(`/players/${player.id}`, {
        room_id: this.room.id,
      });

      player.room_id = this.room.id;

      localStorage.setItem('player', JSON.stringify(player));

      this.$router.push({ name: 'Game' });

      io.emit('update_room');
    },
    async getQuotes() {
      const { data } = await this.$axios.get(
        'https://api.api-ninjas.com/v1/quotes?category=computers',
      );

      this.$store.commit('quote.save', data);
      this.$router.push('/game');
    },
  },
  created() {
    io.on('update_room', () => {
      this.$parent.success();
    });
  },
};
</script>
