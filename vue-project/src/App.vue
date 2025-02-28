<script setup>
import Header from "./components/Header.vue";
import HeroImage from "./components/HeroImage.vue";
/**import ForHim from "./components/ForHim.vue";*/
</script>

<template>
  <Header />
  <HeroImage />
  <!-- här kommer nav/header renderas -->
  <RouterView />
</template>

<style scoped></style>
