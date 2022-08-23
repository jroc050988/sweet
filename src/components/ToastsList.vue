<template>
  <div class="toast-container">
    <Toast v-for="(item, index) in messages" :key="index" :msg="item"></Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  inject: ['emitter'],
  data() {
    return {
      messages: [],
    };
  },
  components: {
    Toast,
  },
  mounted() {
    this.emitter.on('pushMessage', (data) => {
      this.messages.push(data);
    });
  },
};
</script>
