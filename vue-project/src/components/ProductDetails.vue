<template>
  <div class="product-details">
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
      <p class="stock"></p>
      <button class="add-to-cart" @click="addToCart">
        <!--- För Maowlidans cart funktion-->
        Lägg till i varukorg
      </button>
    </div>
    <router-link to="/" class="back-link">Tillbaka till startsidan</router-link>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      //Place holder data om inget ID kan matchas
      product: {
        id: null,
        name: "placeHolder Produkt",
        price: "0:-",
        size: "M",
        description: "Detta är en beskrivning",
        imageUrl: "https://placehold.co/600x800/png?text=Placeholder+Produkt",
      },
    };
  },
  created() {
    const productId = this.$route.params.id;

    // Här gör jag IF satser baserat på produkt id
    if (productId === "1") {
      this.product = {
        id: 1,
        name: "Produkt 1",
        price: "123:-",
        size: "M",
        description: "beskrivning av produkt 1",
        imageUrl: "https://placehold.co/600x800/png?text=Produkt+1",
      };
    } else if (productId === "2") {
      this.product = {
        id: 2,
        name: "Produkt 2",
        price: "234:-",
        size: "L",
        description: "Beskrivning av produkt 2",
        imageUrl: "https://placehold.co/600x800/png?text=Produkt+2",
      };
    } else if (productId === "3") {
      this.product = {
        id: 3,
        name: "Produkt 3",
        price: "360:-",
        size: "S",
        description: "Beskrivning av produkt 3.",
        imageUrl: "https://placehold.co/600x800/png?text=Produkt+3",
      };
    } else if (productId === "4") {
      this.product = {
        id: 4,
        name: "Produkt 4",
        price: "420:-",
        size: "M",
        description: "beskrivning av produkt 4",
        imageUrl: "https://placehold.co/600x800/png?text=Produkt+4",
      };
    }
  },
};
</script>
