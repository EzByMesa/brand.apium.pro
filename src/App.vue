<template>
  <v-app>
    <v-app-bar density="compact" color="background" elevation="0">
      <template v-slot:image>
        <v-img :gradient="gradient" />
      </template>

      <v-app-bar-title>APIUM MEDIA | BRANDB<v-icon style="font-size: 18px; margin: 0 2px" :icon="['fas', themes[theme].icon]" v-on:click="toggleTheme" />OK</v-app-bar-title>

    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { themeStore } from "@/store/theme.store.js";
import {themes} from "@/plugins/themes.js";

export default {
  name: "App",
  beforeMount() {
    this.$vuetify.theme.global.name = this.theme
  },
  methods: {
    toggleTheme: function () {
      if (this.theme === 'light') {
        this.theme = 'dark'
      } else if (this.theme === 'dark') {
        this.theme = 'light'
      }
      this.$vuetify.theme.global.name = this.theme
    }
  },
  computed: {
    gradient() {
      return `to right, #69917066, #b4c0a566, #e0d1ae66, #f1b05566, #e8663b66`
    },
    themes() {
      return themes
    },
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
