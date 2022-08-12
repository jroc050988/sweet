<template>
  <div
    class="toast align-items-center"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="d-flex align-items-stretch">
      <div class="toast-icon d-flex align-items-center" :class="msg.style">
        <font-awesome-icon :icon="msg.icon" />
      </div>
      <div class="toast-body">
        {{ msg.content }}
      </div>
      <button
        type="button"
        class="btn-close me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
import BsToast from 'bootstrap/js/dist/toast';

export default {
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new BsToast(toastEl, {
      delay: 1500,
    });
    toast.show();
  },
};
</script>
