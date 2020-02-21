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

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    createRoom() {
      this.$axios
        .post("/rooms", { name: this.name })
        .then(({ data }) => {
          this.$emit("success-create-room");
        })
        .catch(err => {});
    }
  }
};
</script>

<style></style>
