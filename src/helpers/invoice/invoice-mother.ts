import { faker } from "@faker-js/faker"
import { InvoiceBuilder } from "./invoice-builder"

export const invoiceMother = {
    // Unpaid, but not overdue
    unpaidInvoice: () => {
        return (new InvoiceBuilder())
            .withIssuedAt(faker.date.recent())
            .withDueDate(faker.date.soon())
            .withAmounts(100, 0)
            .build()
    },
    // Unpaid, and overdue
    overdueInvoice: () => {
        const dueDate = faker.date.recent();
        return (new InvoiceBuilder())
            .withIssuedAt(faker.date.recent(10, dueDate))
            .withDueDate(dueDate)
            .withAmounts(100, 0)
            .build()
    },
    // Paid, but not overdue
    fullyPaidInvoice: () => {
        return (new InvoiceBuilder())
            .withIssuedAt(faker.date.recent())
            .withDueDate(faker.date.soon())
            .withAmounts(100, 100)
            .build()
    }
}