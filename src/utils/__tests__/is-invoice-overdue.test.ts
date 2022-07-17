import { faker } from '@faker-js/faker';
import { describe, it, expect } from 'vitest';
import { invoiceMother } from '../../helpers/invoice/invoice-mother';
import { isInvoiceOverdue } from '../is-invoice-overdue';

describe('is-invoice-overdue', () => {
    it('is overdue', () => {
        const result = isInvoiceOverdue(invoiceMother.overdueInvoice().build());
        expect(result).toBe(true);
    });

    it('is not overdue', () => {
        const result = isInvoiceOverdue(invoiceMother.unpaidInvoice().build());
        expect(result).toBe(false);
    });

    it('handles paid, but otherwise overdue invoices', () => {
        // Because the object mothers return builders, we can tweak the outcome
        const invoice = invoiceMother
            .fullyPaidInvoice()
            .withDueDate(faker.date.recent())
            .build();

        const result = isInvoiceOverdue(invoice);
        expect(result).toBe(false);
    });
});
