<template>
  <div class="main-container">
    <h1 class="section-title">Home</h1>
    <div class="content-container">
      <div class="slideshow-container">
        <!-- Transition wrapper for fade effect -->
        <transition name="fade" mode="out-in">
          <img
            :key="products[currentIndex]?.id"
            v-if="products.length > 0"
            :src="products[currentIndex]?.image"
            :alt="products[currentIndex]?.name"
            @click="goToProduct(products[currentIndex]?.id)"
            class="slideshow-image"
          />
        </transition>
      </div>
      <div class="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
          corporis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      currentIndex: 0, // index för att visa olika produkter
      switchImage: null, // sparar intervaller för bildspelet
    };
  },
  created() {
    this.fetchProducts();
    this.startSlideShow();
  },
  methods: {
    fetchProducts() {
      const categories = [
        "womens-dresses",
        "womens-shoes",
        "womens-bags",
        "womens-jewellery",
        "womens-watches",
      ];
      // Skapa en array med axios‑anrop för varje kategori
      const requests = categories.map((category) =>
        axios.get(`https://dummyjson.com/products/category/${category}?limit=1`)
      );
      // Kör alla anrop parallellt med Promise.all
      Promise.all(requests).then((responses) => {
        let allProducts = [];
        responses.forEach((response) => {
          const mapped = response.data.products.map((product) => ({
            id: product.id,
            name: product.title, // Mappning: "title" -> "name"
            price: product.price,
            image: product.images[0],
          }));
          allProducts = allProducts.concat(mapped);
        });
        // Tilldelar den sammanslagna arrayen till products
        this.products = allProducts;
      });
    },
    goToProduct(productId) {
      this.$router.push({ name: "ProductDetails", params: { id: productId } });
    },
    //automatiskt bildspel som bläddrar mellan produkter
    startSlideShow() {
      this.switchImage = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.products.length;
      }, 7000); // byter bild efter 7 sekunder
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: rgba(255, 166, 0, 0.308);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 60vh;
}

.section-title {
  font-size: 38px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.slideshow-container {
  position: relative;
  width: 40vh;
  height: 40vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slideshow-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.text-container {
  flex: 1;
  padding: 20px;
  text-align: left;
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #000000;
  margin: 0;
}

/* Fade transition för bildspelet */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
