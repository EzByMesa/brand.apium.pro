<template>
  <v-sheet class="d-flex flex-column justify-center align-center"
           width="100%" height="100%"
           style="pointer-events: none; position: fixed; line-height: 1; font-size: 10vh; color: black !important; text-align: center;"
  >
    <v-sheet>

    </v-sheet>
    <span style="text-align: center; font-size: calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 100px);" :style="`rotate:  ${degree}deg`">{{ meta.title }}</span>

    <span style="font-size: calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 60px); transform: scale(1, 0.5)" :style="`color: ${random()} !important;`">
      {{ meta.subtitle }}
    </span>
  </v-sheet>
</template>

<script>
export default {
  name: "a-text",
  props: ['meta'],
  data() {
    return {
      font: 50
    }
  },
  methods: {
    random: function () {
      return this.$palette[Math.floor(Math.random()*this.$palette.length)].color;
    }
  },
  computed: {
    degree() {
      let min = -15
      let max = 15
      return Math.random() * (max - min) + min;
    }
  }
}
</script>

<style scoped>
</style>
