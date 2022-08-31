<template>
  <div class="ix-banner">
    <div class="ix-bannerTitleBox">
      <strong class="ix-bannerTitle">享受悠閒片刻的小確幸</strong>
      <span class="ix-bannerTitleEn">Enjoy Your Lift</span>
    </div>
    <div class="srcollDown">
      <font-awesome-icon icon="fa-solid fa-angle-down" class="icon icon01" />
      <font-awesome-icon icon="fa-solid fa-angle-down" class="icon icon02" />
      <font-awesome-icon icon="fa-solid fa-angle-down" class="icon icon03" />
      <span class="text">Scroll Down</span>
    </div>
  </div>
  <section class="ix-area ix-about">
    <div class="titleBox">
      <span class="titleEn">About Us</span>
      <h2 class="title wow fadeInUp" data-wow-delay="250ms">
        <span>關</span>於我們
      </h2>
    </div>
    <div class="container d-flex">
      <div class="ixAbout-textBox wow fadeInUp" data-wow-delay="500ms">
        <p>
          有點甜
          位於台北東區最熱鬧的街道上，為您提供舒適的環境、美味的甜點及耐人尋味的各式飲品。
        </p>
        <p>
          開幕至今的五年間，「注重服務品質、對食材嚴格把關」是我們至始至終的原則。
        </p>
        <p>
          甜品們在精緻亮麗的外表下，蘊藏著說不出的幸福滋味，等著您前往逐一品嘗。
        </p>
        <p>
          有點甜志在營造輕鬆、悠閒的氛圍，讓人們即使在繁忙的一天中，仍然可以享受到片刻的寧靜。
        </p>
      </div>
      <div class="ixAbout-imgBox">
        <figure class="mb-0">
          <img
            src="@/assets/img/ixAbout01.jpg"
            alt="有點甜總店"
            class="img-fluid"
          />
        </figure>
      </div>
    </div>
  </section>
  <div class="ix-slider">
    <div class="container">
      <Slider></Slider>
    </div>
  </div>
  <section class="ix-area ix-products">
    <div class="container-fluid">
      <div class="titleBox">
        <span class="titleEn">Selected Products</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>精</span>選商品
        </h2>
      </div>
      <div class="container">
        <ul class="topSale">
          <template v-for="(product, index) in productList" :key="index">
            <li
              class="productItem wow fadeIn"
              data-wow-delay="500ms"
              v-if="index <= 1 && index >= 0"
            >
              <figure class="imgBox">
                <a
                  href="#"
                  :title="product.title"
                  @click.prevent="$router.push(`/product/${product.id}`)"
                >
                  <img
                    :src="product.imageUrl"
                    :alt="product.title"
                    class="img-fluid"
                  />
                </a>
              </figure>
              <div class="textBox">
                <h3 class="title">
                  <a
                    href="#"
                    :title="product.title"
                    @click.prevent="$router.push(`/product/${product.id}`)"
                  >
                    {{ product.title }}
                  </a>
                </h3>
                <div
                  class="priceBox discount mb-3"
                  v-if="product.origin_price !== product.price"
                >
                  <div class="d-flex flex-column flex-start align-items-start">
                    <p class="origin_price">
                      $ {{ $filter.currency(product.origin_price) }}
                    </p>
                    <p class="price red">
                      $ {{ $filter.currency(product.price) }}
                    </p>
                  </div>
                  <p class="unit">/ {{ product.unit }}</p>
                </div>
                <div class="priceBox mb-3" v-else>
                  <p class="price">$ {{ $filter.currency(product.price) }}</p>
                  <p class="unit">/ {{ product.unit }}</p>
                </div>
                <p>
                  {{ product.description }}
                </p>
                <div class="btnBox mt-auto mr-2">
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
                    @click="addCart(product)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </li>
          </template>
        </ul>
        <ul class="productsList">
          <template v-for="(product, index) in productList" :key="index">
            <li v-if="index <= 9 && index >= 2">
              <div class="productItem">
                <figure class="imgBox">
                  <router-link :to="`/product/${product.id}`">
                    <img
                      :src="product.imageUrl"
                      :alt="product.title"
                      class="img-fluid"
                    />
                  </router-link>
                </figure>
                <div class="textBox">
                  <h3 class="title">
                    <a
                      href="#"
                      :title="product.title"
                      @click.prevent="$router.push(`/product/${product.id}`)"
                    >
                      {{ product.title }}
                    </a>
                  </h3>

                  <div
                    class="priceBox discount"
                    v-if="product.origin_price !== product.price"
                  >
                    <div
                      class="discountBox">
                      <p class="origin_price">
                        $ {{ $filter.currency(product.origin_price) }}
                      </p>
                      <p class="price red">
                        $ {{ $filter.currency(product.price) }}
                      </p>
                    </div>
                    <p class="unit">/ {{ product.unit }}</p>
                  </div>
                  <div class="priceBox mr-auto" v-else>
                    <p class="price">$ {{ $filter.currency(product.price) }}</p>
                    <p class="unit">/ {{ product.unit }}</p>
                  </div>
                  <div class="btnBox mt-auto">
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
                      @click="addCart(product)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import wowMixin from '@/mixins/wowMixin';
import Slider from '@/components/Slider.vue';
import addFavorite from '@/mixins/addFavorite';
import addCart from '@/mixins/addCart';

export default {
  data() {
    return {
      productList: [],
      favoriteArry: [],
    };
  },
  inject: ['emitter'],
  emits: ['unit'],
  components: {
    Slider,
  },
  mixins: [wowMixin, addFavorite, addCart],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            const arry = Object.values(res.data.products);
            // 隨機10筆進行輪播;總數未滿10筆全部輪播
            if (arry.length > 10) {
              const max = arry.length - 1;
              const min = 0;
              const randomArry = [];
              while (randomArry.length < 10) {
                const random = Math.floor(Math.random() * (max - min + 1)) + min;
                if (randomArry.every((i) => i !== random)) {
                  randomArry.push(random);
                }
              }
              randomArry.forEach((i) => {
                this.productList.push(arry[i]);
              });
            } else {
              this.productList = res.data.products;
            }
          } else {
            console.error('產品列表取得失敗');
          }
        })
        .catch((err) => {
          console.error(err);
        });
      if (localStorage.getItem('favorite')) {
        this.favoriteArry = JSON.parse(localStorage.getItem('favorite'));
      }
    },
  },
  mounted() {
    this.getProducts();
    this.$emit('unit', 'home');
  },
};
</script>
