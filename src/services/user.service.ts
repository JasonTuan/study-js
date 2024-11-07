/**
* This file is used to create a service for the user.
* The service is used to interact with the user data.
* The service provides the following functions:
* 1. getUserById: This function is used to get the user by id.
* 2. createUser: This function is used to create a new user.
* 3. updateUser: This function is used to update the user.
* 4. deleteUser: This function is used to delete the user.
* 5. getUsers: This function is used to get all the users.
*/
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';

export class UserService {

    constructor(
        public users: User[] = [],
    ) {}

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    createUser(user: User): User {
        this.users.push(user);
        return user;
    }

    updateUser(id: number, user: User): User | undefined {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = user;
            return user;
        }
        return undefined;
    }

    deleteUser(id: number): User | undefined {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            const user = this.users[index];
            this.users.splice(index, 1);
            return user;
        }
        return undefined;
    }

    getUsers(): User[] {
        return this.users;
    }

    /**
     * This function is used to mock users.
     * Create mock 20 users and add them to the users array.
     */
    mockUsers(): void {
        for (let i = 1; i <= 20; i++) {
            const user: User = {
                id: i,
                name: `User${i}`,
                age: 25, // Add a default age
                gender: 'unknown', // Add a default gender
                contact: {
                    email: `user${i}@example.com`,
                    phone: `123-456-789${i}`,
                    address: `Address ${i}`
                } as Contact
            };
            this.createUser(user);
        }
    }

}
