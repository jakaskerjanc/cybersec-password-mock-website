<template>
  <div class="firefox-nudge">
    <div
      class="top-row"
      @click="onSelected"
      @mouseenter="() => onHover(true)"
      @mouseleave="() => onHover(false)"
    >
      <FirefoxKey />
      <div class="top-text">
        <div class="title-text">
          Use a Securely Generated Password
        </div>
        <div class="generated-password">
          {{ password }}
        </div>
        <div class="subtitle-text">
          Firefox will save this password for this website.
        </div>
      </div>
    </div>
    <div class="bottom-row">
      Manage Passwords
    </div>
  </div>
</template>

<script setup lang="ts">
import FirefoxKey from './FirefoxKey.vue';

const password = defineModel('password', { type: String, default: '' })

const emit = defineEmits<{
    selected: [],
    hovered: [isHovered: boolean]
}>()

function onSelected() {
    emit('selected')
}

function onHover(isHover: boolean) {
    emit('hovered', isHover)
}
</script>

<style scoped lang="less">
.firefox-nudge {
    margin-top: -22px;
    width: 460px;
    height: 110px;
    border-radius: 3px;
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: small;
    background-color: rgb(var(--v-theme-chrome-background));
    color: rgb(var(--v-theme-chrome-lighter-text));
    user-select: none;
    box-shadow: var(--v-chrome-box-shadow);
}

.top-row {
    height: 70px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c7c7c7;

    &:hover {
        border-radius: 10px 10px 0 0;
        background-color: rgb(var(--v-theme-chrome-background-hover));
    }
}

.top-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-right: 24px;
}

.title-text {
    font-weight: bold;
    font-size: 14px;
}

.subtitle-text {
    font-style: italic;
    font-size: 12px;
}

.generated-password {
    font-size: 14px;
    color: rgb(var(--v-theme-chrome-lighter-text));
}

.bottom-row {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(var(--v-theme-chrome-darker-text));

    &:hover {
        background-color: rgb(var(--v-theme-chrome-background-hover));
    }
}
</style>