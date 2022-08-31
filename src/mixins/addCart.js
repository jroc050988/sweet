export default {
  methods: {
    addCart(item, productPage, buyNow) {
      this.isLoading = true;
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
          if (res.data.success) {
            if (productPage === true && buyNow === true) {
              this.$router.push('/cart');
            }
            this.emitter.emit('pushMessage', {
              style: 'success',
              content: res.data.message,
              icon: 'fa-solid fa-cart-plus',
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
