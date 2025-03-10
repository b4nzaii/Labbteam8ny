<template>
  <header class="site-header">
    <!--Övre rad alltså (For her, for him, logga samt iktoner)-->
    <div class="top-nav">
      <nav class="nav-links">
        <router-link to="/for-her">For her</router-link>
        <router-link to="/for-him">For him</router-link>
      </nav>
      <!--Loggan i mitten av navbaren likt Zalando-->
      <div class="header-center">
        <router-link to="/">
          <img src="@/assets/zolondo.jpg" class="logo" />
        </router-link>
      </div>
      <!--Och till höger så ska jag ha ikoner + text -->
      <div class="header-right">
        <div class="icon-text">
          <i class="fas fa-user"></i>
          <span> Logga in</span>
        </div>
        <div class="icon-text">
          <i class="fas fa-shopping-cart"></i>
          <div>
            {{ Cart.length }} in cart
            <button @click="navigateTo('products')">Varukorg</button>
          </div>
        </div>
      </div>
    </div>
    <!--Nedre raden(underkategorier)-->
    <div class="sub-nav">
      <ul>
        <li><a href="#">Nyheter</a></li>
        <li><a href="#">Skor</a></li>
        <li><a href="#">Accesoarer</a></li>
        <li><a href="#">Sport</a></li>
        <li><a href="#">T-shirts</a></li>
        <li><a href="#">Jeans</a></li>
      </ul>
    </div>
  </header>
</template>
<script></script>
<style scoped>
/**Grundstruktur för headern */
.site-header {
  display: flex;
  flex-direction: column; /** Ska vara två rader (top-nav) och (sub-nav) */
  background-color: rgb(250, 201, 110);
  border-bottom: 4px solid #2c3e50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
/** Övre raden */
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: color 0.3s;
}
.logo {
  max-height: 70px;
  cursor: pointer;
  border-radius: 10px;
}
.nav-links a:hover {
  color: #f57f1e;
}
.header-center {
  text-align: center;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
/**Nedre raden */
.sub-nav {
  border-top: 2px solid #2c3e50;
  border-bottom: 2px solid #2c3e50;
  padding: 0.5rem;
}
.sub-nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.sub-nav a {
  text-decoration: none;
  color: #0f0e0e;
}
.sub-nav a:hover {
  color: #f57f1e;
}
.icon-text {
  display: flex;
  flex-direction: column; /** column Så att ikonen är över texten*/
  align-items: center;
  color: #333;
  cursor: pointer;
  text-decoration: none;
}
.icon-text i {
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}
.icon-text span {
  font-size: 0.9rem; /** Kör snäppet mindre text här */
  font-weight: 500;
}
.icon-text:hover {
  color: #f57f1e;
}
/** Skapar en query för smalare skärmar med flex */
@media (max-width: 768px) {
  .top-nav {
    flex-direction: column;
    gap: 1rem;
  }
  .header-right {
    gap: 1rem;
  }
  .sub-nav ul {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
/** För mindre skärmar(iphone) */
@media (max-width: 430px) {
  .top-nav {
    gap: 0.75; /** Minskar gap ytterligare då det såg lite trångt ut */
  }
  .header-right {
    gap: 0.75rem;
    margin-right: 25px;
  }
  .sub-nav ul {
    gap: 0.75rem;
    margin-right: 20px;
  }
  .logo {
    height: 45px; /**minskar loggans storlek litegrann */
    margin-right: 40px;
  }
  .icon-text span {
    font-size: 0.85rem;
  }
  .nav-links {
    margin-right: 35px;
  }
}
</style>
