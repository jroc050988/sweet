<template>
  <!-- Modal -->
  <div class="modal fade orderModal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <Form
        class="modal-content border-0"
        v-slot="{
          errors,
        }"
        @submit="onSubmit"
      >
        <div class="modal-header">
          <p class="modalTitle">
            <span>訂單編號: {{ data.id }}</span>
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="data.user">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="name" class="form-label inputTitle">
                  <font-awesome-icon icon="fa-solid fa-stroopwafel" />
                  訂購人姓名
                </label>
                <Field
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="order.user.name"
                  rules="required"
                  name="訂購人姓名"
                  :class="{ 'is-invalid': errors['訂購人姓名'] }"
                ></Field>
                <ErrorMessage
                  name="訂購人姓名"
                  class="inputNote"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label inputTitle">
                  <font-awesome-icon icon="fa-solid fa-stroopwafel" />
                  聯絡電子信箱
                </label>
                <Field
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="order.user.email"
                  rules="required|email"
                  name="聯絡電子信箱"
                  :class="{ 'is-invalid': errors['聯絡電子信箱'] }"
                ></Field>
                <ErrorMessage
                  name="聯絡電子信箱"
                  class="inputNote"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label inputTitle">
                  <font-awesome-icon icon="fa-solid fa-stroopwafel" />
                  手機號碼
                </label>
                <Field
                  type="text"
                  class="form-control"
                  id="tel"
                  v-model="order.user.tel"
                  name="手機號碼"
                  :class="{ 'is-invalid': errors['手機號碼'] }"
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
                  v-model="order.user.address"
                  rules="required"
                ></Field>
                <ErrorMessage name="收件地址" class="inputNote"></ErrorMessage>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="orderDetailList mb-1">
                <table class="w-100">
                  <thead>
                    <tr class="orderTitle">
                      <td>名稱</td>
                      <td width="80">原價</td>
                      <td width="80">售價</td>
                      <td width="60">數量</td>
                      <td width="80">小計</td>
                      <td width="80" v-if="coupon">折扣後</td>
                      <td width="80">刪除</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in products" :key="index">
                      <td>{{ item.product.title }}</td>
                      <td>{{ $filter.currency(item.product.origin_price) }}</td>
                      <td>{{ $filter.currency(item.product.price) }}</td>
                      <td>
                        <input
                          type="number"
                          v-model="item.qty"
                          @change="updataItem(item)"
                        />
                      </td>
                      <td>
                        {{ $filter.currency(item.total) }}
                      </td>
                      <td v-if="coupon">
                        {{ $filter.currency(item.final_total) }}
                      </td>
                      <td>
                        <a
                          href="#"
                          title="刪除"
                          class="d-block"
                          @click.prevent="deleteItem(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-trash-can" />
                        </a>
                      </td>
                    </tr>
                    <tr v-if="coupon">
                      <td colspan="7" class="text-left">
                        <font-awesome-icon icon="fa-solid fa-circle-check" />
                        已套用{{ coupon.title }}優惠券"{{
                          coupon.code
                        }}"；折扣{{ 100 - coupon.percent }}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="orderTotal">
                <div class="orderItem">
                  <p class="title">總價</p>
                  <p>$ {{ $filter.currency(origin_total) }}</p>
                </div>
                <div class="orderItem red" v-if="coupon">
                  <p class="title">折扣</p>
                  <p>– $ {{ $filter.currency(discount) }}</p>
                </div>
                <div class="orderItem">
                  <p class="title">運費</p>
                  <p>$ {{ fare }}</p>
                </div>
                <div class="orderItem">
                  <p class="title">結算</p>
                  <p>$ {{ $filter.currency(finalTotal) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button class="btn btn-primary">
            確定
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import modal from '@/mixins/bsmodal';

export default {
  data() {
    return {
      order: {},
      coupon: {},
      products: [],
      origin_total: 0,
      fare: 0,
      finalTotal: 0,
      discount: 0,
    };
  },
  mixins: [modal],
  props: {
    data: {
      type: Object,
      defalut() {
        return {};
      },
    },
  },
  watch: {
    data() {
      this.origin_total = 0;
      this.order = this.data;
      this.products = Object.values(this.data.products);
      Object.values(this.order.products).forEach((i) => {
        this.coupon = i.coupon;
      });
      this.count();
    },
  },
  methods: {
    updataItem(item) {
      this.products.forEach((i, index) => {
        if (i.id === item.id) {
          this.products[index].total = item.qty * item.product.price;
          if (this.coupon) {
            this.products[index].final_total = this.products[index].total
            * (item.coupon.percent / 100);
          }
        }
      });
      this.count();
    },
    deleteItem(item) {
      this.products.forEach((i, index) => {
        if (i.id === item.id) {
          this.products.splice(index, 1);
          this.order.products = this.products;
        }
      });
      this.count();
    },
    count() {
      this.origin_total = 0;
      this.finalTotal = 0;
      this.products.forEach((i) => {
        this.origin_total += i.total;
      });
      this.fare = this.origin_total > 3000 ? 0 : 150;
      if (!this.coupon) {
        this.finalTotal = this.origin_total + this.fare;
      } else {
        this.products.forEach((i) => {
          this.finalTotal += i.final_total;
        });
        this.finalTotal += this.fare;
        this.discount = this.origin_total + this.fare - this.finalTotal;
      }
    },
    onSubmit() {
      this.$emit('updata', this.order);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼';
    },
  },
};
</script>
