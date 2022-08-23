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
          @click="openModal(true)"
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
              <td class="title">{{ item.title }}{{ item.id }}</td>
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
                    @click="openModal(false, item)"
                  >
                    編輯
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
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
      <Pagination :page="page" @changePage="changePage" ></Pagination>
      <Modal ref="modal" :pdt="tempProduct" @update="updateProduct"></Modal>
      <DelModal ref="delModal" :pdt="tempProduct" @del-product="delProduct"></DelModal>
    </div>
  </div>
</template>

<script>
import Header from '@/components/adminComponents/Header.vue';
import Pagination from '@/components/Pagination.vue';
import Modal from '@/components/adminComponents/Modal.vue';
import DelModal from '@/components/adminComponents/DelModal.vue';
import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      productList: [],
      tempProduct: {},
      isNew: false,
      page: {},
      currentPage: 1,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  components: {
    Header,
    Pagination,
    Modal,
    DelModal,
    Loading,
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${this.currentPage}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.productList = res.data.products;
            this.page = res.data.pagination;
            console.log(this.productList, 'productList');
          } else {
            console.error('列表取得失敗');
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    openModal(isNew, item) {
      this.$refs.modal.showModal();
      this.tempProduct = { ...item };
      this.isNew = isNew;
      console.log(this.productList, 'productList');
    },
    openDelModal(item) {
      this.$refs.delModal.showModal();
      this.tempProduct = { ...item };
    },
    delProduct(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.emitter.emit('pushMessage', {
            style: 'success',
            content: res.data.message,
            icon: '',
          });
          this.getProducts();
        } else {
          this.emitter.emit('pushMessage', {
            style: 'fail',
            content: res.data.message,
            icon: 'fa-solid fa-triangle-exclamation',
          });
        }
        this.$refs.delModal.hideModal();
        this.isLoading = false;
      }).catch((err) => {
        console.error(err);
      });
    },
    updateProduct(item) {
      this.isLoading = true;
      // 產品更新
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      let method = 'put';
      // 產品新增
      if (this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
        method = 'post';
      }
      this.isLoading = true;
      this.$http[method](api, { data: item }).then((res) => {
        this.isLoading = false;
        this.$refs.modal.hideModal();
        if (res.data.success) {
          this.emitter.emit('pushMessage', {
            style: 'success',
            content: res.data.message,
            icon: '',
          });
          this.getProducts();
        } else {
          this.emitter.emit('pushMessage', {
            style: 'fail',
            content: res.data.message,
            icon: 'fa-solid fa-triangle-exclamation',
          });
        }
      }).catch((err) => {
        this.isLoading = false;
        console.error(err);
      });
      this.isLoading = false;
    },
    changePage(page) {
      this.currentPage = page;
      this.getProducts();
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
