<template>
  <v-sheet style="position: fixed; height: 100%; width: 100%; top: 0; left: 0; overflow: auto" id="home_area" v-on:scroll="scrollEvent" v-on:wheel="scrollingEvent">
    <v-sheet :style="`background: ${gradient}`" width="100%" :height="height">
      <v-fade-transition>
        <v-sheet v-if="slide.type === 'title'" >
          <a-title :meta="slide" />
        </v-sheet>
        <v-sheet v-if="slide.type === 'color'" >
          <a-color :meta="slide" />
        </v-sheet>
        <v-sheet v-if="slide.type === 'text'" >
          <a-text :meta="slide" />
        </v-sheet>
        <v-sheet v-if="slide.type === 'image'" >
          <a-image :meta="slide" />
        </v-sheet>
        <v-sheet v-if="slide.type === 'url'" >
          <a-url :meta="slide" />
        </v-sheet>
      </v-fade-transition>
    </v-sheet>
  </v-sheet>

  <v-sheet style="position: fixed; top: 0; z-index: 3000;" color="red" v-if="false">
    {{ scrolling }}
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

import ATitle from "@/components/slides/title.slide.vue";
import AColor from "@/components/slides/color.slide.vue";
import AText from "@/components/slides/text.slide.vue";
import AImage from "@/components/slides/image.slide.vue";
import AUrl from "@/components/slides/url.slide.vue";
import {Position, Scrolling, Timer} from "@/store/scroll.store.js";

export default {
  name: "HomeView",
  components: {AUrl, AImage, AText, AColor, ATitle },
  methods: {
    scrollingEvent: function () {
      this.scrolling = true
      this.timer = setTimeout(() => {
        this.scrolling = false
        window.clearTimeout(this.timer)
      }, 100)
    },
    scrollEvent: function () {
      this.scroll = document.getElementById('home_area').scrollTop
    },
    open_color: function (color) {
      this.$router.push({ name: 'color', params: { color: color.replace('#', '') } })
    }
  },
  computed: {
    slides() {
      return this.$slides
    },
    step() {
      let step = this.height / this.$slides.length
      let scroll = this.scroll
      let pos = 0
      let offset = window.screen.availHeight / 2
      for (let i = 0; i < this.$slides.length; i++) {
        if (scroll >= step * i - offset && scroll <= step * i + step - offset) {
          pos = i
        }
      }
      return pos
    },
    slide() {
      return this.$slides[this.step]
    },
    height() {
      return window.screen.availHeight * this.$slides.length
    },
    gradient() {
      let points = []
      let step = 100 / this.$slides.length
      for (let [index, el] of this.$slides.entries()) {
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
    },
    scroll: {
      get() {
        return Position().get()
      },
      set(v) {
        Position().set(v)
      }
    },
    scrolling: {
      get() {
        return Scrolling().get()
      },
      set(v) {
        Scrolling().set(v)
      }
    },
    timer: {
      get() {
        return Timer().get()
      },
      set(v) {
        Timer().set(v)
      }
    }
  }
}
</script>

<style scoped>

</style>
