<template>
  <swiper
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :grabCursor="true"
    :slidesPerView="5"
    :spaceBetween="15"
    :breakpoints="breakpoints"
    :modules="modules"
    class="ixAbout-slider"
  >
    <swiper-slide v-for="(i, index) in productList" :key="index">
      <router-link :to="`/product/${i.id}`">
        <img class="bannerImg img-fluid" :src="i.imageUrl" :alt="i.title" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default {
  data() {
    return {
      productList: [],
      breakpoints: {
        1: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
          centeredSlides: false,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  mounted() {
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
    this.$http
      .get(api)
      .then((res) => {
        if (res.data.success) {
          const arry = Object.values(res.data.products);
          // 隨機10筆進行輪播;總數未滿10筆全部輪播
          if (arry.length > 10) {
            const max = arry.length - 1;
            const min = 0;
            const randomArry = [];
            while (randomArry.length < 10) {
              const random = Math.floor(Math.random() * (max - min + 1)) + min;
              if (randomArry.every((i) => i !== random)) {
                randomArry.push(random);
              }
            }
            randomArry.forEach((i) => {
              this.productList.push(arry[i]);
            });
          } else {
            this.productList = res.data.products;
          }
        } else {
          console.error('產品列表取得失敗');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
