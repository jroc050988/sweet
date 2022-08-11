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
      bannerImg: 'https://storage.googleapis.com/vue-course-api.appspot.com/lili-api/1660198015057.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Bw7Mzu8Qdpq9AERV6J0PwRq90gFQbtXo8rvAbcUBhtzbX50qEz%2B179XW9C1CbrPa%2FnyRxaq5EkFxIfE3CVvI1BQuisJgNGRugrjT2ynIWtUh3tHMMSRFgwMs85h0NPCU%2BdEoyRmE3GcV14zrCdJwrvWb059civuD3dXkBM43se06BIctLqOo5v1Ux9I40CedE1PCPHRii0a9BjCBR8zjDpIcVOh%2BKm%2FYQcosImH3lQ8R0C9QdGnPnukeIonERCclgDBAmhEzBZEg%2FMD%2Brl26PVKpbXYlszRrEjDTuLUd%2B%2FQko3wnnJj6e4xkoKroG3T%2F51FtLR%2FwPYVEiDkX4gDfTQ%3D%3D',
    };
  },
};
</script>
