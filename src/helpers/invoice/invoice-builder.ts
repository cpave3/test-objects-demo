import { Invoice, PaymentMethod } from "../../types/invoice";
import { User } from "../../types/user";
import { UUID } from "../../types/uuid";
import { invoiceFactory } from "./invoice-factory";

export class InvoiceBuilder {
    private _invoice: Invoice;

    constructor() {
        this._invoice = invoiceFactory();
    }

    withId(id: UUID): InvoiceBuilder {
        this._invoice.id = id;
        return this;
    }

    withReferenceNumber(referenceNumber: string): InvoiceBuilder {
        this._invoice.reference_number = referenceNumber;
        return this;
    }

    withIssuedAt(issuedAt: Date): InvoiceBuilder {
        this._invoice.issued_at = issuedAt;
        return this;
    }

    withDueDate(dueDate: Date): InvoiceBuilder {
        this._invoice.due_date = dueDate.toISOString();
        return this;
    }

    withPayableTo(payableTo: User): InvoiceBuilder {
        this._invoice.payable_to = payableTo;
        return this;
    }

    withPayableBy(payableBy: User): InvoiceBuilder {
        this._invoice.payable_by = payableBy;
        return this;
    }

    withPaymentMethod(paymentMethod: PaymentMethod): InvoiceBuilder {
        this._invoice.payment_method = paymentMethod;
        return this;
    }

    /**
     * This derives the amount due from the amount paid, and the amount total. 
     * @param amountTotal the total amount of the invoice
     * @param amountPaid the amount paid so far
     */
    withAmounts(amountTotal: number, amountPaid: number): InvoiceBuilder {
        // If we want to, we could encode validation logic here to throw if the numbers are out of order
        this._invoice.amount = amountTotal;
        this._invoice.amount_paid = amountPaid;
        this._invoice.amount_due = amountTotal - amountPaid;
        return this;
    }

    build(): Invoice {
        return this._invoice;
    }
}