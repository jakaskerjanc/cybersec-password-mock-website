<template>
  <div class="chrome-nudge">
    <div
      class="top-row"
      @click="emitPassword"
    >
      <img
        class="key-image"
        src="/key.svg"
      >
      <div class="top-text">
        <div>Use strong password</div>
        <div class="generated-password">
          {{ password }}
        </div>
      </div>
    </div>
    <div class="bottom-row">
      You don't need to remember this password. It will be saved to you Google Password Manager.
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateRandomPassword } from '../../composables/utils'

const emit = defineEmits<{
  selected: [value: string]
}>()

const password = generateRandomPassword()

function emitPassword() {
  emit('selected', password)
}
</script>

<style scoped lang="less">
@background-black: #1E1E1E;
@background-hover-black: #2F2F2F;
@white-text: #FFFFFF;
@gray-text: #C7C7C7;
@bottom-border-color: #5E5E5E;

.chrome-nudge {
  width: 500px;
  height: 138px;
  border-radius: 10px;
  background-color: @background-black;
  color: @white-text;
  user-select: none;
}

.top-row {
  height: 56px;
  padding-left: 16px;
  display: flex;
  border-bottom: 1px solid @bottom-border-color;
  align-items: center;

  &:hover {
    background-color: @background-hover-black;
    border-radius: 10px 10px 0 0;
  }
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
  color: @white-text;
  margin-right: 16px;
}

.generated-password {
  color: @gray-text;
}

.bottom-row {
  height: 82px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  color: @gray-text;
}
</style>