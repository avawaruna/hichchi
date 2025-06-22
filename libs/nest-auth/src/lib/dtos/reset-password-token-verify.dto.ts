import { IsNotEmpty } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { ResetPasswordTokenVerifyBody, VerifyToken } from "@test-group/nest-connector/auth";

@Dto()
export class ResetPasswordTokenVerifyDto implements ResetPasswordTokenVerifyBody {
    @IsNotEmpty()
    token: VerifyToken;
}
