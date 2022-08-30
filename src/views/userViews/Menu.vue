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
          <a
            class="nav-link"
            :class="{ active: category === 'all' }"
            href="#"
            @click.prevent="$router.push('/menu/all')"
          >
            ALL
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category === '派對蛋糕' }"
            @click.prevent="$router.push('/menu/派對蛋糕')"
            href="#"
          >
            派對蛋糕
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category === '小蛋糕' }"
            href="#"
            @click.prevent="$router.push('/menu/小蛋糕')"
          >
            小蛋糕
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category === '鬆餅' }"
            @click.prevent="$router.push('/menu/鬆餅')"
            href="#"
          >
            鬆餅
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category === '麵包' }"
            @click.prevent="$router.push('/menu/麵包')"
            href="#"
          >
            麵包
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category === '其他甜品' }"
            @click.prevent="$router.push('/menu/其他甜品')"
            href="#"
          >
            其他甜品
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: category === '各式飲品' }"
            @click.prevent="$router.push('/menu/各式飲品')"
            href="#"
          >
            各式飲品
          </a>
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
              <div
                class="priceBox discount"
                v-if="item.origin_price !== item.price"
              >
                <div class="discountBox">
                  <p class="origin_price">
                    $ {{ $filter.currency(item.origin_price) }}
                  </p>
                  <p class="price red">
                    $ {{ $filter.currency(item.price) }}
                  </p>
                </div>
                <p class="unit">/ {{ item.unit }}</p>
              </div>
              <div class="priceBox mr-auto" v-else>
                <p class="price">$ {{ $filter.currency(item.price) }}</p>
                <p class="unit">/ {{ item.unit }}</p>
              </div>
              <div class="btnBox mt-auto">
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
      category: '',
    };
  },
  components: {
    Pagination,
    Loading,
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${this.page.current_page}`;
      if (this.category !== 'all') {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      }
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            if (this.category !== 'all') {
              const categoryAll = [];
              this.productList = [];
              Object.values(res.data.products).forEach((item) => {
                if (item.category === this.category) {
                  categoryAll.push(item);
                  this.page = {
                    ...this.page,
                    total_pages: Math.ceil(categoryAll.length / 10),
                  };
                  this.page.has_pre = this.page.current_page !== 1;
                  this.page.has_next = this.page.current_page !== this.page.total_pages;
                }
              });
              categoryAll.forEach((i, index) => {
                if (
                  index >= (this.page.current_page - 1) * 10
                  && index < this.page.current_page * 10
                ) {
                  this.productList.push(i);
                }
              });
            } else {
              this.page = res.data.pagination;
              this.productList = res.data.products;
            }
          } else {
            console.error('列表取得失敗');
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
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
    this.category = this.$route.params.category;
    this.page = {
      current_page: 1,
    };
    this.getProducts();
    this.$emit('unit', 'menu');
  },
  watch: {
    $route() {
      this.productList = [];
      this.category = this.$route.params.category;
      this.page = {
        current_page: 1,
      };
      this.getProducts();
    },
  },
};
</script>
