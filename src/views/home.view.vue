<template>
  <v-sheet width="100" height="10" class="mb-2" color="burnt_sienna" />
  <p>APIUM COLORS</p>
  <v-divider class="my-5" color="transparent" />
  <p>While embracing a much more colorful language in our brand communications,<br>Apium Apple is our resting color, used whenever Apium needs to be recognizable.</p>
  <v-row class="mt-10">
    <v-col v-for="color in Object.keys(p)" :key="color">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-sheet class="d-flex justify-center align-center flex-column" width="100%" height="100%">
            <v-sheet v-bind="props" rounded="pill" v-on:click="open_color(p[color].color)" >
              <v-fade-transition>
                <v-avatar :size="p[color].primary ? 300 : 200" :color="p[color].color+'dd'" style="position: absolute; z-index: 3000; cursor: pointer" v-if="isHovering">
                  <v-icon style="font-size: 30px" :icon="['fas', 'clone']" />
                </v-avatar>
              </v-fade-transition>
              <v-avatar :size="p[color].primary ? 300 : 200" :color="p[color].color" class="d-flex flex-column justify-end pb-5">
                <v-sheet>
                  {{ p[color].name }}
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
              </v-avatar>
            </v-sheet>
          </v-sheet>
        </template>
      </v-hover>
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
          name: 'Apple Mint',
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
          name: 'Apium Yellow',
          color: '#f1b055',
          primary: true,
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
    open_color: function (color) {
      this.$router.push({ name: 'color', params: { color: color.replace('#', '') } })
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
