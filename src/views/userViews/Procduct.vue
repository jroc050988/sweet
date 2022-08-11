<template>
  <div class="pageInner">
    <div class="container">
      <div class="productInner">
        <div class="imgBox">
          <swiper
            :thumbs="{ swiper: thumbsSwiper }"
            :navigation="true"
            :loop="true"
            class="pdtImg"
          >
            <swiper-slide>
              <img src="@/assets/img/demo01.jpg" class="img-fluid" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/img/demo02.jpg" class="img-fluid" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/img/demo03.jpg" class="img-fluid" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/img/demo04.jpg" class="img-fluid" />
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            watch-slides-visibility
            watch-slides-progress
            :slides-per-view="4"
            :space-between="10"
            :navigation="true"
            class="pdtImgList"
          >
            <swiper-slide>
              <img src="@/assets/img/demo01.jpg" class="img-fluid" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/img/demo02.jpg" class="img-fluid" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/img/demo03.jpg" class="img-fluid" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/img/demo04.jpg" class="img-fluid" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="infoBox">
          <h2 class="title">南瓜粥</h2>
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
          <small class="note">
            <font-awesome-icon icon="fa-solid fa-exclamation" />
            本產品含有蛋、奶製品、麩質
          </small>
          <a
            class="toggleTitle"
            data-bs-toggle="collapse"
            href="#toggleBox1"
            role="button"
            ref="collapseBtn"
          >
            甜品資訊 <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </a>
          <div class="collapse toggleText" id="toggleBox1">
            商品名稱: 南瓜粥
            <br />
            規格: 1個/盒
            <br />
            商品重量: 750克 +-10%
            <br />
            商品尺寸: 6吋
            <br />
            過敏原資訊: 本產品含蛋、奶製品、麩質
            <br />
            內容物:
            紅葉獨家鮮奶油/低筋麵粉/紅櫻桃/進口草莓餡/草莓果泥/草莓濃縮果醬/塔塔粉/小蘇打/沙拉油/新鮮雞蛋/糖
            <br />
            保存方式:
            請冷藏保存，離開冰箱請勿超過1個小時，實際保存期限請詳見包裝標示
            <br />
            葷素: 蛋奶素
          </div>
          <a
            class="toggleTitle"
            data-bs-toggle="collapse"
            href="#toggleBox2"
            role="button"
            ref="collapseBtn"
          >
            配送方式 <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </a>
          <div class="collapse toggleText" id="toggleBox2">
            1.採用黑貓低溫冷凍/冷藏宅配到府
            <br />
            2.蛋糕含有大量鮮奶油裝飾，我們對於宅配蛋糕皆有進行過多次配送實驗，而且給予完善且完整的包裝。但配送過程仍有一定風險會造成蛋糕位移，感謝您的理解。
            <br />
            3.如收到產品後發現嚴重損毀，請麻煩聯絡線上客服人員。
          </div>
          <div class="btnGroup">
            <div class="btnBox">
              <button
                type="button"
                class="btn btn-outline-primary mr-2 border-end-0"
              >
                <font-awesome-icon icon="fa-solid fa-plus" />
              </button>
              <input type="number" class="numInput" min="1" value="1" />
              <button
                type="button"
                class="btn btn-outline-primary mr-2 border-start-0"
              >
                <font-awesome-icon icon="fa-solid fa-minus" />
              </button>
            </div>
            <div class="btnBox">
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
          <div class="btnBox">
            <button
              type="button"
              title="立即購買"
              class="btn btn-primary buyBtn"
            >
              立即購買
            </button>
          </div>
        </div>
      </div>
      <div class="susume">
        <div class="titleBox">
          <span class="titleEn">Recommend</span>
          <h3 class="title wow fadeInUp" data-wow-delay="250ms">
            <span>更</span>多甜品
          </h3>
        </div>
        <swiper
          :grabCursor="true"
          :navigation="true"
          :slidesPerView="4"
          :spaceBetween="15"
          :modules="modules"
          class="susumeList"
        >
          <swiper-slide class="productItem" v-for="item in 1" :key="item">
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
          </swiper-slide>
          <swiper-slide class="productItem" v-for="item in 1" :key="item">
            <figure class="imgBox">
              <router-link to="product">
                <img src="@/assets/img/demo02.jpg" alt="" class="img-fluid" />
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
          </swiper-slide>
          <swiper-slide class="productItem" v-for="item in 1" :key="item">
            <figure class="imgBox">
              <router-link to="product">
                <img src="@/assets/img/demo03.jpg" alt="" class="img-fluid" />
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
          </swiper-slide>
          <swiper-slide class="productItem" v-for="item in 1" :key="item">
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
          </swiper-slide>
          <swiper-slide class="productItem" v-for="item in 1" :key="item">
            <figure class="imgBox">
              <router-link to="product">
                <img src="@/assets/img/demo02.jpg" alt="" class="img-fluid" />
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
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import SwiperCore, {
  Navigation, Pagination, Autoplay, Thumbs,
} from 'swiper';

import Collapse from 'bootstrap/js/dist/collapse';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

export default {
  data() {
    return {
      collapse: {},
      thumbsSwiper: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  mounted() {
    const collapseElementList = [].slice.call(this.$refs.collapseBtn);
    this.collapse = collapseElementList.map(
      (collapseEl) => new Collapse(collapseEl),
    );
  },
};
</script>
