import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './dto/auth.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        email: string;
        id: number;
        name: string;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getByEmail(email: string): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    create(dto: AuthDto): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
