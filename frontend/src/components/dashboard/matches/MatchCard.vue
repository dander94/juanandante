<template>
  <q-card bordered>
    <q-card-section>
      <p class="text-primary tw-text-lg tw-mb-0">
        {{ match.localTeam }} - {{ match.awayTeam }}
      </p>
      <p>
        {{ match.date }}
      </p>
    </q-card-section>

    <q-card-section>
      <p>Precio socios: {{ match.cost }}€</p>
      <p>Precio no socios: {{ match.nonMemberCost }}€</p>
      <p>Fecha límite: {{ match.expDate }}</p>
    </q-card-section>

    <template v-if="showRequest">
      <q-separator inset />
      <q-card-section>
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
      </q-card-section>
    </template>
  </q-card>
</template>

<script setup lang="ts">
import { Match } from 'src/types/match';

withDefaults(defineProps<{
  match: Match,
  isRequested?: boolean,
  showRequest?: boolean
}>(), {
  isRequested: false,
  showRequest: false,
});
</script>
