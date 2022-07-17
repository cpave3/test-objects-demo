import { UUID } from "./uuid";

export interface User {
    id: UUID;
    email: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
}