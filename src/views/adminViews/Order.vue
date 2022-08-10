<template>
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
              <th width="120">訂單編號</th>
              <th width="120">訂購人</th>
              <th width="120">付款方式</th>
              <th width="120">付款日期</th>
              <th width="120">詳細內容</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 10" :key="item">
              <td>2022/08/10</td>
              <td>
                20220810
              </td>
              <td>翁莉莉</td>
              <td>
                信用卡
              </td>
              <td>
                2022/08/10
              </td>
              <td>
                <a href="#" title="查詢內容" @click.prevent="openDetail">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </a>
              </td>
              <td>
                草莓蛋糕的鮮奶油少一點，不要太甜，壽星不喜歡吃太甜，謝謝!!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
      <OrderModal ref="detail"></OrderModal>

    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import OrderModal from '@/components/adminComponents/OrderModal.vue';

export default {
  components: {
    Pagination,
    OrderModal,
  },
  methods: {
    openDetail() {
      this.$refs.detail.showModal();
    },
  },
};
</script>
