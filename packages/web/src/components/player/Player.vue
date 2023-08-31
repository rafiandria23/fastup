<template>
  <div class="col-md-3 my-2">
    <div class="room py-4 px-2 d-flex flex-column">
      <h4 class="text-center">{{ player.name }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Player',
  props: ['player'],
});
</script>
