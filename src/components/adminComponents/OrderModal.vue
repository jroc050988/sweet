<template>
  <!-- Modal -->
  <div class="modal fade orderModal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
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
                <label for="name" class="form-label">
                  訂購人姓名
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="name"
                  readonly
                  :value="data.user.name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  聯絡電子信箱
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  readonly
                  :value="data.user.email"
                />
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">
                  聯絡電話
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="tel"
                  readonly
                  :value="data.user.tel"
                />
              </div>
              <div class="mb-3">
                <label for="add" class="form-label">
                  收件地址
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="add"
                  readonly
                  :value="data.user.address"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="orderDetailList mb-1">
                <table class="w-100">
                  <thead>
                    <tr class="orderTitle">
                      <td>名稱</td>
                      <td width="120">原價</td>
                      <td width="120">售價</td>
                      <td width="60">數量</td>
                      <td width="120">小計</td>
                      <td width="120" v-if="coupon">折扣後</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(pdt, index) in data.products" :key="index">
                      <td>{{ pdt.product.title }}</td>
                      <td>{{ pdt.product.origin_price }}</td>
                      <td>{{ pdt.product.price }}</td>
                      <td>{{ pdt.qty }}</td>
                      <td>
                        {{ pdt.total }}
                      </td>
                      <td v-if="coupon">
                        {{ pdt.final_total }}
                      </td>
                    </tr>
                    <tr v-if="coupon">
                      <td colspan="6" class="text-left">
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
                  <p>¥ {{ origin_total }}</p>
                </div>
                <div class="orderItem red" v-if="coupon">
                  <p class="title">折扣</p>
                  <p>– ¥ {{ discount }}</p>
                </div>
                <div class="orderItem">
                  <p class="title">運費</p>
                  <p>¥ {{ fare }}</p>
                </div>
                <div class="orderItem">
                  <p class="title">結算</p>
                  <p>¥ {{ finalTotal }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '@/mixins/bsmodal';

export default {
  data() {
    return {
      origin_total: 0,
      coupon: {},
    };
  },
  mixins: [modal],
  props: ['data'],
  watch: {
    data() {
      this.origin_total = 0;
      Object.values(this.data.products).forEach((i) => {
        this.origin_total += i.total;
        this.coupon = i.coupon;
      });
    },
  },
  computed: {
    fare() {
      if (this.origin_total < 3000) {
        return 150;
      }
      return 0;
    },
    finalTotal() {
      return this.data.total + this.fare;
    },
    discount() {
      return (this.origin_total + this.fare) - this.finalTotal;
    },
  },
};
</script>
