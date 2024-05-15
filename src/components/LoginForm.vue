<template>
  <div class="login-form">
    <h2>Login into your Odense Fresh account</h2>
    <v-text-field
      v-model="email"
      label="Email"
      type="email"
    />
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
    />
    <div class="button-wrapper">
      <v-btn
        color="primary"
        @click="login"
      >
        Login
      </v-btn>
      <v-btn
        color="primary"
        @click="toRegister"
      >
        Create account
      </v-btn>
      <v-btn
        color="primary"
        @click="toLanding"
      >
        Back to home
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useState from '../composables/state'

const email = ref('')
const password = ref('')

const { currentPage, accountPassword, accountEmail } = useState


function toRegister() {
    currentPage.value = 'Register'
}

function toLanding() {
    currentPage.value = 'Landing'
}

function login() {
  if (!email.value) return
  if (!password.value) return
  if (email.value !== accountEmail.value) return
  if (password.value !== accountPassword.value) return

  alert('Logged in!')
}
</script>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    width: 450px;
}

.button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>