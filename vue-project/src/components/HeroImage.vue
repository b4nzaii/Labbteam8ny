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
  max-height: 32vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
/** För iphone 14 **/
@media (max-width: 430px) {
  .hero-section {
    max-height: 40vh;
  }
}
/** Lite större skärmar **/
@media (min-width: 768px) and (max-width: 1439px) {
  .hero-section {
    max-height: 45vh;
  }
}
</style>
