<template>
  <section class="articles">
    <h1 class="title">Articles</h1>
    <div class="articles-block">
      <ArticleItem v-for="item in 8" :key="item" class="articles-item" />
    </div>
    <Pagintation />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.articles {
  margin-top: 120px;
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
  row-gap: 40px;
}

.articles-item {
  grid-column: 3 span;
}
</style>
