<template>
  <div class="pageInner contactPage">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Contact</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>聯</span>絡我們
        </h2>
      </div>
      <form class="infoFrom row">
        <div class="mb-3 col-md-6">
          <label for="name" class="form-label">
            主旨
            <span class="tag">必填</span>
          </label>
          <select class="form-select">
            <option selected>請選擇主旨</option>
            <option value="訂單刪除/修改">訂單刪除/修改</option>
            <option value="售後服務">售後服務</option>
            <option value="其他問題">其他問題</option>
          </select>
        </div>
        <div class="mb-3 col-md-6">
          <label for="name" class="form-label">
            姓名
            <span class="tag">必填</span>
          </label>
          <input type="email" class="form-control" id="name" />
        </div>
        <div class="mb-3 col-md-6">
          <label for="email" class="form-label">
            電子信箱
            <span class="tag">必填</span>
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3 col-md-6">
          <label for="tel" class="form-label">
            電話
            <span class="tag">必填</span>
          </label>
          <input type="email" class="form-control" id="tel" />
        </div>
        <div class="mb-3">
          <label for="add" class="form-label">
            地址
          </label>
          <input type="email" class="form-control" id="add" />
        </div>
        <div class="mb-3">
          <label for="massages" class="form-label">
            內容 <span class="tag">必填</span>
          </label>
          <textarea class="form-control" id="massages" rows="6"></textarea>
        </div>
        <div class="btnBox">
          <button type="button" class="btn btn-primary">
            確認送出
          </button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit('unit', 'contact');
  },
};
</script>
