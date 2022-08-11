<template>
  <div class="container">
    <div class="adminInner">
      <div class="pdtSearchBox">
        <div class="btnBox">
          <input type="text" placeholder="請輸入優惠序號" />
          <button type="button" class="btn btn-primary mr-2 border-start-0">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <div class="btnBox">
        <button
          type="button"
          class="btn btn-primary mr-2 border-start-0"
          @click="openCuponsModal()"
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
            <tr v-for="item in 10" :key="item">
              <td>優惠券</td>
              <td>
                80 %
              </td>
              <td>2022/08/10</td>
              <td>
                Lili20220810
              </td>
              <td>
                已啟用
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    @click="openCuponsModal()"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#delModal"
                    @click="openDelModal()"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
      <DelModal ref="delModal"></DelModal>
      <Cupons ref="cuponsModal"></Cupons>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/adminComponents/DelModal.vue';
import Cupons from '@/components/adminComponents/CuponsModal.vue';

export default {
  components: {
    Pagination,
    DelModal,
    Cupons,
  },
  methods: {
    openDelModal() {
      this.$refs.delModal.showModal();
    },
    openCuponsModal() {
      this.$refs.cuponsModal.showModal();
    },
  },
};
</script>
