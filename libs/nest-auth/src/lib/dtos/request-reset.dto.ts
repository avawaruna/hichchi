import { IsNotEmpty } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { RequestResetBody } from "@test-group/nest-connector/auth";

@Dto()
export class RequestResetDto implements RequestResetBody {
    @IsNotEmpty()
    email: string;
}
