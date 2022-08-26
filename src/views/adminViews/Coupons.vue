<template>
  <Header></Header>
  <div class="container">
    <div class="adminInner">
      <div class="btnBox">
        <button
          type="button"
          class="btn btn-primary mr-2 border-start-0"
          @click="opencouponsModal(true)"
        >
          新增優惠券
        </button>
      </div>
      <div class="pdtList">
        <table class="mt-4">
          <thead>
            <tr>
              <th width="120">名稱</th>
              <th width="120">折扣</th>
              <th width="120">到期日</th>
              <th>優惠序號</th>
              <th>是否啟用</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in couponList" :key="index">
              <td>{{ item.title }}</td>
              <td>{{ 100 - item.percent }} %</td>
              <td>{{ $filter.getDate(item.due_date) }}</td>
              <td>
                {{ item.code }}
              </td>
              <td>
                {{ item.is_enabled == 1 ? '已啟用' : '未啟用' }}
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    @click="opencouponsModal(false, item)"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#delModal"
                    @click="openDelModal(item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Loading :isShow="isLoading"></Loading>
      <Pagination :page="page" @changePage="changePage"></Pagination>
      <DelModal
        ref="delModal"
        :pdt="tempcoupon"
        @delProduct="delcoupon"
      ></DelModal>
      <Coupons
        ref="couponsModal"
        :couponData="tempcoupon"
        @update="updatecoupon"
      ></Coupons>
    </div>
  </div>
</template>

<script>
import Header from '@/components/adminComponents/Header.vue';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/adminComponents/DelModal.vue';
import Coupons from '@/components/adminComponents/CouponsModal.vue';
import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      couponList: [],
      tempcoupon: {},
      isLoading: false,
      page: {},
      currentPage: 1,
      isNew: true,
    };
  },
  components: {
    Header,
    Pagination,
    DelModal,
    Coupons,
    Loading,
  },
  inject: ['emitter'],
  methods: {
    openDelModal(item) {
      this.tempcoupon = item;
      this.$refs.delModal.showModal();
    },
    opencouponsModal(isNew, item) {
      this.isNew = isNew;
      if (!isNew) {
        this.tempcoupon = item;
        console.log(this.tempcoupon);
      } else {
        this.tempcoupon = {};
      }
      this.$refs.couponsModal.showModal();
    },
    getcoupons() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${this.currentPage}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            this.couponList = res.data.coupons;
            this.page = res.data.pagination;
            this.isLoading = false;
          } else {
            console.log('列表取得失敗');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    updatecoupon(coupon) {
      if (this.isNew) {
        this.isLoading = true;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        const temp = coupon;
        this.$http
          .post(api, { data: temp })
          .then((res) => {
            if (res.data.success) {
              this.$refs.couponsModal.hideModal();
              this.getcoupons();
              this.isLoading = false;
              this.emitter.emit('pushMessage', {
                style: 'success',
                content: res.data.message,
                icon: '',
              });
            } else {
              this.$refs.couponsModal.hideModal();
              this.getcoupons();
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
      } else {
        this.isLoading = true;
        const couponId = coupon.id;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${couponId}`;
        const temp = coupon;
        this.$http
          .put(api, { data: temp })
          .then((res) => {
            if (res.data.success) {
              this.$refs.couponsModal.hideModal();
              this.getcoupons();
              this.isLoading = false;
              this.emitter.emit('pushMessage', {
                style: 'success',
                content: res.data.message,
                icon: '',
              });
            } else {
              this.$refs.couponsModal.hideModal();
              this.getcoupons();
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
      }
    },
    delcoupon(item) {
      this.isLoading = true;
      const couponId = item.id;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${couponId}`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.$refs.delModal.hideModal();
            this.getcoupons();
            this.isLoading = false;
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: '',
            });
          } else {
            this.$refs.delModal.hideModal();
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
    getDate(data) {
      const date = new Date(data);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    changePage(page) {
      this.currentPage = page;
      this.getcoupons();
    },
  },
  mounted() {
    this.getcoupons();
  },
};
</script>
