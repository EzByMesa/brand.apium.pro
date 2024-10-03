<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { themeStore } from "@/store/theme.store.js";

export default {
  name: "App",
  beforeMount() {
    this.$vuetify.theme.global.name = this.theme
  },
  computed: {
    theme: {
      get() {
        return themeStore().get()
      },
      set(value) {
        themeStore().set(value)
      }
    },
  }
}
</script>

<style>
@font-face {
  font-family: 'Font';
  src: url('assets/font.ttf');
}

body, html {
  font-family: Font, sans-serif;
  overflow: auto !important;
}
</style>
