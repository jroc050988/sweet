<template>
<Header></Header>
  <router-view/>
<Footer></Footer>
</template>

<style lang="scss">
@import "./assets/scss/all";
</style>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
