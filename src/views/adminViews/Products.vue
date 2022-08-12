<template>
  <Header></Header>
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
        <button
          type="button"
          class="btn btn-primary mr-2 border-start-0"
          @click="openModal()"
        >
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
            <tr v-for="(item, index) in productList" :key="index">
              <td>{{ item.category }}</td>
              <td>
                <img :src="item.imageUrl" alt="" class="img-fluid" />
              </td>
              <td class="title">{{ item.title }}</td>
              <td>
                {{ item.origin_price }}
              </td>
              <td>
                {{ item.price }}
              </td>
              <td>
                <span class="text-success">
                  {{ item.is_enabled == 1 ? '上架中' : '未上架' }}
                </span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal()"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
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
import Header from '@/components/adminComponents/Header.vue';
import Pagination from '@/components/Pagination.vue';
import Modal from '@/components/adminComponents/Modal.vue';
import DelModal from '@/components/adminComponents/DelModal.vue';

export default {
  data() {
    return {
      productList: [],
    };
  },
  components: {
    Header,
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
  mounted() {
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
    this.$http
      .get(api)
      .then((res) => {
        if (res.data.success) {
          this.productList = res.data.products;
        } else {
          console.err('列表取得失敗');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
