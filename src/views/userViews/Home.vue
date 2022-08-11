<template>
  <Banner></Banner>
  <About></About>
  <IxProducts></IxProducts>
</template>

<script>
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import IxProducts from '@/components/IxProducts.vue';

export default {
  components: {
    About,
    Banner,
    IxProducts,
  },
};
</script>
