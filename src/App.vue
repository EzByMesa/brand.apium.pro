<template>
  <v-app style="background: transparent !important;">
    <v-app-bar density="compact" elevation="0">
      <template v-slot:image v-if="$route.path === '/'">
        <v-img :gradient="gradient" />
      </template>

      <v-app-bar-title>
        <span style="cursor: pointer" v-on:click="go_home()">APIUM MEDIA</span>
        <span v-if="$route.name === 'home'"> | BRANDB<v-icon style="font-size: 18px; margin: 0 2px" :icon="['fas', themes[theme].icon]" v-on:click="toggleTheme" />OK</span>
        <span v-if="$route.name === 'color'"> | COLOR {{ color }} </span>
      </v-app-bar-title>

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
import { ColorPickerColor } from "@/store/color.store.js";

export default {
  name: "App",
  beforeMount() {
    this.$vuetify.theme.global.name = this.theme
  },
  methods: {
    go_home: function () {
      window.location.href = "/";
    },
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
    color: {
      get() {
        return ColorPickerColor().get()
      },
      set(value) {
        ColorPickerColor().set(value)
      }
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
