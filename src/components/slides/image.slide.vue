<template>
  <v-img  :alt="meta.id" style="position: fixed; z-index: 20; pointer-events: none;" :width="meta.s.w" :height="meta.s.h" :style="`top: ${pos_y}px; left: ${pos_x}px`" :src="meta.url" />
  <v-sheet class="d-flex justify-space-between align-center flex-column"  border="xl" :color="meta.secondary" style="z-index: 10; position: fixed; pointer-events: none;" :width="meta.s.w/2" :height="meta.s.h/2" :style="`top: ${t_y}px; left: ${t_x}px`">
    <p class="mt-4" style="font-size: 3em; line-height: 0.7; text-align: center" :style="`color: ${meta.color}`">{{ meta.title }}</p>
    <p class="mb-4" style="font-size: 1em; line-height: 0.7; text-align: center" :style="`color: ${meta.color}`">{{ meta.subtitle }}</p>
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
    pos_x() {
      let min = 0;
      let max = window.screen.availWidth - this.meta.s.w
      return Math.random() * (max - min) + min;
    },
    pos_y() {
      let min = 0;
      let max = window.screen.availHeight - this.meta.s.h
      return Math.random() * (max - min) + min;
    },
    t_x() {
      let min = 0;
      let max = window.screen.availWidth - this.meta.s.w/2
      return Math.random() * (max - min) + min;
    },
    t_y() {
      let min = 0;
      let max = window.screen.availHeight - this.meta.s.h/2
      return Math.random() * (max - min) + min;
    }
  }
}
</script>

<style scoped>
</style>
