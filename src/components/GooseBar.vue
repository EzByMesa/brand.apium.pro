<template>
  <v-app-bar density="compact" elevation="0" color="black">
    <v-app-bar-title>
      <span style="cursor: pointer" v-on:click="go_home()">APIUM MEDIA</span>
    </v-app-bar-title>

    <LanguageSwitcher />

  </v-app-bar>
</template>
<script>
import { ColorPickerColor } from "@/store/color.store.js";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default {
  name: "GooseBar",
  components: { LanguageSwitcher },
  methods: {
    go_home: function () {
      window.location.href = "/";
    }
  },
  computed: {
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

</style>
