<script setup>
import Header from "./components/Header.vue";
import HeroImage from "./components/HeroImage.vue";
import footerPage from "./components/FooterPage.vue";
import Varokorg from "./components/Varokorg.vue";
</script>

<template>
  <div id="main-content">
    <Header />
    <varokorg />
    <HeroImage />
    <!-- här kommer nav/header renderas -->
    <RouterView />
  </div>
  <footerPage />
</template>

<style scoped></style>
