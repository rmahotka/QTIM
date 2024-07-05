<template>
  <section class="articles">
    <h1 class="title">Articles</h1>
    <div class="articles-block">
      <ArticleItem
        v-for="item in currentPosts"
        :key="item.id"
        :data="item"
        class="articles-item"
      />
    </div>

    <Pagintation
      :totalPages="totalPages"
      :currentPage="currentPage"
      @changePage="handleChangePage"
      @nextPage="handleNextPage"
      @prevPage="handlePrevPage"
    />
  </section>
</template>

<script setup lang="ts">
import type { IInfoPost } from "~/Types";
import { defineProps } from "vue";

const props = defineProps<{
  dataPosts: IInfoPost[];
}>();

const currentPage = ref<number>(1);
const postsPerPage: number = 8;

const totalPages = computed((): number => {
  return Math.ceil(props.dataPosts.length / postsPerPage);
});

const currentPosts = computed((): IInfoPost[] => {
  const start: number = (currentPage.value - 1) * postsPerPage;
  const end: number = start + postsPerPage;
  return props.dataPosts.slice(start, end);
});

const saveLocal = (page: string) => {
  localStorage.setItem("page", page);
};

const handleChangePage = (page: number): void => {
  currentPage.value = page;
  saveLocal(String(page));
};

const handleNextPage = (): void => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    saveLocal(String(currentPage.value));
  }
};

const handlePrevPage = (): void => {
  if (currentPage.value !== 1) {
    currentPage.value--;
    saveLocal(String(currentPage.value));
  }
};
</script>

<style scoped>
.articles {
  margin-top: 153px;
  margin-bottom: 140px;
}

.title {
  font-size: 84px;
  line-height: 1;
  margin-bottom: 59px;
}

.articles-block {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 32px;
  row-gap: 23px;
}

.articles-item {
  grid-column: 3 span;
}
</style>
