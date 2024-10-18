<template>
  <v-sheet :style="`pointer-events: ${scrolling ? 'none' : 'auto'}; `" class="d-flex justify-center align-center flex-column" position="fixed" width="100%" height="100%" color="transparent" style="line-height: 0.8">
    <p v-on:click="go_to()" class="link" :style="`rotate: ${degree}deg; border-bottom: 10px dashed ${random()};`" style="color: white !important; font-size: calc( (100vw - 480px)/(1920 - 480) * (200 - 60) + 60px);">{{ meta.name }}</p>
  </v-sheet>
</template>

<script>
import {Scrolling} from "@/store/scroll.store.js";

export default {
  name: "a-url",
  props: ['meta'],
  methods: {
    go_to: function () {
      window.location.replace(this.meta.url, '_blank');
    },
    random: function () {
      return this.$palette[Math.floor(Math.random()*this.$palette.length)].color;
    }
  },
  computed: {
    scrolling() {
      return Scrolling().get()
    },
    degree() {
      let min = -15
      let max = 15
      return Math.random() * (max - min) + min;
    }
  }
}
</script>

<style scoped>
.link {
  cursor: pointer;

  animation: tilt-n-move-shaking 10s infinite;
}

@keyframes tilt-n-move-shaking {
  0% { transform: translate(0, 0) rotate(0); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0); }
}
</style>
