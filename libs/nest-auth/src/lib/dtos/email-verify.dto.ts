import { IsNotEmpty } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { EmailVerifyBody, VerifyToken } from "@test-group/nest-connector/auth";

@Dto()
export class EmailVerifyDto implements EmailVerifyBody {
    @IsNotEmpty()
    token: VerifyToken;
}
