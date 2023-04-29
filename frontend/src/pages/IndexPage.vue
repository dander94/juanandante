<template>
  <q-page>
    <MainFold />
    <RecentPosts />
    <KeepWalking class="tw-mt-5"/>
    <p class="text-center tw-my-3">
      Peña Bética Juan Andante. Todos los derechos reservados.
    </p>
  </q-page>
</template>

<script setup lang="ts">
import MainFold from 'src/components/home/MainFold.vue';
import RecentPosts from 'src/components/home/RecentPosts.vue';
import KeepWalking from 'src/components/home/KeepWalking.vue';
</script>

<style lang="scss" scoped>
</style>
