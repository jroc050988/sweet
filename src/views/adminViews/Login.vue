<template>
  <div class="container-fluid adminBg">
    <div class="adminInner">
      <div class="loginBox">
        <form class="justify-content-center w-100">
          <h1 class="h3 mb-4 font-weight-normal text-center">管理者登入</h1>
          <div class="mb-3 inputBox">
            <label for="inputEmail" class="mb-2">電子信箱</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="請輸入您的電子信箱"
              required
              autofocus
              v-model="user.username"
            />
          </div>
          <div class="mb-4 inputBox">
            <label for="inputPassword" class="mb-2">密碼</label>
            <input
              :type="isShow ? 'password' : 'text'"
              id="inputPassword"
              class="form-control"
              placeholder="請輸入您的密碼"
              required
              v-model="user.password"
            />
            <div class="eyeicon" @click="this.isShow = !this.isShow">
              <font-awesome-icon v-if="isShow" icon="fa-solid fa-eye" />
              <font-awesome-icon v-else icon="fa-solid fa-eye-slash" />
            </div>
          </div>
          <div class="text-center mt-4">
            <button
              class="btn btn-primary btn-block"
              type="submit"
              @click.prevent="login()"
            >
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      user: {
        username: 'lilitest@gmail.com',
        password: 'lilitest',
      },
      isShow: true,
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: '登入成功',
              icon: 'fa-solid fa-right-to-bracket',
            });
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
            this.$router.push('/admin/products');
          } else {
            console.erroror(res.data.message);
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: '登入失敗',
              icon: 'fa-solid fa-triangle-exclamation',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
