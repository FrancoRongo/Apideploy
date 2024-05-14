import { Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./user.dto";
export declare class UsersRepository {
    private readonly userRepository;
    findBy(arg0: {
        isAdmin: boolean;
    }): User[] | PromiseLike<User[]>;
    constructor(userRepository: Repository<User>);
    getUsers(): Promise<User[]>;
    getUsersAdmin(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    getUsersByCountry(country: string): Promise<any[]>;
    getUsersPaginated(offset: number, limit: number): Promise<User[]>;
    getTotalCount(): Promise<number>;
    createUser(userDto: CreateUserDto, createdAt: string): Promise<{
        newUser: User;
        createdAt: string;
    }>;
    updateUser(id: string, updateUserDto: Partial<User>): Promise<User>;
    deleteUser(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
}
