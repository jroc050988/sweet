<template>
    <swiper
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :grabCursor="true"
    :slidesPerView="6"
    :spaceBetween="15"
    :modules="modules"
    class="ixAbout-slider"
  >
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner01.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner02.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner03.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner01.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner02.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner03.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner02.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner03.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner02.jpg"></swiper-slide>
    <swiper-slide><img class="bannerImg img-fluid" src="@/assets/img/banner03.jpg"></swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import {
  Autoplay, Pagination, Navigation,
} from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};

</script>
