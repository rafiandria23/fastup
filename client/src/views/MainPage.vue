<template>
  <div
    class="container-fluid d-flex flex-column pt-5"
    style="height: 100vh; width: 100vw; overflow: auto;"
  >
    <div class="col-md-4 align-self-center">
      <h1 class="text-white text-center">Welcome {{ player }}</h1>
      <form-room @success-create-room="success" />
    </div>
    <div class="container mt-5">
      <div v-if="rooms.length" class="row">
        <room v-for="(room, i) in rooms" :key="i" :room="rooms[i]" />
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
    this.player = localStorage.player;
    this.getRooms();
  },
  methods: {
    success(value) {
      // this.rooms.push(value);
      // console.log(this.rooms);
      console.log(value);
      this.$axios
        .post("/players", { name: this.player })
        .then(({ data }) => {
          console.log(data);
          this.$router.push({ name: "Game" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRooms() {
      this.$axios
        .get("/rooms")
        .then(({ data }) => {
          this.rooms = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
