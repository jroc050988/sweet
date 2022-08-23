<template>
  <div class="pageInner orderPage">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Order</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>訂</span>
          單搜尋
        </h2>
      </div>
      <div class="btnBox orderSearch">
        <input
          type="text"
          class="orderInput"
          placeholder="請輸入訂單編號"
          v-model="orderCode"
        />
        <button
          type="button"
          class="btn btn-primary mr-2 border-start-0 orderBtn"
          @click="searchOrder"
        >
          搜尋
        </button>
      </div>
      <div class="orderInfo" v-if="Object.keys(orderInfo).length !== 0">
        <div class="orderInfoList">
          <div>訂單編號: {{ orderInfo.id }}</div>
          <div>訂單日期: {{ $filter.getDate(orderInfo.create_at *1000) }}</div>
          <div>{{ orderInfo.is_paid ? '已付款' : '未付款' }}</div>
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
                  <td>{{ item.product.price }}</td>
                  <td>{{ item.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="cartTotalItem my-2">
            <p class="title">總價</p>
            <p>¥ {{ origin_total }}</p>
          </div>
          <div class="cartTotalItem red my-2">
            <p class="title">折扣</p>
            <p>– ¥ {{ discount }}</p>
          </div>
          <div class="cartTotalItem">
            <p class="title">運費</p>
            <p>¥ {{ fare }}</p>
          </div>
          <hr />
          <div class="cartTotalItem">
            <p class="title">結算</p>
            <p>¥ {{ finalTotal }}</p>
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
</template>

<script>
export default {
  data() {
    return {
      orderCode: '',
      orderInfo: {},
    };
  },
  methods: {
    searchOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderCode}`;
      this.$http
        .get(api)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.orderInfo = res.data.order;
            console.log(res);
          } else {
            console.error('訂單取得失敗');
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
  watch: {
    orderInfo() {
      this.origin_total = 0;
      console.log(this.orderInfo.products);
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
