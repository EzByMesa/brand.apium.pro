<template>
  <v-sheet style="pointer-events: none; position: fixed; bottom: 0; width: 100%; line-height: 0.71; font-size: calc( (100vw - 480px)/(1920 - 480) * (300 - 100) + 100px); color: white !important; text-align: left" v-html="meta.name.replace(' ', '<br>')" />

  <v-sheet v-on:click="open_color(meta.color)" style="cursor: pointer; position: fixed; top: 40%; right: 0; line-height: 0.71; opacity: 0.5; font-size: calc( (100vw - 480px)/(1920 - 480) * (100 - 50) + 50px); color: white !important; text-align: left; writing-mode: vertical-rl">
    {{ meta.color }}
  </v-sheet>
</template>

<script>
export default {
  name: "a-color",
  props: ['meta'],
  methods: {
    random: function () {
      return this.$palette[Math.floor(Math.random()*this.$palette.length)].color;
    },
    open_color: function (color) {
      this.$router.push({ name: 'color', params: { color: color.replace('#', '') } })
    }
  }
}
</script>

<style scoped>

</style>
