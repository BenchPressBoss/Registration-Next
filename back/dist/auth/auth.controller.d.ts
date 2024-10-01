import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { UserService } from './user.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            name: string | null;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    register(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            name: string | null;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    getNewTokens(req: Request, res: Response): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            name: string | null;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    logout(res: Response): Promise<boolean>;
    getProfile(id: number): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getList(): Promise<{
        email: string;
        id: number;
        name: string;
    }[]>;
}
