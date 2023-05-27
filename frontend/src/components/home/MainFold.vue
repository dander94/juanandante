<script setup lang="ts">
import foldSrc from 'assets/img/fold.jpeg';
import JaLogo from 'components/JaLogo.vue';

const foldStyle = {
  'background-image': `url(${foldSrc})`,
};
</script>

<template>
  <div
      class="fold"
      :style="foldStyle"
  >
    <div class="fold__content tw-container tw-flex tw-flex-col tw-items-center tw-relative tw-mx-auto text-white text-center">
      <h1 class="rokkitt text-uppercase text-center text-weight-bold tw-mt-[4rem] md:tw-mt-[6rem] xl:tw-mt-[9rem] tw-text-4xl md:tw-text-6xl xl:tw-text-8xl">
        Peña Bética Juan Andante
      </h1>
      <h4 class="tw-mt-6 xl:tw-mt-8 tw-text-xl md:tw-text-2xl xl:tw-text-4xl">
        Caminando junto al <strong>Betis</strong> desde hace más de 20 años
      </h4>
      <p class="tw-mt-10">
        "Juan Andante,<br>yo soy un Juan Andante,<br>un bético de antes,<br>te sigo a todas partes."
        <br>
      </p>
      <ja-logo class="fold__logo tw-mt-6" />
      <q-btn
          class="fold__login"
          color="accent"
          :to="{ name: 'dashboard:home' }"
      >
        Acceso Peñistas
      </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fold {
  background-position: bottom;
  background-size: cover;
  min-height: 90vh;
  position: relative;

  &::before {
    background: rgb(38, 110, 103);
    background: linear-gradient(0deg,
    rgba(38, 110, 103, 1) 0%,
    rgba(38, 110, 103, 0.8520001751) 35%,
    rgba(38, 110, 103, 0.606836485) 100%
    );
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .fold__content {
    min-height: 90vh;
  }

  .fold__logo {
    height: 8rem;
  }

  .fold__login {
    bottom: 4rem;
    position: absolute;
  }
}
</style>
