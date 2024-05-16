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
        <v-btn
          icon="mdi-cog"
          @click="onCogClick"
        />
      </template>
      <v-app-bar-title>Odense Fresh</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <LandingPage v-if="currentPage === 'Landing'" />
      <LoginPage v-if="currentPage === 'Login' || currentPage === 'Register'" />
    </v-main>
    <v-snackbar
      v-model="snackbar"
      timeout="5000"
    >
      Password policy changed to {{ passwordPolicy }}
      <template #actions />
    </v-snackbar>
  </v-app>
</template>

<script setup lang="ts">
import useState from './composables/state'
import { ref } from 'vue'

const { currentPage, togglePasswordPolicy, passwordPolicy } = useState

const snackbar = ref(false)

function onCogClick() {
  togglePasswordPolicy()
  snackbar.value = true
}
</script>