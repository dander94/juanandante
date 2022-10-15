<script setup lang="ts">
  import { OButton } from '@oruga-ui/oruga-next';

  import JaLogo from '@/components/common/JaLogo.vue';
</script>

<template>
  <div class="fold">
    <div class="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center has-text-white has-text-centered">
      <h1 
          class="is-family-secondary is-size-1 has-text-weight-bold is-uppercase"
      >
        Peña Bética Juan Andante
      </h1>
      <p class="is-size-4 mb-6">
        Haciendo <strong class="has-text-white">Betis</strong> desde hace más de 25 años
      </p>
      <p class="is-size-6 is-italic">
        "Juan Andante,<br>yo soy un Juan Andante,<br>un bético de antes,<br>te sigo a todas partes."
        <br>
      </p>
      <ja-logo class="fold__logo mt-4" />
      <o-button
          class="fold__login button is-primary is-inverted is-rounded is-medium"
      >
        Acceso Peñistas
      </o-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/bulma';

.fold {
  background-image: url('./fold.jpeg');
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  position: relative;

  &::before {
    background: rgb(38, 110, 103);
    background: linear-gradient(0deg, rgba(38, 110, 103, 0.9416360294117647) 0%, rgba(38, 110, 103, 0.852000175070028) 57%, rgba(38, 110, 103, 0.5606836484593838) 100%);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .container {
    height: 100vh;
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
