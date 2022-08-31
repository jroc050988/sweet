<template>
  <div class="pageInner orderPage">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Order</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>訂</span>單搜尋
        </h2>
      </div>
      <div class="orderSearch">
        <div class="btnBox">
          <input
            type="text"
            class="orderInput form-control"
            placeholder="請輸入訂單編號"
            v-model="orderCode"
            :class="{ 'is-invalid': isError }"
          />
          <button
            type="button"
            class="btn btn-primary mr-2 border-start-0 orderBtn"
            @click="searchOrder"
          >
            搜尋
          </button>
        </div>
        <p v-if="isError" class="inputNote">請輸入訂單編號</p>
      </div>
      <div class="orderInfo" v-if="this.orderInfo !== null">
        <div class="orderInfoList">
          <div>訂單編號: {{ orderInfo.id }}</div>
          <div>訂單日期: {{ $filter.getDate(orderInfo.create_at * 1000) }}</div>
        </div>
        <div class="cartTotalBox">
          <div class="orderDetailList mb-1">
            <table class="w-100">
              <thead>
                <tr class="orderTitle">
                  <td>名稱</td>
                  <td width="60">數量</td>
                  <td>售價</td>
                  <td>小計</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in orderInfo.products" :key="index">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td>{{ $filter.currency(item.product.price) }}</td>
                  <td>{{ $filter.currency(item.total) }}</td>
                </tr>
                <tr v-if="coupon">
                  <td colspan="6" class="text-left">
                    <font-awesome-icon icon="fa-solid fa-circle-check" />
                    已套用{{ coupon.title }}優惠券"{{ coupon.code }}"；折扣{{
                      100 - coupon.percent
                    }}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="cartTotalItem my-2">
            <p class="title">總價</p>
            <p>$ {{ $filter.currency(origin_total) }}</p>
          </div>
          <div class="cartTotalItem red my-2">
            <p class="title">折扣</p>
            <p>– $ {{ $filter.currency(discount) }}</p>
          </div>
          <div class="cartTotalItem">
            <p class="title">運費</p>
            <p>$ {{ fare }}</p>
          </div>
          <hr />
          <div class="cartTotalItem">
            <p class="title">結算</p>
            <p>$ {{ $filter.currency(finalTotal) }}</p>
          </div>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            訂購人姓名
          </label>
          <input
            type="email"
            class="form-control"
            id="name"
            :value="orderInfo.user.name"
            readonly
          />
        </div>
        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="email" class="form-label">
              聯絡電子信箱
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              :value="orderInfo.user.email"
              readonly
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="tel" class="form-label">
              聯絡電話
            </label>
            <input
              type="email"
              class="form-control"
              id="tel"
              :value="orderInfo.user.tel"
              readonly
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="add" class="form-label">
            收件地址
          </label>
          <input
            type="email"
            class="form-control"
            id="add"
            :value="orderInfo.user.address"
            readonly
          />
        </div>
        <div class="mb-3">
          <label for="massages" class="form-label">
            備註
          </label>
          <textarea
            class="form-control"
            id="massages"
            rows="3"
            :value="orderInfo.message"
            readonly
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <Loading :isShow="isLoading"></Loading>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      orderCode: '',
      orderInfo: null,
      coupon: {},
      isError: false,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  components: {
    Loading,
  },
  methods: {
    searchOrder() {
      if (this.orderCode === '') {
        this.isError = true;
      } else {
        this.isLoading = true;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderCode}`;
        this.$http
          .get(api)
          .then((res) => {
            this.isLoading = false;
            if (res.data.order) {
              this.orderInfo = res.data.order;
              this.coupon = Object.values(res.data.order.products)[0].coupon;
            } else {
              this.emitter.emit('pushMessage', {
                style: 'fail',
                content: '無此訂單',
                icon: 'fa-solid fa-triangle-exclamation',
              });
            }
          })
          .catch((err) => {
            console.error(err);
            this.isLoading = false;
          });
        this.isError = false;
        this.orderCode = '';
      }
    },
  },
  watch: {
    orderInfo() {
      this.origin_total = 0;
      Object.values(this.orderInfo.products).forEach((i) => {
        this.origin_total += i.total;
      });
    },
  },
  mounted() {
    this.$emit('unit', 'order');
  },
  computed: {
    discount() {
      return this.origin_total - this.orderInfo.total;
    },
    fare() {
      if (this.origin_total > 3000) {
        return 0;
      }
      return 150;
    },
    finalTotal() {
      return this.orderInfo.total + this.fare;
    },
  },
};
</script>
