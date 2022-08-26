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
        <div class="cartItem" v-for="item in favoriteList" :key="item">
          <figure class="imgBox">
            <a
              href="#"
              :title="item.title"
              @click.prevent="productDatil(item.id)"
            >
              <img :src="item.imageUrl" :alt="item.title" class="img-fluid" />
            </a>
          </figure>
          <a
            href="#"
            :title="item.title"
            @click.prevent="productDatil(item.id)"
            class="pdtName"
          >
            <p>{{ item.title }}</p>
          </a>
          <p class="pdtPrice">$ {{ item.price }}</p>
          <a
            href="#"
            title="加入購物車"
            class="pdtCart"
            @click.prevent="toCart(item)"
          >
            <font-awesome-icon icon="fa-solid fa-cart-plus" />
          </a>
          <a
            href="#"
            title="刪除"
            class="pdtDelete"
            @click.prevent="addFavorite('remove', item)"
          >
            <font-awesome-icon icon="fa-solid fa-trash-can" />
          </a>
        </div>
      </div>
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
    this.$emit('unit', 'favorite');
  },
};
</script>
