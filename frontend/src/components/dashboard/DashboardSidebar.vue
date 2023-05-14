<template>
  <q-list class="tw-text-lg tw-mt-3">
    <q-item
        v-for="item in MENU_ITEMS"
        :key="item.path"
        dark
        active-class="active-item"
        :to="{ name: item.path }">
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
        {{ item.title }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { fasHouse, fasTicket } from '@quasar/extras/fontawesome-v6';

const MENU_ITEMS : { icon: string, path: string, title: string }[] = [
  {
    icon: fasHouse,
    path: 'dashboard:home',
    title: 'Inicio',
  },
  {
    icon: fasTicket,
    path: 'tickets',
    title: 'Solicitudes de entradas',
  },
];
</script>

<style lang="scss" scoped>
  .active-item {
    color: $accent;
  }

  .logo {
    height: 8rem;
  }

</style>
