<template>
  <component :is="'style'">
    .ix-banner{ background:url({{ bannerImg }}) bottom; background-attachment:
    fixed; }
  </component>
  <div class="ix-banner">
    <div class="ix-bannerTitleBox">
      <strong class="ix-bannerTitle">享受悠閒片刻的小確幸</strong>
      <span class="ix-bannerTitleEn">Enjoy Your Lift</span>
    </div>
    <div class="srcollDown">
      <font-awesome-icon icon="fa-solid fa-angle-down" class="icon icon01"/>
      <font-awesome-icon icon="fa-solid fa-angle-down" class="icon icon02"/>
      <font-awesome-icon icon="fa-solid fa-angle-down" class="icon icon03"/>
      <span class="text">Scroll Down</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImg: '/img/banner05.6586f0d8.jpg',
    };
  },
};
</script>
