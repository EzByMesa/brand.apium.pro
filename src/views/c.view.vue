<template>

  <v-sheet style="position: fixed; top: 0; left: 0; z-index: 0; cursor: pointer" :color="color" width="100%" height="100%" class="d-flex justify-center align-center" v-on:click="get_random()">
    <v-img :src="frog" v-if="hypno" style="mix-blend-mode: screen;" class="pulse" />
  </v-sheet>
  <v-sheet color="transparent" width="300" class="px-3 pt-3 rounded-t-lg rounded-b-0" style="position: fixed; bottom: 0; left: calc(50% - 150px)">
    <v-text-field label="HEX" variant="solo-filled" rounded="0" v-model="color" hide-details v-if="!hypno" />

    <v-row no-gutters v-if="!hypno">
      <v-col cols="4">
        <v-text-field density="compact" variant="solo-filled" rounded="0" v-model="rgb.r" hide-details label="R" v-on:wheel="abobate_color($event, 'r')" />
      </v-col>
      <v-col cols="4">
        <v-text-field density="compact" variant="solo-filled" rounded="0" v-model="rgb.g" hide-details label="G" v-on:wheel="abobate_color($event, 'g')" />
      </v-col>
      <v-col cols="4">
        <v-text-field density="compact" variant="solo-filled" rounded="0" v-model="rgb.b" hide-details label="B" v-on:wheel="abobate_color($event, 'b')" />
      </v-col>
    </v-row>

    <v-btn v-if="!hypno" block v-on:click="get_random()" rounded="0">RANDOM</v-btn>


    <v-text-field v-if="hypno" v-on:update:model-value="update_hypno" density="compact" variant="solo-filled" rounded="0" v-model="hypnospeed" hide-details label="HYPNO SPEED" v-on:wheel="abobate_color($event, 'speed')" />
    <v-btn block v-on:click="toggle_hypno()" rounded="0">
      <span v-if="hypno">DEHYPNOTIZE</span>
      <span v-else>
        HYPNOTIZE
      </span>

      <v-tooltip v-if="!hypno" activator="parent" location="top">
        <v-sheet width="200" height="50" class="d-flex justify-center align-center">
          <v-icon style="font-size: 30px" :icon="['fas', 'skull-crossbones']" />
          <h3 class="mx-4">DANGER</h3>
          <v-icon style="font-size: 30px" :icon="['fas', 'skull-crossbones']" />
        </v-sheet>
      </v-tooltip>
    </v-btn>
    </v-sheet>
</template>

<script>

import { ColorPickerColor } from "@/store/color.store.js";
import { hexToRgb, isDark, randomHex, rgbToHex } from "@/plugins/colors.js";
import frog from "@/assets/hypnofrog.gif"
import frog_dub from "@/assets/hypnotoad_dubstep.mp3"

export default {
  name: "ColorPickerView",
  async beforeMount() {
    await this.get_color()
    this.music = new Audio(frog_dub)
  },
  data() {
    return {
      music: null,
      frog: frog,
      hypno: null,
      hypnospeed: 100,
      rgb: {
        r: 0,
        g: 0,
        b: 0
      }
    }
  },
  mounted() {
    this.check_compare()
  },
  watch: {
    color(value) {
      let rgb = hexToRgb(value)
      if (this.rgb.r !== rgb.r) this.rgb.r = rgb.r
      if (this.rgb.g !== rgb.g) this.rgb.g = rgb.g
      if (this.rgb.b !== rgb.b) this.rgb.b = rgb.b
    },
    'rgb.r'(value) {
      this.color = rgbToHex(value, this.rgb.g, this.rgb.b)
    },
    'rgb.g'(value) {
      this.color = rgbToHex(this.rgb.r, value, this.rgb.b)
    },
    'rgb.b'(value) {
      this.color = rgbToHex(this.rgb.r, this.rgb.g, value)
    }
  },
  methods: {
    toggle_hypno: function () {
      if (this.hypno) {
        this.music.currentTime = 0
        this.music.pause()
        clearInterval(this.hypno)
        this.hypno = null
      } else {
        this.music.play()
        this.hypno = setInterval(() => {
          this.color = randomHex()
        }, this.hypnospeed)
      }
    },
    update_hypno: function () {
      this.toggle_hypno()
      this.toggle_hypno()
    },
    abobate_color: function (e, color) {
      let delta = e.deltaY || e.detail || e.wheelDelta;
      if (color !== 'speed') {
        if (delta > 0) {
          if (this.rgb[color] > 0) {
            this.rgb[color]--
          }
        } else {
          if (this.rgb[color] < 255) {
            this.rgb[color]++
          }
        }
      } else if (color === 'speed') {
        if (delta > 0) {
          if (this.hypnospeed > 1) {
            this.hypnospeed--
          }
        } else {
          if (this.hypnospeed < 999) {
            this.hypnospeed++
          }
        }
        this.update_hypno()
      }
    },
    get_random: function () {
      this.color = randomHex()
    },
    get_color: async function () {
      this.color = '#'+this.$route.params.color
    },
    check_compare: function () {
      setInterval(() => {
        if (this.color !== '#'+this.$route.params.color) {
          this.$router.push({ name: 'color', params: { color: this.color.replace('#', '') } } )
        }
      }, 100)
    }
  },
  computed: {
    dark() {
      return isDark(this.color)
    },
    color: {
      get() {
        return ColorPickerColor().get()
      },
      set(value) {
        ColorPickerColor().set(value)
      }
    }
  }
}
</script>

<style scoped>
.pulse {
  animation: myAnim 10s ease-in-out 0s infinite alternate-reverse forwards;
}

@keyframes myAnim {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
