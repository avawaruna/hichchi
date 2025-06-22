import { IsNotEmpty, IsString, ValidateIf } from "class-validator";
import { SignInBody } from "@test-group/nest-connector/auth";
import { Dto } from "@test-group/nest-core";

@Dto()
export class LoginDto implements SignInBody {
    @IsNotEmpty()
    @ValidateIf(({ email }) => !email)
    username?: string;

    @IsNotEmpty()
    @ValidateIf(({ username }) => !username)
    email?: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
