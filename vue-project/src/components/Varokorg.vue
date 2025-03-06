<template>
  <div class="cart">
    <h2>🛒 Din Varukorg</h2>

    <ul v-if="cart.length > 0">
      <li v-for="(item, index) in cart" :key="index">
        <span>{{ product.name }} - {{ product.price }} kr</span>

        <div class="quantity">
          <button @click="updateQuantity(index, -1)">➖</button>
          <span>{{ product.quantity }}</span>
          <button @click="updateQuantity(index, 1)">➕</button>
        </div>

        <button class="remove-btn" @click="removeFromCart(index)">
          Remove
        </button>
      </li>
    </ul>

    <p v-else>Varukorgen är tom.</p>

    <h3 v-if="cart.length > 0">
      Totalt: <strong>{{ totalPrice }} kr</strong>
    </h3>

    <button v-if="cart.length > 0" class="checkout-btn" @click="checkout">
      ✅ Slutför köp
    </button>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
  props: ["cart"],
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    addItemToCard(product) {
      this.cart.push(product);
    },
    updateQuantity(index, change) {
      if (this.cart[index].quantity + change > 0) {
        this.cart[index].quantity += change;
      } else {
        this.removeFromCart(index);
      }
      this.$emit("update-cart", this.cart);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.$emit("update-cart", this.cart);
    },
    checkout() {
      alert("Tack för ditt köp! 🎉");
      this.$emit("clear-cart");
    },
  },
};
</script>

<style scoped>
.cart {
  max-width: 400px;
  margin: auto;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.quantity {
  display: flex;
  align-items: center;
  gap: 5px;
}
button {
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  background: green;
  color: white;
  border-radius: 4px;
}
.remove-btn {
  background: red;
}
.checkout-btn {
  margin-top: 15px;
  background: blue;
  padding: 10px 15px;
}
</style>
