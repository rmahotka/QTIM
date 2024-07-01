<template>
  <div class="address-block">
    <p class="address-title">{{ info.title }}</p>
    <p class="address-text">{{ info.address }}</p>
    <button class="btn">
      <IconsMapsLink />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  info: {
    title: string;
    address: string;
  };
}>();
</script>

<style scoped>
.address-block {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  width: 152px;
}

.address-title {
  margin-bottom: 12px;
}

.address-text {
  margin-bottom: 8px;
}

.btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--black);
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
