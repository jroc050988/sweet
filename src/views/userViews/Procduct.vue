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
          <div
            class="priceBox discount"
            v-if="product.origin_price !== product.price"
          >
            <div class="d-flex flex-column flex-start align-items-start">
              <p class="origin_price">
                $ {{ $filter.currency(product.origin_price) }}
              </p>
              <p class="price red">$ {{ $filter.currency(product.price) }}</p>
            </div>
            <p class="unit">/ {{ product.unit }}</p>
          </div>
          <div class="priceBox" v-else>
            <p class="price">$ {{ $filter.currency(product.price) }}</p>
            <p class="unit">/ {{ product.unit }}</p>
          </div>
          <p>
            {{ product.description }}
          </p>
          <small class="note">
            <font-awesome-icon icon="fa-solid fa-exclamation" />
            ???????????????????????????????????????
          </small>
          <div>
            <a
              class="toggleTitle"
              data-bs-toggle="collapse"
              href="#toggleBox1"
              role="button"
              ref="collapseBtn"
            >
              ????????????
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
              ????????????
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </a>
            <div class="collapse toggleText" id="toggleBox2">
              1.????????????????????????/??????????????????
              <br />
              2.?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              <br />
              3.???????????????????????????????????????????????????????????????????????????
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
                  name="??????"
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
                  title="????????????"
                  class="btn btn-outline-primary"
                  @click="addCart(product, true)"
                >
                  ???????????????
                </button>
              </div>
            </div>
            <ErrorMessage name="??????" class="inputNote"></ErrorMessage>
            <div class="btnBox">
              <button
                type="button"
                title="????????????"
                class="btn btn-primary buyBtn"
                @click="addCart(product, true, true)"
              >
                ????????????
              </button>
            </div>
          </Form>
        </div>
      </div>
      <div class="susume">
        <div class="titleBox">
          <span class="titleEn">Recommend</span>
          <h3 class="title wow fadeInUp" data-wow-delay="250ms">
            <span>???</span>?????????
          </h3>
        </div>
        <swiper
          :grabCursor="true"
          :navigation="true"
          :slidesPerView="4"
          :spaceBetween="15"
          :modules="modules"
          class="susumeList"
          :breakpoints="breakpoints"
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
              <div class="title">
                <a
                  href="#"
                  title="item.title"
                  @click.prevent="$router.push(item.id)"
                >
                  {{ item.title }}
                </a>
              </div>

              <div
                class="priceBox discount"
                v-if="item.origin_price !== item.price"
              >
                <div class="discountBox">
                  <p class="origin_price">
                    $ {{ $filter.currency(item.origin_price) }}
                  </p>
                  <p class="price red">$ {{ $filter.currency(item.price) }}</p>
                </div>
                <p class="unit">/ {{ item.unit }}</p>
              </div>
              <div class="priceBox mr-auto" v-else>
                <p class="price">$ {{ $filter.currency(item.price) }}</p>
                <p class="unit">/ {{ item.unit }}</p>
              </div>
              <div class="btnBox mt-auto">
                <button
                  v-if="(favoriteArry.filter(i => i.id === item.id).length)"
                  type="button"
                  class="btn btn-outline-primary mr-2 border-end-0"
                  @click="addFavorite('remove', item)"
                >
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-outline-primary mr-2 border-end-0"
                  @click="addFavorite('add', item)"
                >
                  <font-awesome-icon icon="fa-regular fa-heart" />
                </button>
                <button
                  type="button"
                  title="????????????"
                  class="btn btn-outline-primary"
                  @click="addCart(item)"
                >
                  ???????????????
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <Loading :isShow="isLoading"></Loading>
</template>

<script>
import Loading from '@/components/Loading.vue';

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
      breakpoints: {
        1: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
          centeredSlides: false,
        },
      },
    };
  },
  mixins: [addFavorite, addCart],
  inject: ['emitter'],
  components: {
    Swiper,
    SwiperSlide,
    Loading,
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
            console.error('??????????????????');
          }
          this.getRecommend();
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
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
            const arry = Object.values(res.data.products);
            arry.forEach((i) => {
              if (
                i.category === this.product.category
                && i.id !== this.product.id
              ) {
                this.susumeArry.push(i);
              }
            });
          } else {
            console.error('????????????????????????');
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
