<template>
  <q-page>
    <div class="tw-container tw-mx-auto">
      <div class="tw-p-5">
        <h2 class="text-primary tw-text-2xl tw-font-bold tw-mb-4">
          Solicitudes de entradas
        </h2>
        <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          <div
              v-for="match in matchStore.availableMatches"
              :key="match.id"
          >
            <AvailableMatchCard
                :match="match"
                :is-requested="isRequested(match.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useMatchStore } from 'src/stores/store-match';

import AvailableMatchCard from 'src/components/dashboard/matches/AvailableMatchCard.vue';
import { useUserStore } from 'src/stores/store-user';

const matchStore = useMatchStore();
const userStore = useUserStore();

const isRequested = (matchId: string) => matchStore.isMatchRequestedByUser(matchId, userStore.user.id);
</script>
