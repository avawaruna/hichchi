import { IsNotEmpty } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { ResendEmailVerifyBody } from "@test-group/nest-connector/auth";

@Dto()
export class ResendEmailVerifyDto implements ResendEmailVerifyBody {
    @IsNotEmpty()
    email: string;
}
