import { Role } from '@prisma/client';
export declare const Auth: (role?: Role) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
