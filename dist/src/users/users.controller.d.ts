import { UsersService } from "./users.service";
import { User } from "./users.entity";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAdmin(): Promise<User[]>;
    getUsers(page: number, limit: number): Promise<{
        users: any[];
        totalPages: number;
        totalCount: number;
    }>;
    getUserProfile(request: Request & {
        user: any;
    }): string;
    getUsersByCountry(country: string): Promise<any[]>;
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
