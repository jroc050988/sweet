<template>
  <ul class="productsList">
    <li v-for="(item, index) in 12" :key="index">
      <div class="productItem">
        <figure class="imgBox">
          <router-link to="product">
            <img src="@/assets/img/demo01.jpg" alt="" class="img-fluid" />
          </router-link>
        </figure>
        <div class="textBox">
          <h3 class="title"><a href="#" title="南瓜粥">南瓜粥</a></h3>
          <div class="btnBox mt-auto">
            <p class="price">¥ 2,148</p>
            <button
              type="button"
              class="btn btn-outline-primary mr-2 border-end-0"
            >
              <font-awesome-icon icon="fa-regular fa-heart" />
              <!-- <font-awesome-icon icon="fa-solid fa-heart" /> -->
            </button>
            <button
              type="button"
              title="查看更多"
              class="btn btn-outline-primary"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {

    };
  },
};
</script>
