import { defineStore } from 'pinia';

import { TicketRequest } from 'src/types/tickets';

export type TicketStore = {
  ticketRequests: TicketRequest[],
};

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    ticketRequests: [
      {
        awayTeam: 'Real Betis',
        cost: 20.0,
        date: new Date(),
        expDate: new Date(),
        id: '1',
        localTeam: 'UD Almeria',
        nonMemberCost: 25.0,
        status: 'confirmed',
      },
      {
        awayTeam: 'FC Barcelona',
        cost: 50.0,
        date: new Date(),
        expDate: new Date(),
        id: '2',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
        status: 'pending',
      },
      {
        awayTeam: 'Real Betis',
        cost: 20.0,
        date: new Date(),
        expDate: new Date(),
        id: '1',
        localTeam: 'UD Almeria',
        nonMemberCost: 25.0,
        status: 'payment',
      },
      {
        awayTeam: 'FC Barcelona',
        cost: 50.0,
        date: new Date(),
        expDate: new Date(),
        id: '2',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
        status: 'pending',
      },
    ],
  }) as TicketStore,
  actions: {},
});
