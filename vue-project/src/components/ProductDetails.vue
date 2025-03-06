<template>
  <div class="product-details" v-if="product">
    <!-- Produktbild -->
    <div class="product-image">
      <img :src="product.imageUrl" alt="Produktbild" />
    </div>
    <!-- Produktinformation -->
    <div class="product-info">
      <h1>{{ product.title }}</h1>

      <p class="price">{{ product.price }} kr</p>

      <p class="size">Storlek: {{ product.size }}</p>

      <p class="description">{{ product.description }}</p>

      <button class="add-to-cart" @click="addToCart">
        <!--- För Maowlidans cart funktion-->
        Lägg till i varukorg
      </button>
    </div>
    <router-link to="/" class="back-link">
      Tillbaka till startsidan ⬅️
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetails",
  data() {
    return {
      product: null,
    };
  },
  created() {
    const productId = this.$route.params.id;

    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        this.product = {
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          imageUrl: data.thumbnail,
          size: "M",
        };
      });
  },
};
</script>
<style scoped>
.product-details {
  display: flex;
  padding: 4rem;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1200px;
}

.product-image {
  flex: 2;
  text-align: center;
}
.product-image img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
.product-info {
  flex: 1;
  max-width: 500px;
}
.product-info-section h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
.product-info .description {
  line-height: 1.6;
  margin-bottom: 1.5em;
}
.add-to-cart {
  display: inline-block;
  padding: 0.75em 1.5em;
  background-color: Black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
.add-to-cart:hover {
  background-color: #333;
}
.back-link {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 35px;
}
.back-link:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .product-details {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  }
  .back-link {
    font-size: 1.25rem;
  }
}
</style>
