<template>
  <div
    class="container-fluid d-flex flex-column pt-5"
    style="height: 100vh; width: 100vw; overflow: auto"
  >
    <div v-if="!isFinished" class="container">
      <div v-if="!quote">
        <div class="text-align-center">
          <div class="row" v-if="players">
            <player :player="player" v-for="(player, i) in players" :key="i" />
          </div>

          <button
            class="btn btn-warning btn-lg text-white w-25 mt-3"
            @click.prevent="getQuotes"
          >
            Start
          </button>
        </div>
      </div>

      <div v-else class="d-flex justify-content-center flex-column">
        <h1 class="text-white text-center">FastUp</h1>

        <br />
        <br />

        <h1
          class="p-4 bg-light text-center rounded-pill"
          onmousedown="return false"
          onselectstart="return false"
        >
          {{ sentence }}
        </h1>

        <br />
        <br />

        <p class="text-center text-white" style="font-size: 72px">
          Your score: {{ score }}
        </p>

        <input
          type="text"
          v-on:keyup="typeMonitor"
          v-model="answer"
          class="input-form"
          placeholder="Type here"
        />
      </div>
    </div>

    <div v-if="isFinished" style="color: white; text-align: center">
      <h1>SEKIAN... Terimakasih...</h1>

      <br />

      <h2>
        Ingat senin
        <h1><b>L I V E C O D E!!!</b></h1>
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

// Services
import { RoomService, QuoteService } from '../services';

// Components
import Player from '../components/player/Player.vue';

export default defineComponent({
  name: 'GameView',
  components: {
    Player,
  },
  data() {
    return {
      quote: '',
      sentence: '',
      answer: '',
      score: 0,
      isFinished: false,
      players: [],
    };
  },
  created() {
    socket.on('sentence.next', () => {
      this.randomize();
    });

    socket.on('game.started', async () => {
      const [{ quote }] =  await QuoteService.getQuote();

      this.quote = quote;

      this.randomize();
    });
  },
  methods: {
    typeMonitor() {
      if (this.answer.toLowerCase() === this.sentence.toLowerCase()) {
        if (this.score == 80) {
          console.log('Game finished!');
        } else {
          socket.emit('sentence.next');
          this.answer = '';
          this.score += 10;
          localStorage.setItem('score', String(this.score));
        }
      }
    },
    randomize() {
      const sound = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
      sound.play();

      this.sentence = this.quote;
    },
    async getRooms() {
      const {rooms} = await RoomService.getRooms();
      this.players = rooms[0].Players;
    },
    async getQuotes() {
      socket.emit('game.started');

      console.log(await QuoteService.getQuote())
      const [{ quote }] =  await QuoteService.getQuote();

      this.quote = quote;

      this.randomize();
    },
  },
  mounted() {
    this.getRooms();
  },
});
</script>
