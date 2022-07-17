import { invoiceMother } from "../invoice/invoice-mother";
import { UserBuilder } from "../user/user-builder";
import { userMother } from "../user/user-mother"

/**
 * Generate 50 invoices, all unpaid, but not overdue
 */
export const manyUnpaidInvoices = () => {
    // If we need a particular configuration for this user, we can use the userMother object
    const issuer = userMother.overAgedUser().build();

    // If we don't care about the configuration, we can use the UserBuilder, or even the userFactory
    const recipient = (new UserBuilder).build();

    // In this contrived scenario, we want to generate 50 invoices, all unpaid, but not overdue
    const invoices = (new Array(50)).fill(0).map(() => {
        return invoiceMother.unpaidInvoice()
            .withPayableTo(issuer)
            .withPayableBy(recipient)
            .build();
    });

    // In a backend/api scenario, these would be persisted to a database, and accessible via the API
    return { issuer, recipient, invoices };
}