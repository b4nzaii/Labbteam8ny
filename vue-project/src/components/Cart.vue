<template>
  <div class="container">
    <h1 class="title">Shopping Cart</h1>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h2>{{ product.name }}</h2>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <h2 class="cart-title">Your Cart</h2>
    <div v-if="cart.length === 0" class="empty-cart">Your cart is empty</div>
    <div v-else class="cart">
      <div v-for="product in cart" :key="product.id" class="cart-item">
        <span
          >{{ product.name }} - ${{ product.price }} x
          {{ product.quantity }}</span
        >
        <button @click="increaseQuantity(product)">+</button>
        <button @click="decreaseQuantity(product)">-</button>
        <button @click="removeFromCart(product)" class="remove">Remove</button>
      </div>
      <p class="total">Total: ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "{{product.name}}",
          price: "{{product.price}}",
        },
      ],
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
    },
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find(
        (product) => product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity() {
      const product = this.cart.find((product) => product.id === product.id);
      if (product) product.quantity++;
    },
    decreaseQuantity() {
      const product = this.cart.find((product) => product.id === product.id);
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        this.removeFromCart(product);
      }
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((product) => product.id !== product.id);
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
.title,
.cart-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.product-card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 200px;
}
.product-card:hover {
  transform: scale(1.05);
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
}
button:hover {
  background-color: #0056b3;
}
.cart {
  border-top: 2px solid #ccc;
  padding-top: 20px;
  margin-top: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.remove {
  background-color: #dc3545;
}
.remove:hover {
  background-color: #c82333;
}
.total {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
}
.empty-cart {
  font-style: italic;
  color: #777;
}
</style>
