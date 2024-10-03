<template>
  <v-sheet width="100" height="10" class="mb-2" color="burnt_sienna" />
  <p>Apium colors</p>
  <v-divider class="my-5" color="transparent" />
  <p>While embracing a much more colorful language in our brand communications,<br>Apium Apple is our resting color, used whenever Apium needs to be recognizable.</p>

  <v-row class="mt-10">
    <v-col v-for="color in Object.keys(p)" :key="color">
      <v-sheet class="d-flex justify-center align-center flex-column" width="100%">
        <v-avatar size="200" :color="p[color].color" /><br>
        <v-sheet style="margin-top: -110px; z-index: 1000" class="px-5 py-2 rounded-b-xl" :color="p[color].color">{{ p[color].name }}</v-sheet>
        <v-sheet class="text-center px-8" style="font-size: 10px; opacity: 0.5;">
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


  <v-sheet width="100" height="10" class="mb-2 mt-10" color="sandy_brown" />
  <p>Perception of APIUM</p>

  <v-divider class="my-5" color="transparent" />

  <v-row>
    <v-col v-for="image in Object.keys(l)" :key="image">
      <v-sheet class="d-flex justify-space-between align-center flex-column">
        <v-img :height="l[image].size.h" :width="l[image].size.w" :src="l[image].uri" size="130" rounded/><br>
        <v-chip size="large" variant="text">{{ l[image].name }}</v-chip><br>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>

import { themeStore } from "@/store/theme.store.js";
import { themes } from "@/plugins/themes.js";

export default {
  name: "HomeView",
  data() {
    return {
      l: {
        big_light: {
          name: 'LOGO (LIGHT THEME)',
          uri: 'https://00.apium.pro/img/logo/light_logo_big.png',
          size: {
            w: 400,
            h: 200
          }
        },
        big_dark: {
          name: 'LOGO (DARK THEME)',
          uri: 'https://00.apium.pro/img/logo/dark_logo_big.png',
          size: {
            w: 400,
            h: 200
          }
        },
        colored: {
          name: 'LOGO (ISOMETRIC)',
          uri: 'https://00.apium.pro/img/logo/logo_colored.svg',
          size: {
            w: 200,
            h: 200
          }
        },
        favicon: {
          name: 'ICON',
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

  },
  computed: {
    mobile() {
      return !this.$vuetify.display.mdAndUp
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

<style scoped>

</style>
