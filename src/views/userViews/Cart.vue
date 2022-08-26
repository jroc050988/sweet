<template>
  <div class="pageInner cartPage">
    <div class="container">
      <div class="cartListBox">
        <div class="titleBox">
          <span class="titleEn">Cart</span>
          <h2 class="title wow fadeInUp" data-wow-delay="250ms">
            <span>購</span>物清單
          </h2>
        </div>
        <div class="btnBox mt-2">
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="deleteAll"
          >
            清除全部
          </button>
        </div>
        <div class="cartListTitle">
          <p style="width: 20%;">圖片</p>
          <p style="width: 30%;">品名</p>
          <p style="width: 14%;">單價</p>
          <p style="width: 14%;">數量</p>
          <p style="width: 14%;">小計</p>
          <p style="width: 8%;">刪除</p>
        </div>
        <div class="cartList">
          <div class="cartItem" v-for="(item, index) in cartList" :key="index">
            <figure class="imgBox">
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
            </figure>
            <a
              href="#"
              :title="item.title"
              @click.prevent="productDatil(item.product.id)"
              class="pdtName"
            >
              <p>{{ item.product.title }}</p>
            </a>
            <p class="pdtPrice">$ {{ item.product.price }}</p>
            <div class="btnBox">
              <button
                type="button"
                class="btn btn-outline-primary mr-2 border-end-0"
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
            <p class="pdtTotal">$ {{ item.total }}</p>
            <a
              href="#"
              title="刪除"
              class="pdtDelete"
              @click.prevent="deleteCart(item)"
            >
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </a>
          </div>
        </div>
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
              @click="usecoupon"
            >
              套用
            </button>
          </div>
          <small
            class="note-ok"
            v-if="coupon && Object.keys(coupon).length !== 0"
          >
            <font-awesome-icon icon="fa-solid fa-circle-check" />
            已套用優惠券"{{ coupon.code }}"；折扣{{ 100 - coupon.percent }}%
          </small>
          <small class="note" v-else>
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
            尚未套用優惠券
          </small>
          <div class="cartTotalItem mt-2">
            <p class="title">總價</p>
            <p>$ {{ total }}</p>
          </div>
          <div
            class="cartTotalItem mt-2 red"
            v-if="coupon && Object.keys(coupon).length !== 0"
          >
            <p class="title">折扣</p>
            <p>- $ {{ discount }}</p>
          </div>
          <div class="cartTotalItem mt-2">
            <p class="title">運費</p>
            <p>$ {{ fare }}</p>
          </div>
          <small class="note-fail" v-if="this.total < 3000">
            <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
            還差 {{ remain }}元 即可免運費
          </small>
          <hr />
          <div class="cartTotalItem">
            <p class="title">結算</p>
            <p>$ {{ finalTotal }}</p>
          </div>
          <div class="btnBox nextStep">
            <button
              type="button"
              class="btn btn-outline-primary mr-2"
              @click="$router.push('/menu')"
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
  <Loading :isShow="isLoading"></Loading>
</template>
<script>
import cartInfo from '@/mixins/cartInfo';

export default {
  mixins: [cartInfo],
  methods: {
    numPlus(pdt, num) {
      this.cartList.forEach((item, index) => {
        if (item.id === pdt.id) {
          this.cartList[index] = {
            ...item,
            qty: num,
          };
          this.updateCart(this.cartList[index]);
        }
      });
    },
    updateCart(item) {
      this.isLoading = true;
      const id = `${item.id}`;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .put(api, { data: item })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: '',
            });
            this.getCart();
          } else {
            this.isLoading = false;
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: res.data.message,
              icon: 'fa-solid fa-triangle-exclamation',
            });
          }
        })
        .catch((err) => {
          console.log(err);
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
              icon: '',
            });
            this.getCart();
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
          console.log(err);
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
          console.log(res.data);
          if (res.data.success) {
            this.cartList = [];
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: '',
            });
            this.getCart();
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
            console.log(res);
            if (res.data.success) {
              this.finalTotal = res.data.data.final_total;
              this.emitter.emit('pushMessage', {
                style: 'success',
                content: res.data.message,
                icon: '',
              });
              this.getCart();
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
            console.log(err);
            this.isLoading = false;
          });
      }
      this.couponCode = '';
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
};
</script>
