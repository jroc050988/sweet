<template>
  <nav aria-label="Page navigation" class="pagination justify-content-center">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-if="page.has_pre == true">
        <a class="page-link" href="#" @click.prevent="$emit('changePage', page.current_page-1)">
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </a>
      </li>
      <li class="page-item" v-for="item in page.total_pages" :key="item">
        <a
          class="page-link"
          :class="{ active: item == page.current_page }"
          href="#"
          @click.prevent="$emit('changePage', item)"
        >
          {{ item }}
        </a>
      </li>
      <li class="page-item" v-if="page.has_next == true">
        <a class="page-link" href="#" @click.prevent="$emit('changePage', page.current_page+1)">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page'],
};
</script>
