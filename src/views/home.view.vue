<template>
  <v-sheet class="d-flex justify-space-around" width="80%" height="50%">
    <v-sheet color="transparent" class="pa-5 mb-5 mx-5">
      <v-sheet width="100" height="10" class="mb-2 mt-10" :color="p.burnt_sienna.color" />
      <p>Apium colors</p>
      <p>While embracing a much more colorful language in our brand communications,<br>Apium Apple is our resting color, used whenever Apium needs to be recognizable.</p>

      <v-divider class="my-5" color="transparent" />

      <v-row>
        <v-col v-for="color in Object.keys(p)" :key="color">
          <v-sheet class="text-center">
            <v-avatar size="130" :color="p[color].color" /><br>
            <v-chip size="large" :color="p[color].color" variant="text">{{ p[color].name }}</v-chip><br>
            <v-sheet class="text-center px-4" style="font-size: 10px; opacity: 0.5;">
              <v-sheet class="d-flex justify-space-between align-center">
                <span>HEX</span>
                <span>{{ p[color].color }}</span>
              </v-sheet>
              <v-sheet class="d-flex justify-space-between align-center">
                <span>RGB</span>
                <span>{{ p[color].rgb }}</span>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>

      <v-sheet width="100" height="10" class="mb-2 mt-10" :color="p.sandy_brown.color" />
      <p>Face of APIUM</p>

      <v-divider class="my-5" color="transparent" />

      <v-row>
        <v-col v-for="image in Object.keys(l)" :key="image">
          <v-sheet class="text-center">
            <v-img :height="l[image].size.h" :width="l[image].size.w" :src="l[image].uri" size="130" rounded/><br>
            <v-chip size="large" variant="text">{{ l[image].name }}</v-chip><br>
          </v-sheet>
        </v-col>
      </v-row>

      <v-sheet width="100" height="10" class="mb-2 mt-10" :color="p.grain_brown.color" />
      <v-sheet class="subtitle">powered by APIUM</v-sheet>
    </v-sheet>
  </v-sheet>

  <v-avatar
      variant="flat"
      :color="theme === 'light' ? p.burnt_sienna.color : p.apium_apple.color"
      size="40"
      v-on:click="toggleTheme"
      style="position: fixed; bottom: 10px; left: 10px; cursor: pointer"
  >
    <v-icon :icon="['fas', themes[theme].icon]" />
  </v-avatar>
</template>

<script>

import {themeStore} from "@/store/theme.store.js";
import {themes} from "@/plugins/themes.js";

export default {
  name: "HomeView",
  data() {
    return {
      l: {

        big_light: {
          name: 'MAIN LOGO',
          uri: 'https://00.apium.pro/img/logo/light_logo_big.png',
          size: {
            w: 400,
            h: 200
          }
        },
        big_dark: {
          name: 'MAIN LOGO',
          uri: 'https://00.apium.pro/img/logo/dark_logo_big.png',
          size: {
            w: 400,
            h: 200
          }
        },
        colored: {
          name: 'Colorless logo',
          uri: 'https://00.apium.pro/img/logo/logo_colored.svg',
          size: {
            w: 200,
            h: 200
          }
        },
        favicon: {
          name: 'Favicon',
          uri: 'https://00.apium.pro/img/logo/favicon.svg',
          size: {
            w: 200,
            h: 200
          }
        }
      },
      p: {
        apium_apple: {
          name: 'Apium Apple',
          color: '#699170',
          rgb: '105 \\ 145 \\ 112'
        },
        newbie_mint: {
          name: 'Newbie Mint',
          color: '#b4c0a5',
          rgb: '180 \\ 192 \\ 165'
        },
        grain_brown: {
          name: 'Grain Brown',
          color: '#e0d1ae',
          rgb: '224 \\ 209 \\ 174'
        },
        sandy_brown: {
          name: 'Sandy Brown',
          color: '#f1b055',
          rgb: '241 \\ 176 \\ 85'
        },
        burnt_sienna: {
          name: 'Burnt Sienna',
          color: '#e8663b',
          rgb: '232 \\ 102 \\ 59'
        }
      }
    }
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

<style scoped>

</style>
