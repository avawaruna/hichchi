// noinspection JSUnusedGlobalSymbols

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthErrors, Role, User } from "@test-group/nest-connector/auth";
import { PERMISSION_KEY } from "../decorators";

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredPermission: string = this.reflector.getAllAndOverride<string>(PERMISSION_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredPermission) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest() as { user: User };
        if ((user.role as Role).permissions?.includes(requiredPermission)) {
            return true;
        }
        throw new ForbiddenException(AuthErrors.AUTH_403_ROLE_FORBIDDEN);
    }
}
