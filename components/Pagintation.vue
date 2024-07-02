<template>
  <div class="pagination">
    <button
      @click="prevPage(currentPage - 1)"
      class="btn btn-next"
      v-if="currentPage !== 1"
    >
      <IconsArrowPagination style="transform: rotate(180deg)" />
    </button>

    <button
      v-for="page in visiblePage"
      :key="page"
      @click="changePage(page)"
      :class="['btn', { active: page === currentPage }]"
    >
      {{ page }}
    </button>

    <button
      @click="nextPage(currentPage + 1)"
      v-if="currentPage !== totalPages"
      class="btn btn-next"
    >
      <IconsArrowPagination />
    </button>
  </div>
</template>

<script setup lang="ts">
function defineEmits<T>() {
  throw new Error("Function not implemented.");
}
function defineProps<T>() {
  throw new Error("Function not implemented.");
}

const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

const visiblePage = computed((): number[] => {
  const startPage = Math.max(1, props.currentPage - 2);
  const endPage = Math.min(props.totalPages, startPage + 4);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
});

const emit = defineEmits<{
  (e: "changePage", page: number): void;
  (e: "nextPage"): void;
  (e: "prevPage"): void;
}>();

const changePage = (page: number): void => {
  if (page > 0 && page <= props.totalPages) {
    emit("changePage", page);
  }
};

const nextPage = (): void => {
  if (props.currentPage < props.totalPages) {
    emit("nextPage");
  }
};

const prevPage = (): void => {
  if (props.currentPage !== 1) {
    emit("prevPage");
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 31px;
}

.btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 0;
  background: var(--gray);
  color: var(--black);
  font-size: 16px;
  line-height: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: var(--border-gray);
}

.btn.active {
  background: var(--black);
  color: var(--white);
}

.btn-next {
  border: 1px solid var(--border-gray);
  background: inherit;
}
</style>
