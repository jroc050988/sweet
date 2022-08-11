<template>
  <header class="user">
    <nav class="navbar user navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1>
            <img
              alt="有點甜"
              src="@/assets/logo.png"
              class="img-fluid d-inline-block align-text-top"
            />
            有點甜
          </h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-auto" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link user"
                :class="{ active: CurrentPage == 'home' }"
                to="/"
                @click="CurrentPage = 'home'"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-house-chimney" />
                </span>
                <span class="nav-text" v-show="CurrentPage !== 'home'">
                  回到首頁
                </span>
                <span class="nav-text nav-textEn">Home</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link user"
                href="#"
                :class="{ active: CurrentPage == 'menu' }"
                to="/menu"
                @click="CurrentPage = 'menu'"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-clipboard-list" />
                </span>
                <span class="nav-text" v-show="CurrentPage !== 'menu'">
                  甜品目錄
                </span>
                <span class="nav-text nav-textEn">Menu</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/favorite"
                class="nav-link user"
                href="#"
                :class="{ active: CurrentPage == 'favorite' }"
                @click="CurrentPage = 'favorite'"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </span>
                <span class="nav-text" v-show="CurrentPage !== 'favorite'">
                  我的最愛
                </span>
                <span class="nav-text nav-textEn">Favorite</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/cart"
                class="nav-link user"
                href="#"
                :class="{ active: CurrentPage == 'cart' }"
                @click="CurrentPage = 'cart'"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </span>
                <span class="nav-text" v-show="CurrentPage !== 'cart'">
                  購物清單
                </span>
                <span class="nav-text nav-textEn">Cart</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/order"
                class="nav-link user"
                href="#"
                :class="{ active: CurrentPage == 'order' }"
                @click="CurrentPage = 'order'"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </span>
                <span class="nav-text" v-show="CurrentPage !== 'order'">
                  訂單搜尋
                </span>
                <span class="nav-text nav-textEn">Order</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link user"
                href="#"
                :class="{ active: CurrentPage == 'contact' }"
                @click="CurrentPage = 'contact'"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-comment-dots" />
                </span>
                <span class="nav-text" v-show="CurrentPage !== 'contact'">
                  聯絡我們
                </span>
                <span class="nav-text nav-textEn">Contact</span>
              </router-link>
            </li>
            <div class="circle" :class="CurrentPage"></div>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      CurrentPage: 'home',
    };
  },
};
</script>
