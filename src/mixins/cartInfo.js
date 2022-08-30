import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      cartList: [],
      total: 0,
      finalTotal: 0,
      isLoading: false,
      couponCode: '',
      coupon: {},
    };
  },
  components: {
    Loading,
  },
  inject: ['emitter'],
  methods: {
    getCart(isLoading) {
      if (isLoading) {
        this.isLoading = true;
      }
      console.log(isLoading);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.cartList = res.data.data.carts;
            this.total = res.data.data.total;
            if (res.data.data.carts[0].coupon) {
              this.coupon = res.data.data.carts[0].coupon;
              this.couponCode = res.data.data.carts[0].coupon.code;
              this.hasCoupon = true;
              console.log(this.hasCoupon);
            }
            this.finalTotal = res.data.data.final_total + this.fare;
          } else {
            console.error('列表取得失敗');
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getCart(true);
  },
  computed: {
    fare() {
      if (this.total < 3000) {
        return 150;
      }
      return 0;
    },
    discount() {
      if (this.total !== 0) {
        return (this.total + this.fare) - this.finalTotal;
      }
      return 0;
    },
    remain() {
      return 3000 - this.total;
    },
  },
};
