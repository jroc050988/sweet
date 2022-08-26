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
              <img :src="product.imageUrl" class="img-fluid" />
            </swiper-slide>
            <swiper-slide
              v-for="(item, index) in product.imagesUrl"
              :key="index"
            >
              <img :src="item" class="img-fluid" />
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
              <img :src="product.imageUrl" class="img-fluid" />
            </swiper-slide>
            <swiper-slide
              v-for="(item, index) in product.imagesUrl"
              :key="index"
            >
              <img :src="item" class="img-fluid" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="infoBox">
          <h2 class="title">{{ product.title }}</h2>
          <div class="priceBox discount" v-if="product.origin_price !== product.price">
            <div class="d-flex flex-column flex-start align-items-start">
              <p class="origin_price">$ {{ product.origin_price }}</p>
              <p class="price red">$ {{ product.price }}</p>
            </div>
            <p class="unit">/ {{ product.unit }}</p>
          </div>
          <div class="priceBox" v-else>
            <p class="price">$ {{ product.price }}</p>
            <p class="unit">/ {{ product.unit }}</p>
          </div>
          <p>
            {{ product.description }}
          </p>
          <small class="note">
            <font-awesome-icon icon="fa-solid fa-exclamation" />
            本產品含有蛋、奶製品、麩質
          </small>
          <div>
            <a
              class="toggleTitle"
              data-bs-toggle="collapse"
              href="#toggleBox1"
              role="button"
              ref="collapseBtn"
            >
              甜品資訊
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </a>
            <div class="collapse toggleText" id="toggleBox1">
              {{ product.content }}
            </div>
            <a
              class="toggleTitle"
              data-bs-toggle="collapse"
              href="#toggleBox2"
              role="button"
              ref="collapseBtn"
            >
              配送方式
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </a>
            <div class="collapse toggleText" id="toggleBox2">
              1.採用黑貓低溫冷凍/冷藏宅配到府
              <br />
              2.蛋糕含有大量鮮奶油裝飾，我們對於宅配蛋糕皆有進行過多次配送實驗，而且給予完善且完整的包裝。但配送過程仍有一定風險會造成蛋糕位移，感謝您的理解。
              <br />
              3.如收到產品後發現嚴重損毀，請麻煩聯絡線上客服人員。
            </div>
          </div>
          <Form>
            <div class="btnGroup">
              <div class="btnBox">
                <button
                  type="button"
                  class="btn btn-outline-primary mr-2 border-end-0"
                  @click.prevent="numPlus(product.num - 1)"
                  :disabled="product.num < 2"
                >
                  <font-awesome-icon icon="fa-solid fa-minus" />
                </button>
                <Field
                  name="數量"
                  rules="min_value:1"
                  type="number"
                  class="numInput"
                  min="1"
                  value="1"
                  v-model="product.num"
                ></Field>
                <button
                  type="button"
                  class="btn btn-outline-primary mr-2 border-start-0"
                  @click.prevent="numPlus(product.num + 1)"
                >
                  <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
              </div>
              <div class="btnBox">
                <button
                  v-if="(favoriteArry.filter(i => i.id === product.id).length)"
                  type="button"
                  class="btn btn-outline-primary mr-2 border-end-0"
                  @click="addFavorite('remove', product)"
                >
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-outline-primary mr-2 border-end-0"
                  @click="addFavorite('add', product)"
                >
                  <font-awesome-icon icon="fa-regular fa-heart" />
                </button>
                <button
                  type="button"
                  title="查看更多"
                  class="btn btn-outline-primary"
                  @click="addCart(product, true)"
                >
                  加入購物車
                </button>
              </div>
            </div>
            <ErrorMessage name="數量" class="inputNote"></ErrorMessage>
            <div class="btnBox">
              <button
                type="button"
                title="立即購買"
                class="btn btn-primary buyBtn"
                @click="
                  addCart(product, true);
                  $router.push('/cart')
                "
              >
                立即購買
              </button>
            </div>
          </Form>
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
          <swiper-slide
            class="productItem"
            v-for="item in susumeArry"
            :key="item"
          >
            <figure class="imgBox">
              <router-link :to="`${item.id}`">
                <img :src="item.imageUrl" :alt="item.title" class="img-fluid" />
              </router-link>
            </figure>
            <div class="textBox">
              <h3 class="title">
                <a
                  href="#"
                  title="item.title"
                  @click.prevent="$router.push(item.id)"
                >
                  {{ item.title }}
                </a>
              </h3>
              <div class="btnBox mt-auto">
                <p class="price">$ {{ item.price }}</p>
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

import addFavorite from '@/mixins/addFavorite';
import addCart from '@/mixins/addCart';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

export default {
  data() {
    return {
      collapse: {},
      thumbsSwiper: null,
      product: {},
      favoriteArry: [],
      susumeArry: [],
    };
  },
  mixins: [addFavorite, addCart],
  inject: ['emitter'],
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    getProduct() {
      this.isLoading = true;
      const id = `${this.$route.params.id}`;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = {
              ...res.data.product,
              num: 1,
            };
          } else {
            console.error('列表取得失敗');
          }
          this.getRecommend();
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
      if (localStorage.getItem('favorite')) {
        this.favoriteArry = JSON.parse(localStorage.getItem('favorite'));
      }
    },
    numPlus(num) {
      this.product.num = num;
    },
    getRecommend() {
      this.susumeArry = [];
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.products);
            const arry = Object.values(res.data.products);
            console.log(this.product);
            arry.forEach((i) => {
              if (i.category === this.product.category && i.id !== this.product.id) {
                this.susumeArry.push(i);
              }
            });
            console.log(this.susumeArry);
          } else {
            console.error('產品列表取得失敗');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.$emit('unit', 'menu');
    this.getProduct();
    const collapseElementList = [].slice.call(this.$refs.collapseBtn);
    this.collapse = collapseElementList.map(
      (collapseEl) => new Collapse(collapseEl),
    );
  },
  watch: {
    $route() {
      this.getProduct();
    },
  },
};
</script>
