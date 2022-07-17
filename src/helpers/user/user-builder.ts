import { User, UUID } from "../../types/user";
import { userFactory } from "./user-factory";

/**
 * returns a complete, configurable user
 */
export class UserBuilder {
    private _user: User;

    constructor() {
        this._user = userFactory();
    }

    withId(id: UUID): UserBuilder {
        this._user.id = id;
        return this;
    }

    withFirstName(firstName: string): UserBuilder {
        this._user.first_name = firstName;
        return this;
    }

    withLastName(lastName: string): UserBuilder {
        this._user.last_name = lastName;
        return this;
    }

    withEmail(email: string): UserBuilder {
        this._user.email = email;
        return this;
    }

    withDateOfBirth(dateOfBirth: Date): UserBuilder {
        this._user.date_of_birth = dateOfBirth.toDateString();
        return this;
    }


    // withRole(role: string): UserBuilder {
    //     this._user.role = role;
    //     return this;
    // }

    build(): User {
        return this._user;
    }
}
