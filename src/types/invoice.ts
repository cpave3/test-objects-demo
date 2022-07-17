import { DateString } from "./date-string";
import { User } from "./user";
import { UUID } from "./uuid";

export type PaymentMethod = 'eft' | 'cheque' | 'cash';

export interface Invoice {
    id: UUID;
    reference_number: string;
    issued_at: Date;
    due_date: DateString;
    payable_to: User;
    payable_by: User;
    payment_method: PaymentMethod;
    amount: number;
    amount_paid: number;
    amount_due: number;
}