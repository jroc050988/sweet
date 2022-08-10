<template>
  <div class="pageInner">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">About Us</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>甜</span>品目錄
        </h2>
      </div>
      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">慶生蛋糕</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">小蛋糕</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">甜甜圈</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">和菓子</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">其他甜品</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">各式飲品</a>
        </li>
      </ul>
      <ProductsList></ProductsList>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    ProductsList,
    Pagination,
  },
};
</script>
