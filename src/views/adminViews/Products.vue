<template>
  <div class="container">
    <div class="adminInner">
      <div class="pdtSearchBox">
        <div class="btnBox">
          <input type="text" placeholder="請輸入產品名稱" />
          <button type="button" class="btn btn-primary mr-2 border-start-0">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <div class="btnBox">
        <button type="button" class="btn btn-primary mr-2 border-start-0" @click="openModal()">
          新增甜品
        </button>
      </div>
      <div class="pdtList">
        <table class="mt-4">
          <thead>
            <tr>
              <th width="120">分類</th>
              <th width="120">照片</th>
              <th>名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">狀態</th>
              <th width="200"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 8" :key="item">
              <td>分類</td>
              <td>
                <img src="@/assets/img/demo01.jpg" alt="" class="img-fluid" />
              </td>
              <td class="title">南瓜粥</td>
              <td>
                200
              </td>
              <td>
                100
              </td>
              <td>
                <span class="text-success">上架中</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                    @click="openModal()"
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
      <Modal ref="modal"></Modal>
      <DelModal ref="delModal"></DelModal>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Modal from '@/components/adminComponents/Modal.vue';
import DelModal from '@/components/adminComponents/DelModal.vue';

export default {
  components: {
    Pagination,
    Modal,
    DelModal,
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal();
    },
    openDelModal() {
      this.$refs.delModal.showModal();
    },
  },
};
</script>
