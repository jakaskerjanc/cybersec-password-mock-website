<template>
    <div class="login-form">
        <h2>Login into your account</h2>
        <v-text-field label="Email" v-model="email" type="email" />
        <v-text-field label="Password" v-model="password" type="password" />
        <div class="button-wrapper">
            <v-btn @click="login" color="primary">
                Login
            </v-btn>
            <v-btn @click="toRegister" color="primary">
                Create account
            </v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useState from '../composables/state'

const email = ref('')
const password = ref('')

const { isRegistering } = useState

function toRegister() {
    isRegistering.value = true
}

function login() {
    console.log('Logging in...')
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