import { ErrorResponse } from "@test-group/nest-connector";

export interface HttpError {
    status: number;
    message: string;
    error?: ErrorResponse;
}
