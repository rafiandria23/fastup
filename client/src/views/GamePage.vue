<template>
  <div
    class="container-fluid d-flex flex-column pt-5"
    style="height: 100vh; width: 100vw; overflow: auto;"
  >
    <div class="container align-self-center">
      <div class="d-flex justify-content-center flex-column">
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
        <p class="text-center text-white" style="font-size: 72px;">29</p>

        <form id="form-join" class="d-flex flex-column">
          <input
            type="text"
            v-on:keyup="typeMonitor"
            v-model="answer"
            class="input-form"
            placeholder="Type here"
          />
        </form>

        <p class="text-center text-white" style="font-size: 72px;">your score : {{ score }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: null,
      answer: "",
      score: 0,
      sentence: null
    };
  },
  methods: {
    typeMonitor() {
      if (this.answer.toLowerCase() === this.sentence.toLowerCase()) {
        this.answer = "";
        this.score += 10;
        this.randomize()
      }
    },
    randomize() {
      this.quotes = this.getQuotes.filter(a => {
        return a.en.length < 75
      })
      this.sentence = this.quotes[Math.floor(Math.random() * this.quotes.length)].en;
    }
  },
  mounted() { 
    this.quotes = this.getQuotes;
    this.randomize()
  },
  computed: {
    getQuotes() {
      return this.$store.state.quotes;
    }
  }
};
</script>

<style></style>
