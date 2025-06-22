import { IsNotEmpty } from "class-validator";
import { Dto } from "@test-group/nest-core";
import { RefreshToken, RefreshTokenBody } from "@test-group/nest-connector/auth";

@Dto()
export class RefreshTokenDto implements RefreshTokenBody {
    @IsNotEmpty()
    refreshToken: RefreshToken;
}
