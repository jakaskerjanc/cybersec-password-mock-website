<template>
  <div class="register-form">
    <h2>Create your account</h2>
    <v-text-field
      v-model="email"
      label="Email"
      type="email"
    />
    <v-overlay
      v-model="isOverlayOpen"
      :scrim="false"
      location-strategy="connected"
      scroll-strategy="reposition"
    >
      <template #activator="{ props }">
        <v-text-field
          v-bind="props"
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordValidator]"
          @click:append="togglePasswordVisibility"
        />
      </template>
      <chrome-nudge @selected="onPasswordSelected" />
    </v-overlay>
    <v-text-field
      v-model="confirmPassword"
      label="Confirm Password"
      type="password"
    />
    <v-btn
      color="primary"
      @click="register"
    >
      Register
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useState from '../composables/state'

const isOverlayOpen = ref(false)
const showPassword = ref(false)

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const { isRegistering, passwordPolicy } = useState

function register() {
  // Register the user

  isRegistering.value = false
}

function passwordValidator(passwordInput: string) {
  if (passwordPolicy.value === '1C8') {
    return /^.{8,}$/.test(passwordInput) || 'Password must be at least 8 characters long'
  } else if (passwordPolicy.value === '3C12') {
    return validate3C12(passwordInput) || 'Password must be at least 12 characters long and contain at least 3 carracter classes (uppercase, lowercase, number, special character)'
  }
  return !!passwordInput
}

function validate3C12(password: string) {
  // Regex patterns to check each character class
  const lowercase = /[a-z]/;
  const uppercase = /[A-Z]/;
  const numbers = /\d/;
  const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

  if (!password) return false;

  // Count the number of character classes found in the password
  let classCount = 0;
  if (lowercase.test(password)) classCount++;
  if (uppercase.test(password)) classCount++;
  if (numbers.test(password)) classCount++;
  if (specialChars.test(password)) classCount++;

  // Validate the password length and character class count
  return password.length >= 12 && classCount >= 3;
}

function onPasswordSelected(selectedPassword: string) {
  password.value = selectedPassword
  isOverlayOpen.value = false
}

function togglePasswordVisibility(e: Event) {
  e.stopPropagation()
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  width: 450px;
}
</style>