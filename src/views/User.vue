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
          @click="openNav"
        >
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <div
          class="navbar-collapse ml-auto"
          id="navbarNav"
          :class="{ show: isOpen }"
        >
          <button
            class="closeBtn btn btn-primary"
            type="button"
            @click="openNav"
          >
            <font-awesome-icon icon="fa-solid fa-x" />
          </button>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link user"
                to="/"
                :class="{ active: CurrentUnit === 'home' }"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-house-chimney" />
                </span>
                <span class="nav-text">
                  回到首頁
                </span>
                <span class="nav-textEn">Home</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link user"
                to="/menu/all"
                :class="{ active: CurrentUnit === 'menu' }"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-clipboard-list" />
                </span>
                <span class="nav-text">
                  甜品目錄
                </span>
                <span class="nav-textEn">Menu</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/favorite" class="nav-link user">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </span>
                <span class="nav-text">
                  我的最愛
                </span>
                <span class="nav-textEn">Favorite</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/cart"
                class="nav-link user"
                :class="{ active: CurrentUnit === 'cart' }"
              >
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </span>
                <span class="nav-text">
                  購物清單
                </span>
                <span class="nav-textEn">Cart</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/order" class="nav-link user">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </span>
                <span class="nav-text">
                  訂單搜尋
                </span>
                <span class="nav-textEn">Order</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link user">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-comment-dots" />
                </span>
                <span class="nav-text">
                  聯絡我們
                </span>
                <span class="nav-textEn">Contact</span>
              </router-link>
            </li>
            <div class="circle" :class="CurrentUnit"></div>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <ToastsList></ToastsList>
  <router-view @unit="changeUnit" />
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ToastsList from '@/components/ToastsList.vue';

export default {
  data() {
    return {
      isOpen: false,
      CurrentUnit: '',
    };
  },
  components: {
    Footer,
    ToastsList,
  },
  methods: {
    openNav() {
      this.isOpen = !this.isOpen;
    },
    changeUnit(data) {
      this.CurrentUnit = data;
    },
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
};
</script>
