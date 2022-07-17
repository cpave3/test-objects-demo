import { faker } from '@faker-js/faker'
import { User } from '../../types/user';

/**
 * returns a complete, valid user
 */
export const userFactory = (): User => {

    return {
        id: faker.datatype.uuid(),
        email: faker.internet.exampleEmail(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        date_of_birth: faker.date.birthdate().toDateString(),
    };
};