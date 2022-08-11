<template>
  <div class="pageInner">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Favorite</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>我</span>的最愛
        </h2>
      </div>
      <div class="cartListTitle">
        <p style="width: 20%;">圖片</p>
        <p style="width: 40%;">品名</p>
        <p style="width: 20%;">單價</p>
        <p style="width: 10%;">加入購物車</p>
        <p style="width: 10%;">刪除</p>
      </div>
      <div class="favoriteList">
        <div class="cartItem" v-for="item in 6" :key="item">
          <figure class="imgBox">
            <router-link to="product">
              <img src="@/assets/img/demo01.jpg" alt="" class="img-fluid" />
            </router-link>
          </figure>
          <p class="pdtName">南瓜粥</p>
          <p class="pdtPrice">¥ 2,148</p>
          <a href="#" title="加入購物車" class="pdtCart">
            <font-awesome-icon icon="fa-solid fa-cart-plus" />
          </a>
          <a href="#" title="刪除" class="pdtDelete">
            <font-awesome-icon icon="fa-solid fa-trash-can" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
