<template>
  <div
    class="container-fluid d-flex flex-column pt-5"
    style="height: 100vh; width: 100vw; overflow: auto;"
  >
    <div class="col-md-4 align-self-center">
      <h1 class="text-white text-center">
        Welcome {{ player ? player.name : "" }}
      </h1>
      <form-room @success-create-room="success" />
    </div>
    <div class="container mt-5">
      <div v-if="rooms.length" class="row">
        <room 
          v-for="room in rooms" 
          :key="room.id" 
          :room="room" 
        />
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

<script>
import io from "socket.io-client";
const socket = io("http://localhost:3000");

import Room from "../components/Room";
import FormRoom from "../components/FormRoom";
export default {
  components: {
    Room,
    FormRoom
  },
  data() {
    return {
      rooms: [],
      player: null
    };
  },
  mounted() {
    this.player = JSON.parse(localStorage.player);
    this.getRooms();
  },
  created() {
    socket.on("get_rooms", () => {
      this.getRooms();
    });
  },
  methods: {
    getRooms() {
      this.$axios
        .get("/rooms")
        .then(({ data }) => {
          this.rooms = data.rooms;
        })
        .catch(err => {
          console.log(err);
        });
    },
    success() {
      socket.emit("get_rooms");
    }
  }
};
</script>

<style></style>
