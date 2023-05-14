<template>
  <q-page>
    <div class="tw-container tw-mx-auto">
      <div class="tw-p-5">
        <h2 class="text-primary tw-text-2xl tw-mb-4">
          Solicitudes de entradas
        </h2>
        <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          <div
              v-for="request in ticketState.ticketRequests"
              :key="request.id"
          >
            <TicketRequest :ticket-request="request" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useTicketStore } from 'src/stores/ticket-store';

import TicketRequest from 'src/components/dashboard/tickets/TicketRequest.vue';

const ticketState = useTicketStore();
</script>
