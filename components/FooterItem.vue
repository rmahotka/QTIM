<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-block-text">
          <p class="footer-block-subtitle">Is there a project?</p>
          <p>
            <span class="footer-block-title footer-block-title--top">
              Let’s work
            </span>
            <br />
            <span class="footer-block-title footer-block-title--bottom">
              together
            </span>
          </p>
        </div>
        <div class="footer-block-contacts">
          <div class="contact-info">
            <p class="contact-title">For all questions</p>
            <div class="contact-data">
              <a class="contact-phone" href="tel:+7 (920) 278—00—68">
                +7 (920) 278—00—68
              </a>
              <a class="contact-mail" href="mailto:qtim@agency.com">
                qtim@agency.com
              </a>
            </div>
          </div>
          <ContactAdress
            v-for="(info, index) in adressInfo"
            :key="index"
            :info="info"
          />
        </div>
      </div>
      <div class="footer-bootom">
        <ul class="footer-link">
          <li v-for="link in linksLeft" :key="link">
            <NuxtLink to="#" external>{{ link }}</NuxtLink>
          </li>
        </ul>
        <div class="half-circle-wrapper">
          <div class="half-circle">
            <span>Go</span>
          </div>
        </div>
        <ul class="footer-link">
          <li v-for="link in linksRight" :key="link">
            <NuxtLink to="#" external>{{ link }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { IInfoAdress } from "~/Types";
const adressInfo = ref<IInfoAdress[]>([
  {
    title: "Office in Russia",
    address: "139 Ruben Station Lake Drew, NM 52678",
  },
  {
    title: "Office in Dubai",
    address: "139 Ruben Station Lake Drew, NM 52678",
  },
]);

const linksLeft = ref<string[]>(["Facebook", "Instagram", "Telegram"]);
const linksRight = ref<string[]>(["Behance", "Linkedn", "Privacy Policy"]);
</script>

<style scoped>
.footer {
  background-color: var(--pink);
  padding-top: 140px;
}

.footer-top {
  display: flex;
  gap: 368px;
}

.footer-block-text {
  width: 464px;
  height: 299px;
}

.footer-block-title {
  font-size: 112px;
  line-height: 100%;
  position: relative;
  display: inline-block;
}

.footer-block-title--bottom::before,
.footer-block-title--bottom::after,
.footer-block-title--top::before {
  content: "";
  position: absolute;
  bottom: 16%;
  height: 1px;
  background-color: var(--black);
}

.footer-block-title--bottom::before {
  left: 0;
  right: 300px;
}

.footer-block-title--bottom::after {
  left: 155px;
  right: 0;
}

.footer-block-title--top::before {
  width: 100%;
  left: 5px;
}

.footer-block-subtitle {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  margin-bottom: 56px;
}

.contact-info {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.01em;
}

.contact-title {
  margin-bottom: 12px;
}

.contact-data {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-data a {
  text-decoration: none;
}

.footer-block-contacts {
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-top: 75px;
}

.footer-bootom {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 273px;
  padding-bottom: 30px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0;
  margin: 0;
}

.footer-link li {
  list-style: none;
}

.footer-link li a {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 1px solid var(--black);
  padding-bottom: 2px;
}

.half-circle-wrapper {
  position: absolute;
  right: 64.7%;
  bottom: 0;
}

.half-circle {
  width: 358px;
  height: 179px;
  background-color: var(--black);
  border-top-left-radius: 358px;
  border-top-right-radius: 358px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.half-circle span {
  color: var(--white);
  font-size: 32px;
  margin-bottom: 25px;
}
</style>
