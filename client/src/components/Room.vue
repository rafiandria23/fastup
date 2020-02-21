<template>
  <div class="col-md-3 my-2">
    <div class="room py-4 px-2 d-flex flex-column">
      <h4 class="text-center">{{ room.name }}</h4>
      <br />
      <p class="text-center">Player : {{room.Players.length ? room.Players.length : 0}}</p>
      <input type="button" @click.prevent="join" class="btn btn-danger btn-lg" value="Join" />
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
const socket = io("http://localhost:3000");

export default {
  props: ["room"],
  methods: {
    join() {
      this.$axios
        .put(`/players/${JSON.parse(localStorage.player).id}`, {
          RoomId: this.room.id
        })
        .then(({ data }) => {
          console.log(data);
          this.$router.push({ name: "Game" });
        })
        .catch(err => {
          console.log(err);
        });
        socket.emit("update_room");
    },
    getQuotes() {
      this.$axios
        .get("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
        .then(({ data }) => {
          this.$store.commit("saveQuotes", data);
          this.$router.push("/game");
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  created() {
    socket.on('update_room', () => {
      this.$parent.getRooms();
    });
  }
};
</script>

<style></style>
