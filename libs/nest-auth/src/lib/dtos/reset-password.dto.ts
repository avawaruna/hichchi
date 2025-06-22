import { IsNotEmpty } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { ResetPasswordBody, VerifyToken } from "@test-group/nest-connector/auth";

@Dto()
export class ResetPasswordDto implements ResetPasswordBody {
    @IsNotEmpty()
    token: VerifyToken;

    @IsNotEmpty()
    password: string;
}
