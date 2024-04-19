<template>
    <div class="chrome-nudge">
        <div class="top" @click="emits('selected')">
            <img class="key-image" src="/key.svg" />
            <div class="top-text">
                <div>Use strong password</div>
                <div class="password">34z*4f/j%DXYd</div>
            </div>
        </div>
        <div class="bottom">
            You don't need to remember this password. It will be saved to you Google Password Manager.
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['selected'])
</script>

<style scoped>
.chrome-nudge {
    width: 500px;
    height: 138px;
    border-radius: 10px;
    background-color: #1F1F1F;
    color: white;
    user-select: none;
}

.top {
    height: 56px;
    padding-left: 16px;
    display: flex;
    border-bottom: 1px solid #5E5E5E;
    align-items: center;
}

.top:hover {
    background-color: #2F2F2F;
    border-radius: 10px 10px 0 0;
}

.top-text {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 24px;
}

.key-image {
    width: 24px;
    height: 24px;
    color: white;
    margin-right: 16px;
}

.bottom {
    height: 82px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    color: #C7C7C7;
}

.password {
    color: #C7C7C7;
}
</style>