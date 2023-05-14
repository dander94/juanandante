<template>
  <q-layout view="hHh lpR fFf">
    <q-header
        elevated
        class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn
            class="lt-lg"
            dense
            flat
            round
            icon="menu"
            @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="tw-flex tw-items-center rokkitt tw-font-bold tw-text-3xl tw-uppercase">
            Juan Andante
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        class="tw-bg-zinc-700"
        side="left"
        :breakpoint="1024"
        :overlay="$q.screen.lt.lg"
        show-if-above
        elevated
    >
      <DashboardSidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

import DashboardSidebar from 'src/components/dashboard/DashboardSidebar.vue';

const $q = useQuasar();
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
