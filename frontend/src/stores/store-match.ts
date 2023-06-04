import { defineStore } from 'pinia';

import { Match, MatchRequest } from 'src/types/match';

export type MatchState = {
  matchById: { [matchId: string]: Match },
  matchRequestsByMatchId: { [matchId: string]: MatchRequest[] },
};

export const useMatchStore = defineStore('match', {
  state: () => ({
    matchById: {
      1: {
        awayTeam: 'Real Betis',
        cost: 20.0,
        date: new Date('2023-6-19 8:00'),
        expDate: new Date('2023-6-19 8:00'),
        id: '1',
        localTeam: 'UD Almeria',
        nonMemberCost: 25.0,
      },
      2: {
        awayTeam: 'FC Barcelona',
        cost: 50.0,
        date: new Date('2023-6-20 8:00'),
        expDate: new Date('2023-6-20 8:00'),
        id: '2',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
      },
      3: {
        awayTeam: 'Real Madrid',
        cost: 50.0,
        date: new Date('2023-7-1 8:00'),
        expDate: new Date('2023-7-1 8:00'),
        id: '3',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
      },
      4: {
        awayTeam: 'Real Betis',
        cost: 20.0,
        date: new Date('2023-3-2 8:00'),
        expDate: new Date('2023-3-2 8:00'),
        id: '4',
        localTeam: 'Getafe',
        nonMemberCost: 25.0,
      },
      5: {
        awayTeam: 'Getafe',
        cost: 50.0,
        date: new Date('2023-3-2 8:00'),
        expDate: new Date('2023-3-2 8:00'),
        id: '5',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
      },
      6: {
        awayTeam: 'Levante UD',
        cost: 50.0,
        date: new Date('2023-3-2 8:00'),
        expDate: new Date('2023-3-2 8:00'),
        id: '6',
        localTeam: 'Real Betis',
        nonMemberCost: 55.0,
      },
    },
    matchRequestsByMatchId: {},
  }) as MatchState,
  getters: {
    availableMatches({ matchById }: MatchState): Match[] | undefined {
      const now = new Date();

      return Object.values(matchById).filter(({ expDate }) => expDate >= now).sort(((a, b) => b.date.getTime() - a.date.getTime()));
    },
    getMatchById({ matchById }: MatchState): (id: string) => Match | undefined {
      return (id) => matchById[id];
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
