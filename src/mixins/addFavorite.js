export default {
  methods: {
    addFavorite(mehtod, item) {
      console.log('add');
      let dataArry = [];
      let data = '';
      if (localStorage.getItem('favorite')) {
        dataArry = JSON.parse(localStorage.getItem('favorite'));
        if (mehtod === 'add') {
          dataArry.push(item);
          data = JSON.stringify(dataArry);
          this.emitter.emit('pushMessage', {
            style: 'success',
            content: '已加入我的最愛',
            icon: 'fa-solid fa-heart',
          });
        } else {
          const newArry = dataArry.map((i) => i.id);
          dataArry.splice(newArry.indexOf(item.id), 1);
          data = JSON.stringify(dataArry);
          this.emitter.emit('pushMessage', {
            style: 'fail',
            content: '已刪除我的最愛',
            icon: 'fa-solid fa-heart',
          });
        }
      } else {
        dataArry.push(item);
        data = JSON.stringify(dataArry);
        this.emitter.emit('pushMessage', {
          style: 'success',
          content: '已加入我的最愛',
          icon: 'fa-solid fa-heart',
        });
      }
      localStorage.setItem('favorite', data);
      this.getProducts();
    },
  },
};
