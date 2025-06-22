import { IsNotEmpty, ValidateIf } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { SignUpBody } from "@test-group/nest-connector/auth";

@Dto()
export class RegisterDto implements SignUpBody {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @ValidateIf(({ email }) => !email)
    username?: string;

    @IsNotEmpty()
    @ValidateIf(({ username }) => !username)
    email?: string;

    @IsNotEmpty()
    password: string;
}
