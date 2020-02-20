<template>
  <div
    class="container-fluid d-flex flex-column pt-5"
    style="height: 100vh; width: 100vw; overflow: auto;"
  >
    <div class="col-md-4 align-self-center">
      <h1 class="text-white text-center">Welcome Cublug</h1>
      <form-room />
    </div>
    <div class="container mt-5">
      <div v-if="rooms" class="row">
        <room v-for="i in 8" :key="i" />
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
      rooms: []
    };
  }
};
</script>

<style></style>
