<template>
  <div class="pageInner cartOkPage">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Finish</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>訂</span>單完成
        </h2>
      </div>
      <div class="cartFinBox">
        <font-awesome-icon icon="fa-solid fa-circle-check" class="checkIcon" />
        <p class="note">
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
          為確保您的權益，請牢記訂單編號以便進行查詢
        </p>
        <p ref="copyText">
          訂單編號 | {{ orderId }}
          <button type="button" class="btn btn-primary btn-sm" @click.prevent="copy()">複製</button>
        </p>
        <p>訂單日期 | {{ $filter.getDate(create * 1000) }}</p>
      </div>
      <div class="btnBox">
        <button type="button" class="btn btn-outline-primary" @click="$router.push('/order')">
          訂單查詢
        </button>
        <button type="button" class="btn btn-primary" @click="$router.push('/menu/all')">
          繼續購物
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      create: '',
    };
  },
  inject: ['emitter'],
  methods: {
    copy() {
      const elInput = document.createElement('input');
      elInput.value = this.orderId;
      document.body.appendChild(elInput);
      elInput.select();
      document.execCommand('Copy');
      elInput.remove();
      this.emitter.emit('pushMessage', {
        style: 'success',
        content: '已複製訂單ID',
        icon: 'fa-solid fa-copy',
      });
    },
  },
  mounted() {
    this.orderId = sessionStorage.getItem('orderId');
    this.create = sessionStorage.getItem('create');
    this.$emit('unit', 'cart');
  },
};
</script>
