import { faker } from "@faker-js/faker";
import { Invoice } from "../../types/invoice";
import { userFactory } from "../user/user-factory";

export const invoiceFactory = (state: Partial<Invoice>): Invoice => {
    // We can encapsulate logic in the factory, but for the user to override a single value,
    // we either need to make our logic more complex to account for that, or require the user to override all values
    const amount = state?.amount ?? faker.datatype.number({ min: 0, max: 100000 });
    const amount_paid = state?.amount_paid ?? faker.datatype.number({ min: 0, max: amount });
    const amount_due = amount - amount_paid;

    return {
        id: faker.datatype.uuid(),
        reference_number: faker.datatype.number().toString(),
        issued_at: faker.date.past(),
        due_date: faker.date.future().toDateString(),
        payable_to: userFactory(),
        payable_by: userFactory(),
        payment_method: faker.helpers.arrayElement(['eft', 'cheque', 'cash']),
        // If totally random, these values are not contextually correct
        amount,
        amount_paid,
        amount_due,
        ...state,
    };
};