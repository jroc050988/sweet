<template>
  <div class="pageInner contactPage">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Contact</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>聯</span>絡我們
        </h2>
      </div>
      <Form
        class="infoFrom row"
        v-slot="{
          errors,
        }"
        @submit="onSubmit"
      >
        <div class="mb-3 col-md-6">
          <label for="name" class="form-label">
            主旨
            <span class="tag">必填</span>
          </label>
          <Field class="form-select" as="select" name="主旨" rules="required" v-model="user.title">
            <option value="">請選擇主旨</option>
            <option value="訂單刪除/修改">訂單刪除/修改</option>
            <option value="售後服務">售後服務</option>
            <option value="其他問題">其他問題</option>
          </Field>
          <ErrorMessage name="主旨" class="inputNote"></ErrorMessage>
        </div>
        <div class="mb-3 col-md-6">
          <label for="name" class="form-label">
            姓名
            <span class="tag">必填</span>
          </label>
          <Field
            type="text"
            class="form-control"
            id="name"
            name="姓名"
            rules="required"
            v-model="user.name"
            :class="{ 'is-invalid': errors['姓名'] }"
          ></Field>
          <ErrorMessage name="姓名" class="inputNote"></ErrorMessage>
        </div>
        <div class="mb-3 col-md-6">
          <label for="email" class="form-label">
            電子信箱
            <span class="tag">必填</span>
          </label>
          <Field
            type="email"
            class="form-control"
            id="email"
            rules="required|email"
            v-model="user.email"
            name="電子信箱"
            :class="{ 'is-invalid': errors['電子信箱'] }"
          ></Field>
          <ErrorMessage name="電子信箱" class="inputNote"></ErrorMessage>
        </div>
        <div class="mb-3 col-md-6">
          <label for="tel" class="form-label">
            手機號碼
            <span class="tag">必填</span>
          </label>
          <Field
            type="text"
            class="form-control"
            id="tel"
            name="手機號碼"
            v-model="user.phone"
            :class="{ 'is-invalid': errors['手機號碼'] }"
            :rules="isPhone"
          ></Field>
          <ErrorMessage name="手機號碼" class="inputNote"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="add" class="form-label">
            地址
          </label>
          <Field type="email" v-model="user.add" class="form-control" id="add" name="地址"></Field>
        </div>
        <div class="mb-3">
          <label for="massages" class="form-label">
            內容
            <span class="tag">必填</span>
          </label>
          <Field
            as="textarea"
            class="form-control"
            id="massages"
            v-model="user.message"
            rows="6"
            name="內容"
            rules="required"
            :class="{ 'is-invalid': errors['內容'] }"
          ></Field>
          <ErrorMessage name="內容" class="inputNote"></ErrorMessage>
        </div>
        <div class="btnBox">
          <button class="btn btn-primary">
            確認送出
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        title: '',
      },
    };
  },
  inject: ['emitter'],
  emits: ['unit'],
  mounted() {
    this.$emit('unit', 'contact');
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼';
    },
    onSubmit() {
      this.emitter.emit('pushMessage', {
        style: 'success',
        content: '信件發送成功',
        icon: 'fa-solid fa-envelope',
      });
      this.user = {
        title: '',
      };
    },
  },
};
</script>
