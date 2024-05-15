
<template>
  <div class="login-page">
    <RegisterForm v-if="currentPage=== 'Register'" />
    <LoginForm v-if="currentPage=== 'Login'" />
  </div>
</template>

<script setup lang="ts">
import useState from '../composables/state'

const { currentPage } = useState
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 64px);
}
</style>
