<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
            提示
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p v-if="isAll">
            確定要
            <span class="red">刪除所有訂單</span>
            嗎?
          </p>
          <p v-else-if="pdt.title">
            您確定要
            <span class="red">刪除{{ pdt.title }}</span>
            嗎?
          </p>
          <p v-else>
            確定要
            <span class="red">刪除訂單{{ pdt.id }}</span>
            嗎?
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            v-if="isAll"
            type="button"
            class="btn btn-primary"
            @click="$emit('delAll')"
          >
            確定
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click="$emit('delProduct', pdt)"
          >
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '@/mixins/bsmodal';

export default {
  mixins: [modal],
  props: ['pdt', 'isAll'],
};
</script>
