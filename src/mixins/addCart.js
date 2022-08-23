export default {
  methods: {
    addCart(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const addCart = {
        product_id: item.id,
        qty: Number(item.num),
      };
      console.log(addCart);
      this.$http
        .post(api, { data: addCart })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: '',
            });
          } else {
            this.emitter.emit('pushMessage', {
              style: 'fail',
              content: '加入購物車失敗',
              icon: 'fa-solid fa-triangle-exclamation',
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = false;
        });
    },
  },
};
