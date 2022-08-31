<template>
  <div class="pageInner">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Favorite</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>我</span>的最愛
        </h2>
      </div>
      <div
        class="notFoundBox text-center mt-5 fs-3"
        v-if="favoriteList && dwfavoriteList.length === 0"
      >
        <p class="title">目前還沒有將任何甜品添加至我的最愛</p>
        <button
          class="btn btn-primary mr-2"
          type="button"
          @click="$router.push('/menu/all')"
        >
          瀏覽商品
        </button>
      </div>
      <template v-else>
        <table class="w-100 mt-2">
          <thead class="cartListTitle">
            <tr>
              <td width="240">圖片</td>
              <td>品名</td>
              <td width="120">售價</td>
              <td width="120">購買</td>
              <td width="120">刪除</td>
            </tr>
          </thead>
          <tbody class="favoriteList">
            <tr
              class="favoriteItem"
              v-for="(item, index) in favoriteList"
              :key="index"
            >
              <td class="imgBox">
                <a
                  href="#"
                  :title="item.title"
                  @click.prevent="productDatil(item.id)"
                >
                  <img
                    :src="item.imageUrl"
                    :alt="item.title"
                    class="img-fluid"
                  />
                </a>
              </td>
              <td class="pdtName">
                <a
                  href="#"
                  :title="item.title"
                  @click.prevent="productDatil(item.id)"
                  class="pdtName"
                >
                  {{ item.title }}
                </a>
              </td>
              <td class="pdtPrice">$ {{ $filter.currency(item.price) }}</td>
              <td class="pdtAddCart">
                <a
                  href="#"
                  title="加入購物車"
                  class="pdtCart"
                  @click.prevent="toCart(item)"
                >
                  <font-awesome-icon icon="fa-solid fa-cart-plus" />
                </a>
              </td>
              <td class="pdtDelete">
                <a
                  href="#"
                  title="刪除"
                  class="pdtDelete"
                  @click.prevent="addFavorite('remove', item)"
                >
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>
  </div>
  <Loading :isShow="isLoading"></Loading>
</template>

<script>
import addFavorite from '@/mixins/addFavorite';
import Loading from '@/components/Loading.vue';
import addCart from '@/mixins/addCart';

export default {
  data() {
    return {
      favoriteList: [],
      isLoading: false,
    };
  },
  inject: ['emitter'],
  components: {
    Loading,
  },
  mixins: [addFavorite, addCart],
  methods: {
    getProducts() {
      this.isLoading = true;
      this.favoriteList = JSON.parse(localStorage.getItem('favorite'));
      this.isLoading = false;
    },
    toCart(item) {
      const dataArry = JSON.parse(localStorage.getItem('favorite'));
      const newArry = dataArry.map((i) => i.id);
      dataArry.splice(newArry.indexOf(item.id), 1);
      const data = JSON.stringify(dataArry);
      localStorage.setItem('favorite', data);
      this.getProducts();
      this.addCart(item);
    },
    productDatil(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  mounted() {
    this.getProducts();
    console.log(this.favoriteList);
    this.$emit('unit', 'favorite');
  },
};
</script>
