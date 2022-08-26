<template>
  <div class="pageInner cartPage cartCheckPage">
    <Form class="container" v-slot="{ errors }" @submit="createOrder">
      <div class="cartListBox">
        <div class="titleBox">
          <span class="titleEn">Check</span>
          <h2 class="title wow fadeInUp" data-wow-delay="250ms">
            <span>資</span>料填寫
          </h2>
        </div>
        <p></p>
        <div class="infoFrom">
          <div class="mb-3">
            <label for="name" class="form-label">
              訂購人姓名
              <span class="tag">必填</span>
            </label>
            <Field
              type="email"
              class="form-control"
              id="name"
              name="訂購人姓名"
              :class="{ 'is-invalid': errors['訂購人姓名'] }"
              v-model="orderData.user.name"
              rules="required"
            ></Field>
            <ErrorMessage name="訂購人姓名" class="inputNote"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              聯絡電子信箱
              <span class="tag">必填</span>
            </label>
            <Field
              type="email"
              class="form-control"
              id="email"
              name="聯絡人電子信箱"
              :class="{ 'is-invalid': errors['聯絡人電子信箱'] }"
              v-model="orderData.user.email"
              rules="required|email"
            ></Field>
            <ErrorMessage
              name="聯絡人電子信箱"
              class="inputNote"
            ></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">
              手機號碼
              <span class="tag">必填</span>
            </label>
            <Field
              type="text"
              class="form-control"
              id="tel"
              name="手機號碼"
              :class="{ 'is-invalid': errors['手機號碼'] }"
              v-model="orderData.user.tel"
              :rules="isPhone"
            ></Field>
            <ErrorMessage name="手機號碼" class="inputNote"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="add" class="form-label">
              收件地址
              <span class="tag">必填</span>
            </label>
            <Field
              type="text"
              class="form-control"
              id="add"
              name="收件地址"
              :class="{ 'is-invalid': errors['收件地址'] }"
              v-model="orderData.user.address"
              rules="required"
            ></Field>
            <ErrorMessage name="收件地址" class="inputNote"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="massages" class="form-label">
              備註
            </label>
            <textarea
              class="form-control"
              id="massages"
              rows="3"
              v-model="orderData.message"
            ></textarea>
          </div>
          <div class="form-check">
            <Field
              class="form-check-input"
              type="checkbox"
              value="'check'"
              id="flexCheckDefault"
              name="確認資料"
              rules="required"
            ></Field>
            <label class="form-check-label" for="flexCheckDefault">
              我已確認資料填寫無誤，並已詳細閱讀
              <a href="" title="">銷售條款</a>
              。
              <span class="tag">必填</span>
            </label>
            <br />
            <ErrorMessage name="確認資料">
              <div class="inputNote">請確認資料，並詳細閱讀銷售條款</div>
            </ErrorMessage>
          </div>
        </div>
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
              <tr v-for="(item, index) in cartList" :key="index">
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.product.price }}</td>
                <td>{{ item.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <small
          class="note-ok"
          v-if="coupon && Object.keys(coupon).length !== 0"
        >
          <font-awesome-icon icon="fa-solid fa-circle-check" />
          已套用優惠券"{{ coupon.code }}"；折扣{{ 100 - coupon.percent }}%
        </small>
        <div class="cartTotalItem mt-2">
          <p class="title">總價</p>
          <p>$ {{ total }}</p>
        </div>
        <div class="cartTotalItem mt-2 red" v-if="coupon && Object.keys(coupon).length !== 0">
          <p class="title">折扣</p>
          <p>- $ {{ discount }}</p>
        </div>
        <div class="cartTotalItem mt-2">
          <p class="title">運費</p>
          <p>$ {{fare}}</p>
        </div>
        <hr />
        <div class="cartTotalItem">
          <p class="title">結算</p>
          <p>$ {{ finalTotal }}</p>
        </div>
        <div class="btnBox nextStep">
          <button
            type="button"
            class="btn btn-outline-primary mr-2"
            @click="$router.push('/cart')"
          >
            上一步
          </button>
          <button class="btn btn-primary mr-2">
            去結帳
          </button>
        </div>
      </div>
    </Form>
  </div>
  <Loading :isShow="isLoading"></Loading>
</template>

<script>
import cartInfo from '@/mixins/cartInfo';

export default {
  mixins: [cartInfo],
  data() {
    return {
      orderData: {
        user: {},
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      console.log('createOrder');
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http
        .post(api, { data: this.orderData })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.isLoading = false;
            sessionStorage.setItem('orderId', res.data.orderId);
            sessionStorage.setItem('create', res.data.create_at);
            this.$router.push('/cart-ok');
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: '',
            });
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
          console.error(err);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼';
    },
  },
  mounted() {
    this.$emit('unit', 'cart');
  },
};
</script>
