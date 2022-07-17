import { invoiceMother } from "../invoice/invoice-mother";
import { userMother } from "../user/user-mother"

/**
 * Generate 50 invoices, all unpaid, but not overdue
 */
export const manyUnpaidInvoices = () => {
    const issuer = userMother.overAgedUser();
    const recipient = userMother.overAgedUser();

    // This is very contrived
    const invoices = (new Array(50)).fill(0).map(() => {
        const invoice = invoiceMother.unpaidInvoice();
        invoice.payable_to = issuer;
        invoice.payable_by = recipient;
        return invoice;
    });

    // In a backend/api scenario, these would be persisted to a database, and accessible via the API
    return { issuer, recipient, invoices };
}