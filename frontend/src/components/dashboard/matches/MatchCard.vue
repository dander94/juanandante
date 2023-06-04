<template>
  <q-card bordered>
    <q-card-section>
      <p class="text-primary tw-text-lg tw-mb-0">
        {{ match.localTeam }} - {{ match.awayTeam }}
      </p>
      <p>
        {{ datetimeToHuman(match.date) }}
      </p>
    </q-card-section>

    <q-card-section>
      <p>Precio socios: {{ match.cost }}€</p>
      <p>Precio no socios: {{ match.nonMemberCost }}€</p>
      <p>Fecha límite: {{ datetimeToHuman(match.expDate) }}</p>
    </q-card-section>

    <template v-if="slots.actions">
      <q-separator inset />
      <q-card-section>
        <slot name="actions" />
      </q-card-section>
    </template>
  </q-card>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

import { Match } from 'src/types/match';
import { datetimeToHuman } from 'src/utils/date';

const slots = useSlots();

defineProps<{
  match: Match,
}>();
</script>
