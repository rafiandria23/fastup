<template>
  <div
    class="container-fluid d-flex flex-column pt-5"
    style="height: 100vh; width: 100vw; overflow: auto"
  >
    <div class="col-md-4 align-self-center">
      <h1 class="text-white text-center">
        Welcome {{ player ? (player as any).name : '' }}
      </h1>

      <create-room-form @success-create-room="success" />
    </div>

    <div class="container mt-5">
      <div v-if="rooms" class="row">
        <room v-for="room in rooms" :key="(room as any).id" :room="room" />
      </div>

      <div
        v-else
        class="alert alert-light m-5 p-4 text-danger text-center"
        role="alert"
      >
        No rooms available...!!!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import socketIO from 'socket.io-client';

// Services
import { RoomService } from '../services';

// Components
import Room from '../components/room/Room.vue';
import CreateRoomForm from '../components/room/CreateRoomForm.vue';

const io = socketIO('http://localhost:3000');

export default defineComponent({
  name: 'MainView',
  components: {
    CreateRoomForm,
    Room,
  },
  data() {
    return {
      player: null,
      rooms: [],
    };
  },
  mounted() {
    this.player = JSON.parse(localStorage.player);
    this.getRooms();
  },
  created() {
    io.on('rooms.get', () => {
      this.getRooms();
    });
  },
  methods: {
    async getRooms() {
      const {rooms} = await RoomService.getRooms();

      this.rooms = rooms;
    },
    success() {
      io.emit('rooms.get');
    },
  },
});
</script>
