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
import ToastsList from '@/components/ToastsList.vue';

export default {
  components: {
    ToastsList,
  },
  inject: ['emitter'],
  methods: {
    checkAdmin() {
      const hexToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.$http.defaults.headers.common.Authorization = hexToken;
      const api = `${process.env.VUE_APP_API}api/user/check`;
      this.$http
        .post(api)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/admin/login');
            if (this.$route.path !== '/admin/login') {
              this.emitter.emit('pushMessage', {
                style: 'fail',
                content: '請先進行登入',
                icon: 'fa-solid fa-triangle-exclamation',
              });
            }
          } else if (this.$route.path === '/admin/login') {
            this.$router.push('/admin/products');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.checkAdmin();
  },
  watch: {
    $route() {
      this.checkAdmin();
    },
  },
};
</script>
