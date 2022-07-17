import { User } from "../types/user";

export const isOver18 = (user: User) => {
    const age = new Date().getFullYear() - new Date(user.date_of_birth).getFullYear();
    return age >= 18;
}