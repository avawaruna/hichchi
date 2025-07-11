// noinspection JSUnusedGlobalSymbols

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Pagination } from "@test-group/nest-connector/crud";
import { DEFAULT_ITEMS_PER_PAGE } from "@test-group/nest-connector";

/**
 * Page decorator
 *
 * This decorator is used to get the page and limit from the request query.
 *
 * @example
 * ```TypeScript
 * @Controller("user")
 * export class UserController {
 *     @Get()
 *     async getUsers(@Pager() pager?: IPagination): Promise<User[]> {
 *         // Implementation
 *     }
 * }
 * ```
 * @returns {ParameterDecorator} The parameter decorator
 * */
export function Pager(): ParameterDecorator {
    return createParamDecorator((_data: unknown, ctx: ExecutionContext): Pagination | undefined => {
        const req: { query: { page?: string; limit?: string } } = ctx.switchToHttp().getRequest();

        if (req.query?.page && req.query?.limit) {
            const p = Number(req.query.page);
            const t = Number(req.query.limit);
            const page: number = p ? p : 1;
            const take: number = t ? t : DEFAULT_ITEMS_PER_PAGE;
            delete req.query.page;
            delete req.query.limit;
            return { take, skip: (page - 1) * take };
        }

        return undefined;
    })();
}
