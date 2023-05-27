import { defineStore } from 'pinia';

import { User } from 'src/types/user';

export type UserState = {
  user: User
};

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: '1',
      firstName: 'Dander',
      lastName: 'Developer',
      emailAddress: 'dander@email.com',
      phoneNumber: '666666666',
      birthdate: '1994-06-19',
    },
  }) as UserState,
  getters: {},
  actions: {},
});
