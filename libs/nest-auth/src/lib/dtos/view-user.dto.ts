import { IViewDto } from "@test-group/nest-core";
import { User } from "@test-group/nest-connector/auth";

export class ViewUserDto implements IViewDto {
    formatDataSet(user: User): User {
        return user;
    }
}
