<template>
  <v-sheet class="d-flex justify-space-around align-center flex-column" position="fixed" width="100%" height="100%" color="transparent" style="pointer-events: none; line-height: 0.8; z-index: 20">
    <v-avatar rounded :size="meta.s.w">
      <v-sheet width="100%" height="100%" class="d-flex justify-center align-center">
        <img :src="meta.url" alt="12" width="100%">
      </v-sheet>

    </v-avatar>

    <v-sheet class="px-4 d-flex justify-space-between align-center flex-column ma-10" border="xl" :color="meta.secondary" style="z-index: 10; pointer-events: none;">
      <p class="my-4" style="font-size: 3em; line-height: 0.7; text-align: center" :style="`color: ${meta.color}`">{{ meta.title }}</p>
      <p v-if="meta.subtitle" class="my-4" style="font-size: 1em; line-height: 0.7; text-align: center" :style="`color: ${meta.color}`">{{ meta.subtitle }}</p>
    </v-sheet>
  </v-sheet>


</template>

<script>
export default {
  name: "a-image",
  props: ['meta'],
  methods: {
    random: function () {
      return this.$palette[Math.floor(Math.random()*this.$palette.length)].color;
    }
  },
  computed: {
    t_x() {
      let min_b = 0;
      let max_b = window.screen.availWidth / 2 - this.meta.s.w
      let min_a = window.screen.availWidth / 2 + this.meta.s.w / 2
      let max_a = window.screen.availWidth - this.meta.s.w / 2


      console.log(window.screen.availWidth, window.screen.availHeight, min_b, max_b, min_a, max_a)

      let array = []

      array.push(Math.random() * (max_b = - min_b) + min_b)
      array.push(Math.random() * (max_a = - min_a) + min_a)


      return array[Math.floor(Math.random()*array.length)];
    },
    t_y() {
      let min_b = 0;
      let max_b = window.screen.availHeight / 2 - this.meta.s.h
      let min_a = window.screen.availHeight / 2 + this.meta.s.h / 2
      let max_a = window.screen.availHeight - this.meta.s.h / 2

      let array = []

      array.push(Math.random() * (max_b = - min_b) + min_b)
      array.push(Math.random() * (max_a = - min_a) + min_a)


      return array[Math.floor(Math.random()*array.length)];
    },
  }
}
</script>

<style scoped>
</style>
