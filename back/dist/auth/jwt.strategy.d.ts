import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserService } from './user.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: number;
    }): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
export {};
