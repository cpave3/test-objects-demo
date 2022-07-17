import { UserBuilder } from "./user-builder";

export const userMother = {
    underAgedUser: () => {
        return (new UserBuilder)
            .withDateOfBirth(new Date('2010-01-01'));
    },
    overAgedUser: () => {
        return (new UserBuilder)
            .withDateOfBirth(new Date('2000-01-01'));
    }
};