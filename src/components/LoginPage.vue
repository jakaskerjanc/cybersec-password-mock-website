
<template>
    <div class="login-page">
        <RegisterForm v-if="isRegistering" />
        <LoginForm  v-else/>
    </div>
</template>

<script setup lang="ts">
import useState from '../composables/state'

const { isRegistering } = useState
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
