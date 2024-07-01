<template>
  <header class="header">
    <NuxtLink to="/">
      <IconsLogo />
    </NuxtLink>
    <div class="header-block">
      <nav class="header-menu">
        <NuxtLink to="/Works">Works</NuxtLink>
        <NuxtLink to="/About">About</NuxtLink>
      </nav>
      <div class="btn-block">
        <button class="btn-language">
          <IconsEnglishLanguage />
        </button>
        <button class="btn">Let’s work</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  margin: 35px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-block {
  display: flex;
  align-items: center;
  gap: 91px;
}

.header-menu {
  display: flex;
  align-items: center;
  gap: 58px;
}

.header-menu a {
  text-decoration: none;
  font-size: 20px;
  line-height: 1;
  transition: 0.3s;
}

.header-menu a:hover {
  color: var(--black-hover);
}

.btn-block {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn {
  border-radius: 999px;
  background-color: var(--black);
  padding: 16px 32px;
  line-height: 1;
  color: var(--white);
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid var(--black);
}
.btn:hover {
  border-color: var(--border-gray);
  background-color: inherit;
  transition: 0.3s;
  color: var(--black);
}

.btn-language {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  background: inherit;
  width: 52px;
  height: 52px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}

.btn-language:hover {
  border-color: var(--black);
}
</style>
