import { faker } from '@faker-js/faker';
import { describe, it, expect } from 'vitest';
import { invoiceMother } from '../../helpers/invoice/invoice-mother';
import { isInvoiceOverdue } from '../is-invoice-overdue';

describe('is-invoice-overdue', () => {
    it('is overdue', () => {
        const result = isInvoiceOverdue(invoiceMother.overdueInvoice());
        expect(result).toBe(true);
    });

    it('is not overdue', () => {
        const result = isInvoiceOverdue(invoiceMother.unpaidInvoice());
        expect(result).toBe(false);
    });

    it('handles paid, but otherwise overdue invoices', () => {
        // There is nothing wrong with using one of the object mother invoices, and tweaking it for this test
        const invoice = invoiceMother.fullyPaidInvoice();
        invoice.due_date = faker.date.recent().toISOString();
        const result = isInvoiceOverdue(invoice);
        expect(result).toBe(false);
    });
});
