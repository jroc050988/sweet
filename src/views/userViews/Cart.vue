<template>
  <div class="pageInner cartPage">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Cart</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>購</span>物清單
        </h2>
      </div>
      <div class="notFoundBox text-center mt-5 fs-3" v-if="!isHas">
        <p class="title">目前還沒有將任何甜品添加至購物車</p>
        <button
          class="btn btn-primary mr-2"
          type="button"
          @click="$router.push('/menu/all')"
        >
          瀏覽商品
        </button>
      </div>
      <div class="cartInner" v-if="isHas">
        <div class="cartListBox">
          <div class="btnBox mt-2">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="deleteAll"
            >
              清除全部
            </button>
          </div>
          <table class="w-100 mt-2">
            <thead class="cartListTitle">
              <tr>
                <td width="120">圖片</td>
                <td>品名</td>
                <td width="120">單價</td>
                <td width="120">數量</td>
                <td width="120">小計</td>
                <td width="60">刪除</td>
              </tr>
            </thead>
            <tbody class="cartList">
              <tr
                class="cartItem"
                v-for="(item, index) in cartList"
                :key="index"
              >
                <td class="imgBox">
                  <a
                    href="#"
                    :title="item.title"
                    @click.prevent="productDatil(item.product.id)"
                  >
                    <img
                      :src="item.product.imageUrl"
                      :alt="item.product.title"
                      class="img-fluid"
                    />
                  </a>
                </td>
                <td class="pdtName">
                  <a
                    href="#"
                    :title="item.title"
                    @click.prevent="productDatil(item.product.id)"
                  >
                    {{ item.product.title }}
                  </a>
                </td>
                <td class="pdtPrice">
                  $ {{ $filter.currency(item.product.price) }}
                </td>
                <td class="pdtbtn">
                  <div class="btnBox">
                    <button
                      type="button"
                      class="btn btn-outline-primary mr-2 border-end-0"
                      :class="{ disabled: item.qty < 2 }"
                      @click.prevent="numPlus(item, item.qty - 1)"
                    >
                      <font-awesome-icon icon="fa-solid fa-minus" />
                    </button>
                    <input
                      type="number"
                      class="numInput"
                      min="1"
                      v-model="item.qty"
                      @change="numPlus(item, item.qty)"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-primary mr-2 border-start-0"
                      @click.prevent="numPlus(item, item.qty + 1)"
                    >
                      <font-awesome-icon icon="fa-solid fa-plus" />
                    </button>
                  </div>
                </td>
                <td class="pdtTotal">$ {{ $filter.currency(item.total) }}</td>
                <td class="pdtDelete">
                  <a href="#" title="刪除" @click.prevent="deleteCart(item)">
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cartTotalBox">
          <div class="cartTotalInner">
            <div class="btnBox">
              <input
                type="text"
                class="couponInput"
                placeholder="請輸入優惠代碼"
                v-model="couponCode"
              />
              <button
                type="button"
                class="btn btn-outline-primary mr-2 border-start-0 couponBtn"
                @click="clickCoupon()"
              >
                套用
              </button>
            </div>
            <small
              class="note-ok"
              v-if="coupon && Object.keys(coupon).length !== 0"
            >
              <font-awesome-icon icon="fa-solid fa-circle-check" />
              已套用 {{ coupon.title }} 優惠券；折扣{{ 100 - coupon.percent }}%
            </small>
            <small class="note" v-else>
              <font-awesome-icon icon="fa-solid fa-circle-xmark" />
              尚未套用優惠券
            </small>
            <div class="cartTotalItem mt-2">
              <p class="title">總價</p>
              <p>$ {{ $filter.currency(total) }}</p>
            </div>
            <div
              class="cartTotalItem mt-2 red"
              v-if="coupon && Object.keys(coupon).length !== 0"
            >
              <p class="title">折扣</p>
              <p>- $ {{ $filter.currency(discount) }}</p>
            </div>
            <div class="cartTotalItem mt-2">
              <p class="title">運費</p>
              <p>$ {{ fare }}</p>
            </div>
            <small class="note-fail" v-if="this.total < 3000">
              <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
              還差 {{ $filter.currency(remain) }}元 即可免運費
            </small>
            <hr />
            <div class="cartTotalItem">
              <p class="title">結算</p>
              <p>$ {{ $filter.currency(finalTotal) }}</p>
            </div>
            <div class="btnBox nextStep">
              <button
                type="button"
                class="btn btn-outline-primary mr-2"
                @click="$router.push('/menu/all')"
              >
                繼續看
              </button>
              <button
                type="button"
                class="btn btn-primary mr-2"
                @click="nextStep"
              >
                下一步
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading :isShow="isLoading"></Loading>
</template>
<script>
import cartInfo from '@/mixins/cartInfo';

export default {
  mixins: [cartInfo],
  data() {
    return {
      hasCoupon: false,
    };
  },
  methods: {
    numPlus(pdt, num) {
      this.cartList.forEach((item, index) => {
        if (item.id === pdt.id) {
          if (pdt.qty < 1) {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: '數量不得小於1',
              icon: 'fa-solid fa-triangle-exclamation',
            });
            this.cartList[index].qty = 1;
          } else {
            this.cartList[index].qty = Number(num);
          }
          this.updateCart(this.cartList[index]);
        }
      });
    },
    updateCart(item) {
      const id = `${item.id}`;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .put(api, { data: item })
        .then((res) => {
          if (res.data.success) {
            this.getCart(false);
          } else {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: res.data.message,
              icon: 'fa-solid fa-triangle-exclamation',
            });
          }
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = false;
        });
    },
    deleteCart(item) {
      this.isLoading = true;
      const id = `${item.id}`;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: 'fa-solid fa-trash-can',
            });
            this.getCart(true);
          } else {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: res.data.message,
              icon: 'fa-solid fa-triangle-exclamation',
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = false;
        });
    },
    deleteAll() {
      this.isLoading = true;
      this.finalTotal = 0;
      this.coupon = {};
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.cartList = [];
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: 'fa-solid fa-trash-can',
            });
            this.getCart(true);
          } else {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: res.data.message,
              icon: 'fa-solid fa-triangle-exclamation',
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = false;
        });
    },
    clickCoupon() {
      this.usecoupon();
      this.emitter.emit('pushMessage', {
        style: 'success',
        content: '已套用優惠券',
        icon: 'fa-solid fa-ticket',
      });
    },
    usecoupon() {
      if (this.cartList.length === 0) {
        this.emitter.emit('pushMessage', {
          style: 'fail',
          content: '請添加購物車後再操作',
          icon: 'fa-solid fa-cart-arrow-down',
        });
      } else {
        this.isLoading = true;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
        this.$http
          .post(api, { data: { code: this.couponCode } })
          .then((res) => {
            if (res.data.success) {
              this.finalTotal = res.data.data.final_total;
              this.getCart(true);
            } else {
              this.emitter.emit('pushMessage', {
                style: 'fail',
                content: res.data.message,
                icon: 'fa-solid fa-triangle-exclamation',
              });
            }
            this.isLoading = false;
          })
          .catch((err) => {
            console.error(err);
            this.isLoading = false;
          });
      }
    },
    nextStep() {
      if (this.cartList.length !== 0) {
        this.$router.push('/cart-check');
      } else {
        this.emitter.emit('pushMessage', {
          style: 'fail',
          content: '請添加購物車後再操作',
          icon: 'fa-solid fa-cart-arrow-down',
        });
      }
    },
    productDatil(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  mounted() {
    this.$emit('unit', 'cart');
  },
  computed: {
    isHas() {
      if (this.cartList.length !== 0) {
        return true;
      }
      return false;
    },
  },
  watch: {
    hasCoupon() {
      this.usecoupon();
    },
  },
};
</script>
