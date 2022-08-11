<template>
  <header class="admin">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <h1>
          <a class="navbar-brand" href="#">
            <img
              src="@/assets/logo.png"
              alt="有點甜LOGO"
              class="d-inline-block align-text-top img-fluid"
            />
            後臺管理
          </a>
        </h1>
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/image">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-image" />
                </span>
                <span class="nav-text">
                  形象圖上傳
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-clipboard-list" />
                </span>
                <span class="nav-text">
                  甜品列表
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/order">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </span>
                <span class="nav-text">
                  訂單列表
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/cupons">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-ticket" />
                </span>
                <span class="nav-text">
                  優惠劵
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/login">
                <span class="nav-icon">
                  <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                </span>
                <span class="nav-text">
                  登出
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
  <footer class="admin">
    <small class="copyright">
      Copyright © 2022 有點甜 All Rights Reserved. ※僅供學習使用 無任何商業用途
    </small>
  </footer>
</template>

<script>
export default {
  components: {},
};
</script>
