<script setup lang="ts">
  import JaLogo from '@/components/common/JaLogo.vue';
  import { OButton } from '@oruga-ui/oruga-next';
</script>

<template>
  <header class="top-bar is-flex is-align-items-center">
    <div
        class="container is-flex is-justify-content-space-between is-align-items-center"
    >
      <ja-logo class="top-bar__logo" />
      <div class="top-bar__body has-text-centered">
        <p
            class="top-bar__title is-family-secondary is-font-size-1 has-text-weight-bold has-text-primary is-uppercase"
        >
          Peña Bética Juan Andante
        </p>
      </div>
      <o-button
          class="button is-primary is-rounded">
        Acceso peñistas
      </o-button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/bulma';

.top-bar {
  border-bottom: 2px solid $grey-lighter;
  height: 6rem;

  .top-bar__logo {
    height: 4rem;
  }

  .top-bar__title {
    font-size: 3rem;
  }
}
</style>
