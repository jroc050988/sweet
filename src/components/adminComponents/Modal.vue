<template>
  <!-- Modal -->
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <Form
        class="modal-content border-0"
        v-slot="{
          errors,
        }"
        @submit="submit"
      >
        <div class="modal-header">
          <p class="modalTitle">
            <span>新增/編輯甜品</span>
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <p>主圖設定</p>
              <img class="img-fluid mb-2" alt="" :src="product.imageUrl" />
              <div class="mb-2">
                <Field
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  v-model="product.imageUrl"
                  :class="{ 'is-invalid': errors['圖片連結'] }"
                  name="圖片連結"
                  rules="url"
                ></Field>
                <ErrorMessage name="圖片連結" class="inputNote"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">
                  或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  rules="image"
                  name="上傳圖片"
                  ref="imgUpload"
                  :class="{ 'is-invalid': errors['上傳圖片'] }"
                  @change="imageUpload('imgUpload', 'customFile')"
                />
              </div>
              <p>更多圖片(上限十張)</p>
              <div class="imgBox mb-2">
                <div
                  class="imginner"
                  v-for="(item, index) in product.imagesUrl"
                  :key="index"
                >
                  <button
                    type="button"
                    class="btn btn-primary deleteBtn"
                    @click="deleteImgs(index)"
                  >
                    刪除
                  </button>
                  <img
                    class="img-fluid"
                    :alt="product.title + (index + 1)"
                    :src="item"
                  />
                </div>
              </div>
              <!-- 延伸技巧，多圖 -->
              <div class="mb-2" v-if="!imgsError">
                <div class="input-group">
                  <Field
                    type="text"
                    class="form-control"
                    id="images"
                    placeholder="請輸入圖片連結"
                    v-model="imgsInput"
                    name="多圖連結"
                    rules="url"
                  ></Field>
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary"
                      type="button"
                      @click="pushImg(imgsInput)"
                    >
                      新增
                    </button>
                  </div>
                </div>
                <ErrorMessage name="多圖連結" class="inputNote"></ErrorMessage>
              </div>
              <div class="mb-3" v-if="!imgsError">
                <label for="customFile" class="form-label">
                  或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile2"
                  class="form-control"
                  rules="image"
                  name="上傳圖片"
                  ref="imgUpload2"
                  :class="{ 'is-invalid': errors['上傳圖片'] }"
                  @change="imageUpload('imgUpload2', 'customFile2')"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <Field
                  name="標題"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['標題'] }"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="product.title"
                  rules="required"
                ></Field>
                <ErrorMessage name="標題" class="inputNote"></ErrorMessage>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-3">
                  <label for="category" class="form-label">類別</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model="product.category"
                    name="類別"
                    rules="required"
                    :class="{ 'is-invalid': errors['類別'] }"
                  ></Field>
                  <ErrorMessage name="類別" class="inputNote"></ErrorMessage>
                </div>
                <div class="mb-3 col-md-3">
                  <label for="price" class="form-label">單位</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model="product.unit"
                    name="單位"
                    rules="required"
                    :class="{ 'is-invalid': errors['單位'] }"
                  ></Field>
                  <ErrorMessage name="單位" class="inputNote"></ErrorMessage>
                </div>
                <div class="mb-3 col-md-3">
                  <label for="origin_price" class="form-label">原價</label>
                  <Field
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                    v-model="product.origin_price"
                    name="原價"
                    rules="required|min_value:1"
                    :class="{ 'is-invalid': errors['原價'] }"
                  ></Field>
                  <ErrorMessage name="原價" class="inputNote"></ErrorMessage>
                </div>
                <div class="mb-3 col-md-3">
                  <label for="price" class="form-label">售價</label>
                  <Field
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model="product.price"
                    name="售價"
                    rules="required|min_value:1"
                    :class="{ 'is-invalid': errors['售價'] }"
                  ></Field>
                  <ErrorMessage name="售價" class="inputNote"></ErrorMessage>
                </div>
              </div>
              <hr />
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <Field
                  as="textarea"
                  rows="6"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="product.description"
                  name="產品描述"
                  rules="required|max:200"
                  :class="{ 'is-invalid': errors['產品描述'] }"
                ></Field>
                <ErrorMessage name="產品描述" class="inputNote"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <Field
                  as="textarea"
                  rows="6"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                  v-model="product.content"
                  name="產品說明內容"
                  rules="required|max:500"
                  :class="{ 'is-invalid': errors['產品說明內容'] }"
                ></Field>
                <ErrorMessage
                  name="產品說明內容"
                  class="inputNote"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <div class="form-check form-switch">
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckDefault"
                    v-if="pdt.is_enabled == 1"
                  >
                    上架中
                  </label>
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckDefault"
                    v-else
                  >
                    未上架
                  </label>
                  <input
                    :true-value="1"
                    :false-value="0"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    v-model="product.is_enabled"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button class="btn btn-primary">
            確認送出
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import modal from '@/mixins/bsmodal';

export default {
  inject: ['emitter'],
  data() {
    return {
      product: {},
      imgsInput: '',
      imgsError: false,
    };
  },
  mixins: [modal],
  props: {
    pdt: {
      type: Object,
      defalut() {
        return {};
      },
    },
  },
  methods: {
    submit() {
      const item = {
        ...this.product,
        origin_price: Number(this.product.origin_price),
        price: Number(this.product.price),
      };
      this.$emit('update', item);
    },
    imageUpload(ref, domId) {
      const file = this.$refs[ref].files[0];
      const formdata = new FormData();
      formdata.append('file-to-upload', file);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http
        .post(api, formdata)
        .then((res) => {
          if (res.data.success) {
            if (ref === 'imgUpload') {
              this.product.imageUrl = res.data.imageUrl;
            } else {
              this.pushImg(res.data.imageUrl);
            }
            document.getElementById(domId).value = '';
          } else {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: res.data.message,
              icon: '',
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    deleteImgs(index) {
      // 出現錯誤;為啥????
      this.product.imagesUrl.splice(index, 1);
      // const imageArry = [...this.product.imagesUrl];
      // imageArry.splice(index, 1);
      // this.product.imagesUrl = imageArry;
      // if (this.product.imagesUrl.length < 10) {
      //   this.imgsError = false;
      // }
    },
    pushImg(img) {
      const imageArry = [...this.product.imagesUrl];
      if (this.product.imagesUrl.length === 10) {
        this.imgsError = true;
      } else {
        imageArry.push(img);
        this.product.imagesUrl = imageArry;
      }
      this.imgsInput = '';
    },
  },
  watch: {
    pdt() {
      this.product = { ...this.pdt };
      // 判斷資料中有無imagesUrl;沒有則建立imagesUrl空物件
      if (!this.product.imagesUrl) {
        this.product.imagesUrl = [];
      }
      this.imgsError = false;
      if (this.product.imagesUrl && this.product.imagesUrl.length === 10) {
        this.imgsError = true;
      }
    },
  },
};
</script>
