import { IsOptional } from "class-validator";
import { Dto } from "@test-group/nest-core";

@Dto("User")
export class UpdateUserDto {
    @IsOptional()
    firstName: string;

    @IsOptional()
    lastName: string;
}
