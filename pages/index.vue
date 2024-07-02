<template>
  <main class="container">
    <div v-if="pending" class="panding"><span class="spiner"></span></div>
    <div v-else>
      <ArticlesList :dataPosts="dataPosts" />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { IInfoPost } from "~/Types";

const dataPosts = ref<IInfoPost[]>([]);

const { pending, data: posts } = await useLazyFetch<IInfoPost[]>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`
);

if (posts.value) {
  dataPosts.value = posts.value;
}
</script>
