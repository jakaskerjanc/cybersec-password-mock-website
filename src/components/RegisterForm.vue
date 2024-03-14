<template>
    <div class="register-form">
        <h2>Create your account</h2>
        <v-text-field label="Email" v-model="email" type="email" />
        <v-text-field label="Password" v-model="password" type="password" />
        <v-text-field label="Confirm Password" v-model="confirmPassword" type="password" />
        <v-btn @click="register" color="primary">
            Register
        </v-btn>
    </div>
</template>

<style scoped>
.register-form {
    display: flex;
    flex-direction: column;
    width: 450px;
}
</style>