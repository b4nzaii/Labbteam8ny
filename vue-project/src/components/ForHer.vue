<template>
    <div class="about">
        <h1 class="section-title">For Her</h1>

    <div class="product-row">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div @click="goToProduct(product.id)">
          <img :src="product.image" alt="product.name" />
        </div>
        <div>
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">{{ product.price }}</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script >
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "produkt 1",
          price: "123:-",
          image: "https://placehold.co/280x400/png",
        },
        {
          id: 2,
          name: "produkt 2",
          price: "$123:-",
          image: "https://placehold.co/280x400/png",
        },
        {
          id: 3,
          name: "produkt 3",
          price: "123:-",
          image: "https://placehold.co/280x400/png",
        },
        {
          id: 4,
          name: "produkt 4",
          price: "123:-",
          image: "https://placehold.co/280x400/png",
        },
      ],
    };
  },
  methods: {
    goToProduct(productId){
        this.$router.push({name: "ProductDetails", params: {id: productId}}) //osäker på om det här fungerar
    }
  },
};
</script>

<style scoped>
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
  width: auto;
  padding: 8px 8px;
  border-radius: 8px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  overflow: hidden;
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
