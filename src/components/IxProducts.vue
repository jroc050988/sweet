<template>
  <section class="ix-area ix-products">
    <div class="container-fluid">
      <div class="titleBox">
        <span class="titleEn">Selected Products</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms"><span>精</span>選商品</h2>
      </div>
      <div class="container">
        <ul class="topSale">
          <li class="productItem wow fadeIn" data-wow-delay="500ms">
            <figure class="imgBox">
              <a href="#" title="南瓜粥">
                <img src="@/assets/img/demo02.jpg" alt="" class="img-fluid" />
              </a>
            </figure>
            <div class="textBox">
              <h3 class="title"><a href="#" title="南瓜粥">南瓜粥</a></h3>
              <p class="price">¥ 2,148</p>
              <p>
                自然な甘さがうれしい、韓国伝統のお粥。
                <br />
                ごろっと入ったカボチャと、味にアクセントを加える胡麻塩。
                <br />
                鮮やかなクコの実と松の実もうれしい、
                <br />
                見た目にもおいしい一杯です。
              </p>
              <div class="btnBox mt-auto mr-2">
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
          </li>
          <li class="productItem wow fadeIn" data-wow-delay="250ms">
            <figure class="imgBox">
              <a href="#" title="南瓜粥">
                <img src="@/assets/img/demo03.jpg" alt="" class="img-fluid" />
              </a>
            </figure>
            <div class="textBox">
              <h3 class="title"><a href="#" title="南瓜粥">南瓜粥</a></h3>
              <p class="price">¥ 2,148</p>
              <p>
                自然な甘さがうれしい、韓国伝統のお粥。
                <br />
                ごろっと入ったカボチャと、味にアクセントを加える胡麻塩。
                <br />
                鮮やかなクコの実と松の実もうれしい、
                <br />
                見た目にもおいしい一杯です。
              </p>
              <div class="btnBox mt-auto">
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
          </li>
        </ul>
        <ProductsList></ProductsList>
      </div>
    </div>
  </section>
</template>

<script>
import wowMixin from '@/mixins/wowMixin';
import ProductsList from '@/components/ProductsList.vue';

export default {
  components: {
    ProductsList,
  },
  mixins: [wowMixin],
};
</script>
