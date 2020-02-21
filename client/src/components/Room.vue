<template>
  <div class="col-md-3 my-2">
    <div class="room py-4 px-2 d-flex flex-column">
      <h4 class="text-center">{{ room.name }}</h4>
      <br />
      <p class="text-center">Player : 3</p>
      <input
        type="button"
        @click.prevent="getQuotes"
        class="btn btn-danger btn-lg"
        value="Join"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["room"],
  methods: {
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
    }
  }
};
</script>

<style></style>
