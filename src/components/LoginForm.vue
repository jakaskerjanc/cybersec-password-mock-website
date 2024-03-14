<template>
    <div class="login-form">
        <h2>Login into your account</h2>
        <v-text-field label="Email" v-model="email" type="email" />
        <v-text-field label="Password" v-model="password" type="password" />
        <v-btn @click="login" color="primary">
            Login
        </v-btn>
    </div>
</template>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    width: 450px;
}
</style>