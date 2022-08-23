<template>
  <router-view />
</template>

<style lang="scss">
@import './assets/scss/all';
</style>

<script>
import emitter from '@/mixins/mitter';

export default {
  provide: {
    emitter,
  },
};
</script>
