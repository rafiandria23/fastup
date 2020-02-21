<template>
  <div
    class="container-fluid d-flex flex-column pt-5"
    style="height: 100vh; width: 100vw; overflow: auto;"
  >
    <div v-if="!isFinished" class="container">
      <div v-if="!quotes">
        <div class="text-align-center">
          <div class="row" v-if="players">
            <player :player="player" v-for="(player,i) in players" :key="i" />
          </div>
          <!-- <div class="row" v-if="!rooms[1]"><h1>Player is belum cukup...</h1></div> -->
          <button class="btn btn-warning btn-lg text-white w-25 mt-3" @click="getQuotes">Mulai</button>
        </div>
      </div>
      <div v-else class="d-flex justify-content-center flex-column">
        <h1 class="text-white text-center">Ayo Cepetin Mas. . .</h1>
        <br />
        <br />
        <h1
          class="p-4 bg-light text-center rounded-pill"
          onmousedown="return false"
          onselectstart="return false"
        >{{ sentence }}</h1>
        <br />
        <br />
        <p class="text-center text-white" style="font-size: 72px;">your score : {{ score }}</p>

        <!-- <form id="form-join" class="d-flex flex-column"> -->
        <input
          type="text"
          v-on:keyup="typeMonitor"
          v-model="answer"
          class="input-form"
          placeholder="Type here"
        />
        <!-- </form> -->
      </div>
    </div>
    <div v-if="isFinished" style="color: white; text-align: center">
      <h1>
        SEKIAN... Terimakasih...
      </h1>
      <br>
      <h2>
        Ingat senin <h1><b>L I V E    C O D E!!!</b></h1>
      </h2>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
const socket = io("https://cepetin-mas.herokuapp.com");

import Player from "../components/Players";
export default {
  components: {
    Player
  },
  data() {
    return {
      quotes: null,
      answer: "",
      score: 0,
      sentence: null,
      players: [],
      isFinished: false,
    };
  },
  created() {
    socket.on("next_sentence", () => {
      this.randomize();
    });
    socket.on("game_start", () => {
      this.$axios
        .get("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
        .then(({ data }) => {
          this.quotes = data;
          this.randomize();
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  methods: {
    typeMonitor() {
      if (this.answer.toLowerCase() === this.sentence.toLowerCase()) {
        if (this.score == 80) {
          console.log("game selesai");
        }else{
          socket.emit("next_sentence");
          this.answer = "";
          this.score += 10;
          localStorage.setItem("score", this.score);
        }
      }
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    randomize() {
      this.playSound(
        "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"
      );
      this.quotes = this.quotes.filter(a => {
        return a.en.length < 50;
      });
      this.sentence = this.quotes[
        Math.floor(Math.random() * this.quotes.length)
      ].en;
    },
    getRooms() {
      this.players = [];
      this.$axios
        .get("/rooms")
        .then(({ data }) => {
          let playerData = JSON.parse(localStorage.player);
          this.players = data.rooms[playerData.RoomId - 1].Players;
          console.log(this.players);
        })
        .catch(err => {});
    },
    getQuotes() {
      socket.emit("game_start");
    }
  },
  mounted() {
    this.getRooms();
    new Audio('/spongbob.mp3').play();
  }
};
</script>

<style></style>
