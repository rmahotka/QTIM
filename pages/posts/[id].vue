<template>
  <div class="container">
    <div v-if="pending" class="panding"><span class="spiner"></span></div>
    <div v-else class="block-post">
      <h1 class="title">{{ post?.title }}</h1>
      <img :src="post?.image" :alt="post?.title" />
      <div class="post-block-text">
        <p class="post-block-title">About</p>
        <p class="post-text">{{ post?.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IInfoPost } from "~/Types";
const route = useRoute();

const id = route.params.id;
const { pending, data: post } = await useLazyFetch<IInfoPost>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
);
</script>

<style scoped>
.block-post {
  margin-top: 152px;
  margin-bottom: 80px;
}

.title {
  font-size: 84px;
  line-height: 84px;
  margin-bottom: 73px;
}

.block-post img {
  width: 100%;
  height: 700px;
  object-fit: cover;
  margin-bottom: 73px;
}

.post-block-text {
  width: 695px;
}

.post-block-title {
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 32px;
}

.post-text {
  font-size: 36px;
  line-height: 45px;
}
</style>
