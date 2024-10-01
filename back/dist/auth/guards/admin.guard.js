"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyAdminGuard = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
class OnlyAdminGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (user.role !== client_1.Role.ADMIN) {
            throw new common_1.ForbiddenException('У тебя нет прав!');
        }
        return true;
    }
}
exports.OnlyAdminGuard = OnlyAdminGuard;
//# sourceMappingURL=admin.guard.js.map