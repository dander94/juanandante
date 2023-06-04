<template>
  <q-page>
    <div class="tw-container tw-mx-auto">
      <div class="tw-p-5">
        <h2 class="text-primary tw-text-2xl tw-font-bold tw-mb-4">
          Partidos abiertos para solicitud
        </h2>
        <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          <div
              v-for="match in matchStore.availableMatches"
              :key="match.id"
          >
            <ManageMatchCard
                :match="match"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useMatchStore } from 'src/stores/store-match';

import ManageMatchCard from 'src/components/dashboard/matches/management/ManageMatchCard.vue';

const matchStore = useMatchStore();
</script>
