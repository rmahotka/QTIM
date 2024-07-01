<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-block-text">
          <p class="footer-block-subtitle">Is there a project?</p>
          <p class="footer-block-title">Let’s work together</p>
        </div>
        <div class="footer-block-contacts">
          <div class="contact-info">
            <p class="contact-title">For all questions</p>
            <div class="contact-data">
              <a class="contact-phone" href="tel:+7 (920) 278—00—68"
                >+7 (920) 278—00—68</a
              >
              <a class="contact-mail" href="mailto:qtim@agency.com"
                >qtim@agency.com</a
              >
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
        <div class="circle">Go</div>
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
interface IInfoAdress {
  title: string;
  address: string;
}

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
  line-height: 1;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 273px;
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
  padding-bottom: 6px;
}

.circle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 32px;
  line-height: 32px;
  width: 358px;
  height: 358px;
  border-radius: 100%;
  background: var(--black);
}
</style>
