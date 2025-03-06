<template>
  <div class="about">
    <h1 class="section-title">For Him</h1>

    <div class="product-row">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div @click="goToProduct(product.id)">
          <img :src="product.image" alt="product.name" />
        </div>
        <div>
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">{{ product.price }} :-</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Copy paste från ForHer.Vue ändrar bara kategorierna.-->

<script>
import axios from "axios";
export default {
  name: "ForHer",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      const categories = [
        "mens-clothing",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
      ];
      // Skapa en array med axios‑anrop för varje kategori
      const requests = categories.map((category) =>
        axios.get(
          `https://dummyjson.com/products/category/${category}?limit=30`
        )
      );
      // Kör alla anrop parallellt
      Promise.all(requests).then((responses) => {
        let allProducts = [];
        responses.forEach((response) => {
          const mapped = response.data.products.map((product) => ({
            id: product.id,
            name: product.title, // denna Mappning menas: "title" -> "name"
            price: product.price,
            image: product.thumbnail, // Använder "thumbnail" som bild
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
  },
};
</script>

<style scoped>
.about {
}
.section-title {
  font-size: 38px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}
.product-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  flex: 1 1 350px;
  max-width: 400px;
  padding: 8px 8px;
  border-radius: 8px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
}

.product-item:hover {
  transform: translateY(-10px);
}

.product-name {
  font-size: 18px;
  font-weight: 500;
  color: #444;
  margin-bottom: 1px;
}

.product-price {
  font-size: 16px;
  color: #888;
  margin-bottom: 3px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }

  .product-row {
    justify-content: center;
  }

  .product-item {
    width: 100%;
    margin: 10px 0;
    padding: 16px;
    text-align: center;
  }

  .product-name {
    font-size: 16px;
  }

  .product-price {
    font-size: 14px;
  }
}
</style>
