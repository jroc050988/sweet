<template>
  <Header></Header>
  <div class="container">
    <div class="adminInner">
      <div class="btnBox">
        <button
          type="button"
          class="btn btn-primary mr-2 border-start-0"
          @click="openDelModal(true)"
        >
          刪除所有訂單
        </button>
      </div>
      <div class="pdtList">
        <table class="mt-4">
          <thead>
            <tr>
              <th width="120">訂單日期</th>
              <th width="360">訂單編號</th>
              <th width="120">訂購人</th>
              <th width="120">付款日期</th>
              <th>備註</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in orderList" :key="index">
              <td>{{ $filter.getDate(item.create_at * 1000) }}</td>
              <td>
                {{ item.id }}
              </td>
              <td>{{ item.user.name }}</td>
              <td v-if="item.is_paid">
                {{ item.paid_date }}
              </td>
              <td v-else>
                尚未付款
              </td>
              <td>
                {{ item.message }}
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    @click.prevent="openDetail(item)"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#delModal"
                    @click="openDelModal(false, item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <Pagination></Pagination> -->
      <OrderModal
        ref="detail"
        :data="orderDetail"
        @updata="updataOrder"
      ></OrderModal>
      <Loading :isShow="isLoading"></Loading>
      <DelModal
        ref="delModal"
        :pdt="orderDetail"
        :isAll = "isAll"
        @del-product="delProduct"
        @delAll="deleteAll"
      ></DelModal>
    </div>
  </div>
</template>

<script>
import Header from '@/components/adminComponents/Header.vue';
// import Pagination from '@/components/Pagination.vue';
import OrderModal from '@/components/adminComponents/OrderModal.vue';
import Loading from '@/components/Loading.vue';
import DelModal from '@/components/adminComponents/DelModal.vue';

export default {
  data() {
    return {
      orderList: [],
      isLoading: false,
      orderDetail: {},
      isAll: false,
    };
  },
  components: {
    Header,
    // Pagination,
    OrderModal,
    Loading,
    DelModal,
  },
  inject: ['emitter'],
  methods: {
    openDetail(item) {
      this.orderDetail = JSON.parse(JSON.stringify(item));
      this.$refs.detail.showModal();
    },
    openDelModal(isAll, item) {
      this.isAll = isAll;
      if (!isAll) {
        this.orderDetail = item;
      }
      this.$refs.delModal.showModal();
    },
    delProduct(item) {
      if (item === 'allOrder') {
        this.deleteAll();
      } else {
        this.isLoading = true;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
        this.$http
          .delete(api)
          .then((res) => {
            if (res.data.success) {
              this.$refs.delModal.hideModal();
              this.getOrder();
              this.isLoading = false;
              this.emitter.emit('pushMessage', {
                style: 'success',
                content: res.data.message,
                icon: 'fa-solid fa-circle-check',
              });
            } else {
              this.emitter.emit('pushMessage', {
                style: 'fail',
                content: res.data.message,
                icon: 'fa-solid fa-triangle-exclamation',
              });
              this.$refs.delModal.hideModal();
              this.isLoading = false;
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    getOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders;
            this.isLoading = false;
          } else {
            console.error('列表取得失敗');
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    updataOrder(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http
        .put(api, { data: item })
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: 'fa-solid fa-circle-check',
            });
            this.$refs.detail.hideModal();
            this.getOrder();
            this.isLoading = false;
          } else {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: res.data.message,
              icon: 'fa-solid fa-triangle-exclamation',
            });
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteAll() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.$refs.delModal.hideModal();
            this.getOrder();
            this.isLoading = false;
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: 'fa-solid fa-circle-check',
            });
          } else {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: res.data.message,
              icon: 'fa-solid fa-triangle-exclamation',
            });
            this.$refs.delModal.hideModal();
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
