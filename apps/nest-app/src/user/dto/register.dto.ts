import { IsNotEmpty, IsOptional } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { SignUpBody } from "@test-group/nest-connector/auth";

@Dto("User")
export class RegisterUserDto implements SignUpBody {
    @IsNotEmpty()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsNotEmpty()
    email?: string;

    @IsNotEmpty()
    password: string;
}
