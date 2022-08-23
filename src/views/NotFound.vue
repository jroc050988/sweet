<template>
<Header></Header>
<div class="notFoundPage">
  <div class="notFoundBox">
    <p class="title">OH! 404</p>
  <p class="text">找不到此網頁，您可以<router-link to="/">回到首頁</router-link></p>
  <!-- <img src="@/assets/img/404page.jpg" alt="404" class="img-fluid"> -->
</div>
</div>

<Footer></Footer>
</template>

<style lang="scss">
.notFoundPage{
  margin-top: 140px;
  position: relative;
  min-height: calc(100vh - 618px);
}
.notFoundBox{
  position:absolute;
  max-width: 1200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .title{
    font-size: 5rem;
    color:#d0104c ;
    font-family: Varela Round,Arial,sans-serif;
  }
}
</style>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
};
</script>
