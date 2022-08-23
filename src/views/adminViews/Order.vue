<template>
  <Header></Header>
  <div class="container">
    <div class="adminInner">
      <div class="pdtSearchBox">
        <div class="btnBox">
          <input type="text" placeholder="請輸入訂單編號" />
          <button type="button" class="btn btn-primary mr-2 border-start-0">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <div class="pdtList">
        <table class="mt-4">
          <thead>
            <tr>
              <th width="120">訂單日期</th>
              <th width="360">訂單編號</th>
              <th width="120">訂購人</th>
              <th width="120">付款日期</th>
              <th width="120">詳細內容</th>
              <th>備註</th>
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
                <a href="#" title="查詢內容" @click.prevent="openDetail(item)">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </a>
              </td>
              <td>
                {{ item.message }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <Pagination></Pagination> -->
      <OrderModal ref="detail" :data="orderDetail"></OrderModal>
      <Loading :isShow="isLoading"></Loading>
    </div>
  </div>
</template>

<script>
import Header from '@/components/adminComponents/Header.vue';
// import Pagination from '@/components/Pagination.vue';
import OrderModal from '@/components/adminComponents/OrderModal.vue';
import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      orderList: [],
      isLoading: false,
      orderDetail: {},
    };
  },
  components: {
    Header,
    // Pagination,
    OrderModal,
    Loading,
  },
  methods: {
    openDetail(item) {
      this.orderDetail = item;
      console.log(this.orderDetail);
      this.$refs.detail.showModal();
    },
    getOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders;
            console.log(res.data);
            this.isLoading = false;
          } else {
            console.log('列表取得失敗');
            this.isLoading = false;
          }
          console.log(res);
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
