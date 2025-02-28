<template>
  <!--Hero container med bilden som är tänkt att täcka hela bredden -->
  <section class="hero-section">
    <img src="@/assets/heroimage2.avif" class="hero-image" />
  </section>
</template>

<script>
export default {
  name: "HeroImage",
};
</script>

<style scoped>
.hero-section {
  width: 100%;
  max-height: 450px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: fill;
}
</style>
