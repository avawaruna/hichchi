import { LooseAutocomplete } from "@test-group/utils";
import { AuthErrorResponseCode, AuthSuccessResponseCode } from "../../auth/";
import { CommonSuccessResponseCode } from "../enums";

export type ResponseCode = LooseAutocomplete<
    CommonSuccessResponseCode | AuthSuccessResponseCode | AuthErrorResponseCode
>;

export type SuccessResponseCode = LooseAutocomplete<CommonSuccessResponseCode | AuthSuccessResponseCode>;

export type ErrorResponseCode = LooseAutocomplete<AuthErrorResponseCode>;
