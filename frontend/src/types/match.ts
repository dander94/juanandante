export interface Match {
  awayTeam: string,
  cost: number,
  date: Date,
  expDate: Date,
  id: string,
  localTeam: string,
  nonMemberCost: number,
}

export interface MatchRequestPerson {
  firstName: string;
  lastName: string;
  birthdate: string;
  personId: string;
  phoneNumber: string;
}

export interface MatchRequest extends MatchRequestPerson {
  author: string,
  isMember: boolean,
  matchId: string,
}
