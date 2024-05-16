<template>
  <div class="register-form">
    <h2 class="pb-3">
      Create your account with Odense Fresh
    </h2>
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
          :model-value="password"
          :class="{ 'hide-password': !showPassword}"
          label="Password"
          type="text"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordValidator]"
          validate-on="blur"
          @update:model-value="onPasswordTyped"
          @click:append="togglePasswordVisibility"
          @focus="isOverlayOpen = true"
          @blur="isOverlayOpen = false"
          @click.stop="isOverlayOpen = !isOverlayOpen"
        />
      </template>
      <template v-if="browserName === 'firefox'" />
      <template v-else-if="browserName === 'safari'" />
      <chrome-nudge
        v-else
        v-model:password="generatedPassword"
        @selected="onPasswordSelected"
        @hovered="onPasswordNudgeHovered"
      />
    </v-overlay>
    <v-text-field
      v-model="confirmPassword"
      label="Confirm Password"
      :class="{ 'hide-password': !showConfirmPassword}"
      type="text"
      :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showConfirmPassword = !showConfirmPassword"
    />
    <div class="button-wrapper">
      <v-btn
        color="primary"
        @click="register"
      >
        Register
      </v-btn>
      <v-btn
        color="primary"
        @click="toLanding"
      >
        Back
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import useState from '../composables/state'
import { generateRandomPassword } from '../composables/utils'
import { detect } from 'detect-browser'

const browser = detect()
const browserName = computed(() => browser ? browser.name : '')

const isOverlayOpen = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const generatedPasswordSelected = ref(false)

const email = ref('')
const password = ref('')
const generatedPassword = ref('')
const confirmPassword = ref('')

const { currentPage, passwordPolicy, accountPassword, accountEmail } = useState

onMounted(() => {
  generatedPassword.value = generateRandomPassword()
})

function register() {
  if (!email.value ||
    !password.value ||
    !confirmPassword.value ||
    password.value !== confirmPassword.value ||
    !passwordValidator(password.value)) {
    alert('Error while registering!')
    return
  }
  accountPassword.value = password.value
  accountEmail.value = email.value
  currentPage.value = 'Login'
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

function onPasswordSelected() {
  password.value = generatedPassword.value
  confirmPassword.value = generatedPassword.value
  showPassword.value = false
  isOverlayOpen.value = false
  generatedPasswordSelected.value = true
}

function togglePasswordVisibility(e: Event) {
  e.stopPropagation()
  showPassword.value = !showPassword.value
}

function onPasswordNudgeHovered(isHovered: boolean) {
  password.value = isHovered ? generatedPassword.value : ''
  showPassword.value = isHovered
}

function onPasswordTyped(typedPassword: string) {
  // Update generated password if user changes it a bit or
  // regenerate password in nudges if user makes it too short
  if (generatedPasswordSelected.value) {
    if (typedPassword.length < 5) {
      generatedPasswordSelected.value = false
      generatedPassword.value = generateRandomPassword()
    } else {
      generatedPassword.value = typedPassword
    }
    password.value = typedPassword
  } else {
    password.value = typedPassword
  }
}

function toLanding() {
    currentPage.value = 'Landing'
}
</script>

<style scoped lang="less">
@font-face{
  font-family: text-security-disc;
  src: url("https://raw.githubusercontent.com/noppa/text-security/master/dist/text-security-disc.woff");
}

.hide-password {
  ::v-deep(input) {
    -webkit-text-security: disc;
    font-family: text-security-disc;
  }
}

.register-form {
  display: flex;
  flex-direction: column;
  width: 500px;

  ::v-deep(.v-input__details) {
    .v-messages__message {
      padding-bottom: 6px;
    }
  }
}

.button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>