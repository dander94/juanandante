<template>
  <MatchCard :match="match">
    <template #actions>
      <div class="tw-text-center">
        <q-btn
            class="tw-w-full"
            color="primary"
            :to="{ name: 'dashboard:match-request', params: { id: match.id } }"
        >
          Ver solicitudes
        </q-btn>
        <q-btn
            class="tw-w-full"
            color="primary"
            flat
            :icon="fasPencil"
            :to="{ name: 'dashboard:match-request', params: { id: match.id } }"
        >
          Editar
        </q-btn>
      </div>
    </template>
  </MatchCard>
</template>

<script setup lang="ts">
import { fasPencil } from '@quasar/extras/fontawesome-v6';

import MatchCard from 'src/components/dashboard/matches/MatchCard.vue';
import { Match } from 'src/types/match';

withDefaults(defineProps<{
  match: Match
}>(), {
});
</script>
