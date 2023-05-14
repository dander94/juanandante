<template>
  <q-card bordered>
    <q-card-section>
      <p class="text-primary tw-text-lg tw-mb-0">
        {{ ticketRequest.localTeam }} - {{ ticketRequest.awayTeam }}
      </p>
      <p>
        {{ ticketRequest.date }}
      </p>
    </q-card-section>

    <q-card-section>
      <p>Precio socios: {{ ticketRequest.cost }}€</p>
      <p>Precio no socios: {{ ticketRequest.nonMemberCost }}€</p>
      <p>Fecha límite: {{ ticketRequest.expDate }}</p>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-badge
          transparent
          align="middle"
          :class="statusColor"
      >
        <span class="tw-uppercase">{{ ticketRequest.status }}</span>
      </q-badge>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { TicketRequest } from 'src/types/tickets';
import { computed } from 'vue';

const props = defineProps<{
  ticketRequest: TicketRequest,
}>();

const statusColor = computed((): string => {
  switch (props.ticketRequest.status) {
    case 'confirmed':
      return 'tw-bg-green-700';
    case 'payment':
      return 'tw-bg-amber-500';
    default:
      return 'tw-bg-gray-500';
  }
});
</script>
