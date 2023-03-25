<script setup lang="ts">
  import BetisWhiteSrc from '@/assets/img/betis_white.png';
  import JaLogo from '@/components/common/JaLogo.vue';

</script>

<template>
  <div class="ja-footer">
    <div
        class="ja-footer__content"
    >
      <div class="container has-text-white">
        <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
          <ja-logo class="ja-footer__img" />
          <span class="is-family-secondary has-text-weight-bold ja-footer__text">SEGUIMOS</span>
          <img class="ja-footer__img" :src="BetisWhiteSrc">
          <span class="is-family-secondary has-text-weight-bold ja-footer__text">CAMINANDO</span>
          <ja-logo class="ja-footer__img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/bulma';

  .ja-footer {
    .ja-footer__content {
      background-color: #026831;
    }

    .ja-footer__img {
      height: 5rem;
    }

    .ja-footer__text {
      font-size: 4rem;
    }
  }
</style>