<template>
  <ToastsList></ToastsList>
  <router-view />
  <footer class="admin">
    <small class="copyright">
      Copyright © 2022 有點甜 All Rights Reserved. ※僅供學習使用 無任何商業用途
    </small>
  </footer>
</template>

<script>
import emitter from '@/mixins/mitter';
import ToastsList from '@/components/ToastsList.vue';

export default {
  provide: {
    emitter,
  },
  components: {
    ToastsList,
  },
  created() {
    const hexToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = hexToken;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http
      .post(api)
      .then((res) => {
        if (res.data.success) {
          this.$router.push('/admin/products');
        } else {
          this.$router.push('/admin/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
