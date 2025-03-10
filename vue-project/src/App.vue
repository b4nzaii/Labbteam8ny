<script setup>
import Header from "./components/Header.vue";
import HeroImage from "./components/HeroImage.vue";
import footerPage from "./components/FooterPage.vue";
import Cart from "./components/Cart.vue";
</script>

<template>
  <div id="main-content">
    <Header />
    <HeroImage />
    <cart />
    <!-- här kommer nav/header renderas -->
    <RouterView />
  </div>

  <footerPage />
</template>

<style scoped></style>
