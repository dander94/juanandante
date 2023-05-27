import { defineStore } from 'pinia';

import { Match, MatchRequest } from 'src/types/match';

export type MatchState = {
  matches: Match[],
  matchRequestsByMatchId: { [matchId: string]: MatchRequest[] }
};

export const useMatchStore = defineStore('match', {
  state: () => ({
    matches: [
      {
        awayTeam: 'Real Betis',
        cost: 20.0,
        date: '2023-3-2 8:00AM',
        expDate: '2023-3-2 8:00AM',
        id: '1',
        localTeam: 'UD Almeria',
        nonMemberCost: 25.0,
      },
      {
        awayTeam: 'FC Barcelona',
        cost: 50.0,
        date: '2023-3-2 8:00AM',
        expDate: '2023-3-2 8:00AM',
        id: '2',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
        status: 'pending',
      },
      {
        awayTeam: 'Real Madrid',
        cost: 50.0,
        date: '2023-3-2 8:00AM',
        expDate: '2023-3-2 8:00AM',
        id: '3',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
      },
    ],
    matchRequestsByMatchId: {},
  }) as MatchState,
  getters: {
    getMatchById({ matches }: MatchState): (id: string) => Match | undefined {
      return (id) => matches.find(({ id: matchId }) => matchId === id);
    },
    getMatchRequestsByMatchAndUser({ matchRequestsByMatchId }): (matchId: string, userId: string) => MatchRequest[] {
      return (matchId, userId) => (matchRequestsByMatchId[matchId] || []).filter(({ author }) => author === userId);
    },
    isMatchRequestedByUser({ matchRequestsByMatchId }: MatchState): (matchId: string, userId: string) => boolean {
      return (matchId, userId) => (matchRequestsByMatchId[matchId] || []).some(({ author }) => userId === author);
    },
  },
  actions: {
    async saveMatchRequests(matchRequests: MatchRequest[]): Promise<void> {
      const promise = new Promise<void>((resolve) => {
        matchRequests.forEach(
          (mR) => {
            this.matchRequestsByMatchId = {
              ...this.matchRequestsByMatchId,
              [mR.matchId]: [
                ...(this.matchRequestsByMatchId[mR.matchId] || []),
                mR,
              ],
            };
          },
        );
        resolve();
      });
      await promise;
    },
  },
});
