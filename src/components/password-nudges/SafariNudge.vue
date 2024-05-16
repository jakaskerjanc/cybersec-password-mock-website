<template>
  <div class="arrow-left" />
  <div class="safari-nudge">
    <div class="top-row">
      <SafariKey />
      <div class="top-text">
        <div>Safari created a strong password for<br>this website.</div>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom-text">
        This password will be saved to your iCloud Keychain and will AutoFill on
        all your devices. Look up your saved passwords in the Passwords pane of
        System Settings or by asking Siri.
      </div>
      <div class="bottom-buttons">
        <div class="other-button">
          Other Options
        </div>
        <div
          class="use-button"
          @click="onSelected"
          @mouseenter="() => onHover(true)"
          @mouseleave="() => onHover(false)"
        >
          Use Strong Password
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const password = defineModel("password", { type: String, default: "" });

const emit = defineEmits<{
	selected: [];
	hovered: [isHovered: boolean];
}>();

function onSelected() {
	emit("selected");
}

function onHover(isHover: boolean) {
	emit("hovered", isHover);
}
</script>

<style scoped lang="less">
@background-black: #1e1e1e;
@background-hover-black: #2f2f2f;
@white-text: #ffffff;
@gray-text: #c7c7c7;
@bottom-border-color: #5e5e5e;

.arrow-left {
	@arrow-size: 12px;
	width: 0;
	height: 0;
	border-top: @arrow-size solid transparent;
	border-bottom: @arrow-size solid transparent;
	border-right: @arrow-size solid #F0F0F1;
	position: absolute;
	margin-top: 62px;
	margin-left: -40px;
}

.safari-nudge {
    margin-left: -32px;
	width: 350px;
	height: 150px;
	border-radius: 10px;
	background-color: #F0F0F1;
	color: #5e5e5e;
	user-select: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.top-row {
	height: 52px;
	padding-left: 16px;
	display: flex;
	border-bottom: 1px solid #c7c7c7;
	align-items: center;
}

.top-text {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-right: 32px;
	font-size: 14px;
}

.generated-password {
	color: @gray-text;
}

.bottom-row {
	height: 82px;
	padding-left: 16px;
	display: block;
	align-items: center;
	color: #5e5e5e;
}

.bottom-text {
	font-size: 12px;
}
.bottom-buttons {
    display: flex;
    justify-content: flex-end;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 10px;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
}

.other-button {
    background-color: #e5e5e5;
    color: black;
    padding: 2px 8px;
    border-radius: 8px;
    margin-left: 8px;
}

.use-button {
    background-color: #007AFF;
    padding: 2px 8px;
    border-radius: 8px;
    margin-left: 8px;
}
</style>
