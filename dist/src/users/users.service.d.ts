import { User } from "./users.entity";
import { CreateUserDto } from "./user.dto";
import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(createUserDto: CreateUserDto, createdAt: string): Promise<{
        newUser: {
            newUser: User;
            createdAt: string;
        };
        createdAt: string;
    }>;
    getUsers(page?: number, limit?: number): Promise<{
        users: any[];
        totalPages: number;
        totalCount: number;
    }>;
    getUsersAdmin(): Promise<User[]>;
    getUsersByCountry(country: string): Promise<any[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserByName(name: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        createdAt: string;
        orders: import("../orders/orders.entity").Order[];
    }>;
    getUserById(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: Partial<User>): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        createdAt: string;
        orders: import("../orders/orders.entity").Order[];
    }>;
    deleteUser(id: string): Promise<User>;
}
