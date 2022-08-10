<template>
  <section class="ix-area ix-about">
    <div class="titleBox">
      <span class="titleEn">About Us</span>
      <h2 class="title wow fadeInUp" data-wow-delay="250ms"><span>關</span>於我們</h2>
    </div>
    <div class="container">
      <div class="ixAbout-textBox wow fadeInUp" data-wow-delay="500ms">
        <p>
          有點甜
          位於台北東區最熱鬧的街道上，為您提供舒適的環境、美味的甜點及耐人尋味的各式飲品。
        </p>
        <p>
          開幕至今的五年間，「注重服務品質、對食材嚴格把關」是我們至始至終的原則。
        </p>
        <p>
          甜品們在精緻亮麗的外表下，蘊藏著說不出的幸福滋味，等著您前往逐一品嘗。
        </p>
        <p>
          有點甜志在營造輕鬆、悠閒的氛圍，讓人們即使在繁忙的一天中，仍然可以享受到片刻的寧靜。
        </p>
      </div>
      <div class="ixAbout-imgBox">
        <figure class="mb-0">
          <img
            src="../assets/img/ixAbout01.jpg"
            alt="有點甜總店"
            class="img-fluid"
          />
        </figure>
      </div>
    </div>
  </section>
  <div class="ix-slider">
    <div class="container">
      <Slider></Slider>
    </div>
  </div>
</template>

<script>
import wowMixin from '@/mixins/wowMixin';
import Slider from '@/components/Slider.vue';

export default {
  components: {
    Slider,
  },
  mixins: [wowMixin],
};
</script>
