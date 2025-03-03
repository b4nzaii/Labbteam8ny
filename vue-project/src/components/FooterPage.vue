<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-section">
        <h3>Zolondo</h3>
        <p>T-shirt</p>
        <p>ForHer</p>
        <p>ForHim</p>
      </div>

      <div class="footer-section">
        <h3>📞 Kontakt</h3>
        <p>Email: support@foretag.se</p>
        <p>Telefon: +46 123 456 789</p>
      </div>

      <div class="footer-section">
        <h3>🔗 Följ oss</h3>
        <div class="social-icons">
          <a href="#" target="_blank">🌐 Facebook</a>
          <a href="#" target="_blank">📸 Instagram</a>
          <a href="#" target="_blank">🐦 Twitter</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>
        &copy; {{ new Date().getFullYear() }} Zolondo. Alla rättigheter
        reserverade.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 20px 0;
  text-align: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
}
.footer-section {
  margin: 10px;
}
.footer-section h3 {
  margin-bottom: 10px;
}
.social-icons a {
  display: block;
  color: white;
  text-decoration: none;
  margin: 5px 0;
}
.footer-bottom {
  margin-top: 15px;
  border-top: 1px solid white;
  padding-top: 10px;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
