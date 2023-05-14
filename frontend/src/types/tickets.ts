export type TicketRequestStatus = 'pending' | 'payment' | 'confirmed'
export interface TicketRequest {
    awayTeam: string,
    cost: number,
    date: Date,
    expDate: Date,
    id: string,
    localTeam: string,
    nonMemberCost: number,
    status: TicketRequestStatus,
}
