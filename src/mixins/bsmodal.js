import Bsmodal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Bsmodal(this.$refs.modal);
  },
};
