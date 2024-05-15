<template>
  <div class="arrow-up" />
  <div class="chrome-nudge">
    <div
      class="top-row"
      @click="onSelected"
      @mouseenter="() => onHover(true)"
      @mouseleave="() => onHover(false)"
    >
      <ChromeKey />
      <div class="top-text">
        <div>Use strong password</div>
        <div class="generated-password">
          {{ password }}
        </div>
      </div>
    </div>
    <div class="bottom-row">
      You don't need to remember this password. It will be saved to your Google Password Manager.
    </div>
  </div>
</template>

<script setup lang="ts">
import ChromeKey from './ChromeKey.vue';

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
.arrow-up {
  @arrow-size: 8px;
  width: 0;
  height: 0;
  border-left: @arrow-size solid transparent;
  border-right: @arrow-size solid transparent;
  border-bottom: @arrow-size solid rgb(var(--v-theme-chrome-background));

  position: absolute;
  margin-left: 24px;
  margin-top: -8px;
}

.chrome-nudge {
  width: 500px;
  height: 138px;
  border-radius: 10px;
  background-color: rgb(var(--v-theme-chrome-background));
  color: rgb(var(--v-theme-ligher-text));
  user-select: none;
  box-shadow: var(--v-chrome-box-shadow);
}

.top-row {
  height: 56px;
  padding-left: 16px;
  display: flex;
  border-bottom: 1px solid rgb(var(--v-theme-chrome-bottom-border));
  align-items: center;

  &:hover {
    background-color: rgb(var(--v-theme-chrome-background-hover));
    border-radius: 10px 10px 0 0;
  }
}

.top-text {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 24px;
}

.generated-password {
  color: rgb(var(--v-theme-ligher-text));
}

.bottom-row {
  height: 82px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  color: rgb(var(--v-theme-darker-text));;
}
</style>
