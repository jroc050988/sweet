export default {
  methods: {
    addCart(item, productPage) {
      this.isLoading = true;
      console.log(item.num);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const addCart = {
        product_id: item.id,
      };
      if (productPage === true) {
        addCart.qty = Number(item.num);
      } else {
        addCart.qty = 1;
      }
      this.$http
        .post(api, { data: addCart })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            console.log(res.data);
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: '',
            });
          } else {
            console.error(res.data.message);
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
