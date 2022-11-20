<script setup lang="ts">
  import BetisWhiteSrc from '@/assets/img/betis_white.png';
  import JaLogo from '@/components/common/JaLogo.vue';

</script>

<template>
  <div class="scarf">
    <div
        class="scarf__content"
    >
      <div
          class="container is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center"
      >
        <ja-logo class="scarf__img" />
        <span class="is-family-secondary has-text-weight-bold has-text-white scarf__text">SEGUIMOS</span>
        <img
            class="scarf__img"
            :src="BetisWhiteSrc"
        >
        <span class="is-family-secondary has-text-weight-bold has-text-white scarf__text">CAMINANDO</span>
        <ja-logo class="scarf__img" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/bulma';

  .scarf {
    .scarf__content {
      background-color: #026831;
    }

    .scarf__img {
      height: 5rem;
    }

    .scarf__text {
      font-size: 4rem;
    }
  }
</style>