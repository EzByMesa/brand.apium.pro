<template>
  <v-app>
    <v-main class="d-flex justify-center align-center" style="height: 100%; width: 100%">
      <v-container class="d-flex justify-center align-center flex-column" style="height: 100%; width: 100%;">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@font-face {
  font-family: 'Font';
  src: url('assets/font.ttf');
}

body, html {
  font-family: Font, sans-serif;
}
</style>
