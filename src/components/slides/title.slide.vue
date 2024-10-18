<template>
  <v-sheet class="d-flex justify-center align-center flex-column" position="fixed" width="100%" height="100%" color="transparent" style="pointer-events: none; line-height: 0.8">
    <p style="color: white; font-size: calc( (100vw - 480px)/(1920 - 480) * (60 - 20) + 20px); text-align: center">{{ meta.text }}</p>
    <p style="color: white; font-size: calc( (100vw - 480px)/(1920 - 480) * (120 - 50) + 50px); text-align: center">{{ meta.name }}</p>
  </v-sheet>

  <v-sheet class="scrollize" style="position: fixed; bottom: 0; right: 0; color: white !important; text-align: center" width="100">
    SCROLL <v-icon :icon="['fas', 'arrow-down']" />
  </v-sheet>
</template>

<script>
export default {
  name: "a-title",
  props: ['meta']
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
