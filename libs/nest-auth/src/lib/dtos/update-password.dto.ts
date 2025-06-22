import { IsNotEmpty } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { UpdatePasswordBody } from "@test-group/nest-connector/auth";

@Dto()
export class UpdatePasswordDto implements UpdatePasswordBody {
    @IsNotEmpty()
    oldPassword: string;

    @IsNotEmpty()
    newPassword: string;
}
