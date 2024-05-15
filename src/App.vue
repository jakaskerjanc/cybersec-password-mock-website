<template>
  <v-app>
    <v-app-bar
      color="primary"
      :elevation="4"
    >
      <template #append>
        <v-btn> Categories </v-btn>
        <v-btn> Schedule </v-btn>
        <v-btn> About us </v-btn>
      </template>
      <v-app-bar-title>Odense Fresh</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <LandingPage v-if="currentPage === 'Landing'" />
      <LoginPage v-if="currentPage === 'Login' || currentPage === 'Register'" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import useState from './composables/state'

const { currentPage } = useState
</script>