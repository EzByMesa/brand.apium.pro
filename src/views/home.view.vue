<template>
  <v-sheet v-on:wheel="scrollEvent" style="position: fixed; height: 100%; width: 100%; top: 0; left: 0; overflow: auto" id="home_area">
    <v-sheet :style="`background: ${gradient}`" width="100%" :height="height">
      <v-sheet style="position: fixed; bottom: 0; width: 100%; line-height: 0.71; font-size: 10vh; color: white !important; text-align: left">
        {{ color.name }}
      </v-sheet>


      <v-sheet style="position: fixed; top: 50px; right: 50px; opacity: 0.5; color: white !important; font-size: 14vh; text-align: right" v-if="step !== 0">
        {{ color.color }}
        <br>
        {{ color.rgb.r }} {{color.rgb.g}} {{color.rgb.b}}
      </v-sheet>

      <v-sheet class="scrollize" style="position: fixed; bottom: 0; right: 0; color: white !important; text-align: center" width="100" v-if="step !== this.palette.length-1">
        SCROLL <v-icon :icon="['fas', 'arrow-down']" />
      </v-sheet>
    </v-sheet>
  </v-sheet>




<!-- <v-row class="mt-10">
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
  </v-row>-->
</template>

<script>

export default {
  name: "HomeView",
  data() {
    return {
      scroll: 0
    }
  },
  methods: {
    scrollEvent: function () {
      this.scroll = document.getElementById('home_area').scrollTop
    },
    open_color: function (color) {
      this.$router.push({ name: 'color', params: { color: color.replace('#', '') } })
    }
  },
  computed: {
    palette() {
      return this.$palette
    },
    step() {
      let step = this.height / this.$palette.length
      let scroll = this.scroll
      let pos = 0
      let offset = window.screen.availHeight / 2
      for (let i = 0; i < this.$palette.length; i++) {
        if (scroll >= step * i - offset && scroll <= step * i + step - offset) {
          pos = i
        }
      }
      return pos
    },
    color() {
      return this.$palette[this.step]
    },
    height() {
      return window.screen.availHeight * this.$palette.length
    },
    gradient() {
      let points = []
      let step = 100 / this.$palette.length
      for (let [index, el] of this.$palette.entries()) {
        points.push({
          start: step * index + 0.5,
          finish: step * index + step-0.5,
          color: el.color
        })
      }
      let gradient = 'linear-gradient(180deg'
      for (let point of points) {
        gradient += `, ${point.color} ${point.start}%, ${point.color} ${point.finish}%`
      }
      gradient += ');'
      return gradient
    }
  }
}
</script>

<style scoped>
.scrollize {
  animation: myAnim 5s cubic-bezier(0.7, 0, 0.84, 0) 0s infinite none;
}
@keyframes myAnim {
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
    transform: translateY(-45px);
  }

  24% {
    opacity: 1;
  }

  40% {
    animation-timing-function: ease-in;
    transform: translateY(-24px);
  }

  65% {
    animation-timing-function: ease-in;
    transform: translateY(-12px);
  }

  82% {
    animation-timing-function: ease-in;
    transform: translateY(-6px);
  }

  93% {
    animation-timing-function: ease-in;
    transform: translateY(-4px);
  }

  25%,
  55%,
  75%,
  87% {
    animation-timing-function: ease-out;
    transform: translateY(0px);
  }

  100% {
    animation-timing-function: ease-out;
    opacity: 0;
    transform: translateY(0px);
  }
}
</style>
