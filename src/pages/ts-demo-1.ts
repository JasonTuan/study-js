/**
 * Call User Service, run mockUsers() function to create mock users and display them.
 */
import { UserService } from '../services/user.service';

const userService = new UserService();
userService.mockUsers();
console.log(userService.getUsers());
