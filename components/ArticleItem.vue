<template>
  <div class="articl-item">
    <img src="~/assets/img/1.png" alt="" />
    <p class="articl-item-text">
      One of the liveliest podcasts about working as a frontrunner. The authors
      don't hesitate to use profanity, and in one episode they discuss a dozen
      topics at once, from the meaning of life to finding the best jobs in St.
      Petersburg for a junior position.
    </p>
    <NuxtLink to="/posts/1">Read more</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.articl-item {
  /* height: 398px; */
  cursor: pointer;
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
