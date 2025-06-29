import { Body, Controller, Get, Post } from "@nestjs/common";
import { Filters, Pager, PaginatedResponse, Search, Sorter, SortOptions } from "@test-group/nest-crud";
import { QuerySafeDeepPartial, UserInfo } from "@test-group/nest-connector";
import { Pagination } from "@test-group/nest-connector/crud";
import { UserService } from "../services";
import { CreateUserDto } from "../dto";
import { UserEntity } from "../entities";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() dto: CreateUserDto): Promise<UserEntity> {
        return this.userService.save(dto);
    }

    @Get()
    findAll(
        @Pager() pagination?: Pagination,
        @Sorter() sort?: SortOptions<UserInfo>,
        @Search() search?: QuerySafeDeepPartial<UserInfo>,
        @Filters() filters: QuerySafeDeepPartial<UserInfo> = {},
    ): Promise<PaginatedResponse<UserEntity>> {
        return this.userService.getAll({ pagination, sort, search, filters });
    }
}
