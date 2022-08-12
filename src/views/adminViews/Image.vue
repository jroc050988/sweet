<template>
  <Header></Header>
  <div class="container">
    <div class="adminInner">
      <div class="ImageBox">
        <div class="mb-3">
          <label for="image" class="form-label">輸入圖片網址</label>
          <input
            type="text"
            class="form-control"
            id="image"
            placeholder="請輸入圖片連結"
          />
        </div>
        <div class="mb-3">
          <label for="customFile" class="form-label">
            或 上傳圖片
            <i class="fas fa-spinner fa-spin"></i>
          </label>
          <input type="file" id="customFile" class="form-control" />
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-primary btn-block" type="submit">
            確定上傳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/adminComponents/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
