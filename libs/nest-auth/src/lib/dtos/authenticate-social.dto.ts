import { IsNotEmpty } from "class-validator";
import { AccessToken } from "@test-group/nest-connector/auth";

export class AuthenticateSocialDto {
    @IsNotEmpty()
    accessToken: AccessToken;
}
