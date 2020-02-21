<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 100vh; width: 100vw;"
  >
    <div class="d-flex flex-column">
      <h1 class="text-white" id="title">" Cepetin Mas "</h1>
      <div class="mt-5">
        <form id="form-join" class="d-flex flex-column" @submit.prevent="enter">
          <input
            type="text"
            v-model="nickname"
            class="input-form"
            placeholder="Nickname"
          />
          <br />
          <input type="submit" class="btn btn-danger btn-lg" value="Enter" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: ""
    };
  },
  methods: {
    enter() {
      this.$axios
        .post("/players", { name: this.nickname })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("player", JSON.stringify(data.player));
          this.$router.push({ name: "Main" });
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style></style>
