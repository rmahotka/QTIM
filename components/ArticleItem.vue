<template>
  <div
    class="card"
    @mouseenter="hoverCard(true)"
    @mouseleave="hoverCard(false)"
  >
    <div class="articl-item" :class="{ hovered: hover }">
      <img :src="data.image" :alt="data.title" />
      <p class="articl-item-text">
        {{ data.preview }}
      </p>
      <NuxtLink
        v-if="hover"
        :to="{ name: 'posts-id', params: { id: data.id } }"
      >
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IInfoPost } from "~/Types";

function defineProps<T>() {
  throw new Error("Function not implemented.");
}

defineProps<{
  data: IInfoPost;
}>();

const hover = ref<boolean>(false);

const hoverCard = (bool: boolean): boolean => {
  return (hover.value = bool);
};
</script>

<style scoped>
.card {
  height: 414px;
  cursor: pointer;
}

.articl-item {
  transition: transform 0.3s ease;
}

.articl-item.hovered {
  transform: translateY(-20px);
}

.articl-item img {
  min-width: 280px;
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
}

.articl-item-text {
  margin-top: 24px;
  font-size: 20px;
  line-height: 1.2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 74px;
}

.articl-item a {
  display: block;
  margin-top: 12px;
  width: 100%;
  font-size: 20px;
  line-height: 1.2;
  color: var(--pink);
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
}

.articl-item a:hover {
  color: #cfa6f1;
}
</style>
