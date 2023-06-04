<template>
  <MatchCard
      :match="match"
  >
    <template #actions>
      <div class="tw-text-center">
        <q-btn
            class="tw-w-full"
            color="primary"
            :flat="isRequested"
            :to="{ name: 'dashboard:match-request', params: { id: match.id } }"
        >
          {{ (isRequested) ? 'Ver mi solicitud' : 'Solicitar entradas' }}
        </q-btn>
      </div>
    </template>
  </MatchCard>
</template>

<script setup lang="ts">
import MatchCard from 'src/components/dashboard/matches/MatchCard.vue';
import { Match } from 'src/types/match';

withDefaults(defineProps<{
  isRequested?: boolean,
  match: Match
}>(), {
  isRequested: false,
});
</script>
