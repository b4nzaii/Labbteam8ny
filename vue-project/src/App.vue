<script setup>
import Header from "./components/Header.vue";
import HeroImage from "./components/HeroImage.vue";
import footerPage from "./components/FooterPage.vue";
</script>

<template>
  <div id="main-content">
    <Header />
    <HeroImage />

    <!-- här kommer nav/header renderas -->
    <RouterView />
  </div>

  <footerPage />
</template>

<style scoped></style>
