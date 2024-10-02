<template>
  <v-sheet class="d-flex justify-space-around" width="80%" height="50%">
    <v-sheet color="transparent" class="pa-5 mb-5 mx-5">
      <v-sheet width="100" height="10" class="mb-2" :color="p.burnt_sienna.color" />
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
      <v-sheet class="subtitle text-center py-10">powered by <v-chip density="compact" variant="flat" color="#f1b055" href="https://apium.pro">APIUM</v-chip></v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<script>
import { Access } from "../store/access.js";

export default {
  name: "HomeView",
  data() {
    return {
      p: {
        apium_apple: {
          name: 'Apium Apple',
          color: '#699170',
          rgb: '105 \\ 145 \\ 112'
        },
        rainee: {
          name: 'Rainee',
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
    input_symbol: function () {
      let id = event.srcElement.id

      if (this.access) {
        switch (id) {
          case '178_8':
            this.selected_wave = 0
            break;
          case '47_7':
            this.selected_wave = 1
            break;
          case '142_2':
            this.selected_wave = 2
            break;
          case '143_3':
            this.selected_wave = 3
            break;
          case '47_0':
            this.access = false
            this.code_str = []
            break
        }
      } else {
        if (this.code_str.length < 4) {
          this.code_str.push(id)
        }

        if (this.code_str.length === 4) {
          if (this.code_str.toString() === this.code.toString()) {
            this.access = true
            this.$router.push({name: 'synth'})
          }
          this.code_str = []
        }
      }
    },
    get_element: function (str) {
      switch (str.length) {
        case 3: return str
        case 2: return '0' + str
        case 1: return '00' + str
        default: return 'XXX'
      }
    }
  },
  computed: {
    access: {
      get() {
        return Access().get()
      },
      set(v) {
        Access().set(v)
      }
    }
  }
}
</script>

<style scoped>

</style>
