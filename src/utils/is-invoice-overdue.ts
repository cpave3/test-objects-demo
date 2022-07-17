import { Invoice } from "../types/invoice";

export const isInvoiceOverdue = (invoice: Invoice) => {
    if (invoice.amount_due > 0) {
        return new Date() > new Date(invoice.due_date);
    }
    return false;
}