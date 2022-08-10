import { WOW } from 'wowjs';

export default {
  mounted() {
    this.$nextTick(() => {
      const wow = new WOW({
        live: false,
      });
      wow.init();
    });
  },
};
