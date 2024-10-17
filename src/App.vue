<template>
  <v-app style="background: transparent !important; width: 100% !important">
    <router-view />
  </v-app>
</template>

<script>
import GooseBar from "@/components/GooseBar.vue";

export default {
  name: "App",
  components: { GooseBar }
}
</script>

<style>
@font-face {
  font-family: 'Font';
  src: url('assets/font.ttf');
}
* {
  ::-webkit-scrollbar {
    width: 0;
  }
}

body, html {
  font-family: Font, sans-serif;
  overflow: auto !important;
}
</style>
