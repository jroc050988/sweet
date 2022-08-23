<template>
  <div class="pageInner">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">About Us</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>甜</span>
          品目錄
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
      <ul class="productsList">
        <li v-for="(item, index) in productList" :key="index">
          <div class="productItem">
            <figure class="imgBox">
              <a
                href="#"
                @click.prevent="productDatil(item.id)"
                :title="item.title"
              >
                <img :src="item.imageUrl" :alt="item.title" class="img-fluid" />
              </a>
            </figure>
            <div class="textBox">
              <h3 class="title">
                <a
                  href="#"
                  @click.prevent="productDatil(item.id)"
                  :title="item.title"
                >
                  {{ item.title }}
                </a>
              </h3>
              <div class="btnBox mt-auto">
                <p class="price">¥ {{ item.price }}</p>
                <button
                  v-if="(favoriteArry.filter(i => i.id === item.id).length)"
                  type="button"
                  class="btn btn-outline-primary mr-2 border-end-0"
                  @click="addFavorite('remove', item)"
                >
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-outline-primary mr-2 border-end-0"
                  @click="addFavorite('add', item)"
                >
                  <font-awesome-icon icon="fa-regular fa-heart" />
                </button>
                <button
                  type="button"
                  title="查看更多"
                  class="btn btn-outline-primary"
                  @click="addCart(item)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Pagination :page="page" @changePage="changePage"></Pagination>
      <Loading :isShow="isLoading"></Loading>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Loading from '@/components/Loading.vue';
import addFavorite from '@/mixins/addFavorite';
import addCart from '@/mixins/addCart';

export default {
  mixins: [addFavorite, addCart],
  inject: ['emitter'],
  data() {
    return {
      isLoading: false,
      productList: [],
      page: {},
      favoriteArry: [],
    };
  },
  components: {
    Pagination,
    Loading,
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${this.page.current_page}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.productList = res.data.products;
            this.page = res.data.pagination;
          } else {
            console.error('列表取得失敗');
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
      if (localStorage.getItem('favorite')) {
        this.favoriteArry = JSON.parse(localStorage.getItem('favorite'));
      }
    },
    productDatil(id) {
      this.$router.push(`/product/${id}`);
    },
    changePage(page) {
      this.page.current_page = page;
      this.getProducts();
    },
  },
  mounted() {
    this.getProducts();
    this.$emit('unit', 'menu');
  },
};
</script>
