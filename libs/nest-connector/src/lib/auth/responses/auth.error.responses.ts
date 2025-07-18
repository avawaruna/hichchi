import { AuthErrorResponseCode } from "../enums";
import { ErrorResponse } from "../../common/interfaces";
import { HttpClientErrorStatus as ClientError, HttpServerErrorStatus as ServerError } from "../../common/enums";

const AuthErrors: { [key in AuthErrorResponseCode]: ErrorResponse } = {
    [AuthErrorResponseCode.AUTH_400_EMAIL_ALREADY_VERIFIED]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.AUTH_400_EMAIL_ALREADY_VERIFIED,
        message: "Email already verified!",
    },
    [AuthErrorResponseCode.AUTH_400_REDIRECT_URL_REQUIRED]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.AUTH_400_REDIRECT_URL_REQUIRED,
        message: "Redirect URL is required",
        description: "Redirect URL is required",
    },
    [AuthErrorResponseCode.AUTH_401_CORS]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_CORS,
        message: "Access blocked by CORS!",
    },
    [AuthErrorResponseCode.AUTH_401_INVALID_USERNAME_PASSWORD]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_INVALID_USERNAME_PASSWORD,
        message: "Invalid username or password!",
    },
    [AuthErrorResponseCode.AUTH_401_INVALID_EMAIL_PASSWORD]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_INVALID_EMAIL_PASSWORD,
        message: "Invalid e-mail or password!",
    },
    [AuthErrorResponseCode.AUTH_401_INVALID_PASSWORD]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_INVALID_PASSWORD,
        message: "Invalid password!",
    },
    [AuthErrorResponseCode.AUTH_401_NOT_LOGGED_IN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_NOT_LOGGED_IN,
        message: "User must be logged in to access this resource!",
    },
    [AuthErrorResponseCode.AUTH_401_NOT_LOCAL]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_NOT_LOCAL,
        message: "Cannot login with password for accounts registered with social media!",
    },
    [AuthErrorResponseCode.AUTH_401_SOCIAL_LOGIN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_SOCIAL_LOGIN,
        message: "Cannot login with social media account!",
    },
    [AuthErrorResponseCode.AUTH_401_EMAIL_NOT_VERIFIED]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_EMAIL_NOT_VERIFIED,
        message: "User e-mail not verified!",
    },
    [AuthErrorResponseCode.AUTH_401_NOT_ACTIVE]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_NOT_ACTIVE,
        message: "Your account has been disabled. Contact us if you think this is a mistake!",
    },
    [AuthErrorResponseCode.AUTH_401_TOKEN_NOT_SET]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_TOKEN_NOT_SET,
        message: "Cannot find a token!",
    },
    [AuthErrorResponseCode.AUTH_401_REFRESH_TOKEN_NOT_SET]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_REFRESH_TOKEN_NOT_SET,
        message: "Cannot find a refresh token!",
    },
    [AuthErrorResponseCode.AUTH_401_INVALID_TOKEN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_INVALID_TOKEN,
        message: "Invalid token received!",
    },
    [AuthErrorResponseCode.AUTH_401_EXPIRED_TOKEN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_EXPIRED_TOKEN,
        message: "Expired token received!",
    },
    [AuthErrorResponseCode.AUTH_401_INVALID_VERIFICATION_TOKEN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_INVALID_VERIFICATION_TOKEN,
        message: "Invalid or expired verification token received!",
    },
    [AuthErrorResponseCode.AUTH_401_INVALID_PASSWORD_RESET_TOKEN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_INVALID_PASSWORD_RESET_TOKEN,
        message: "Invalid or expired password reset token token received!",
    },
    [AuthErrorResponseCode.AUTH_401_INVALID_REFRESH_TOKEN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_INVALID_REFRESH_TOKEN,
        message: "Invalid refresh token received!",
    },
    [AuthErrorResponseCode.AUTH_401_EXPIRED_REFRESH_TOKEN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_EXPIRED_REFRESH_TOKEN,
        message: "Expired refresh token received!",
    },
    [AuthErrorResponseCode.AUTH_401_EXPIRED_OR_INVALID_PASSWORD_RESET_TOKEN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_EXPIRED_OR_INVALID_PASSWORD_RESET_TOKEN,
        message: "Expired or invalid password reset token received!",
    },
    [AuthErrorResponseCode.AUTH_401_UNKNOWN]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_401_UNKNOWN,
        message: "Unknown error occurred!",
    },
    [AuthErrorResponseCode.AUTH_403_PENDING]: {
        statusCode: ClientError.UNAUTHORIZED,
        code: AuthErrorResponseCode.AUTH_403_PENDING,
        message:
            "Please verify your e-mail address to continue. If you didn't receive the email you can click " +
            "the resend verification button to receive it again!",
    },
    [AuthErrorResponseCode.AUTH_403_ACCOUNT_DISABLED]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.AUTH_403_ACCOUNT_DISABLED,
        message: "Account disabled!",
    },
    [AuthErrorResponseCode.AUTH_403_ROLE_FORBIDDEN]: {
        statusCode: ClientError.FORBIDDEN,
        code: AuthErrorResponseCode.AUTH_403_ROLE_FORBIDDEN,
        message: "You don't have privileges to access this resource!",
    },
    [AuthErrorResponseCode.AUTH_404_EMAIL]: {
        statusCode: ClientError.NOT_FOUND,
        code: AuthErrorResponseCode.AUTH_404_EMAIL,
        message: "Cannot find a user account with this e-mail!",
    },
    [AuthErrorResponseCode.AUTH_500_REGISTER]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_REGISTER,
        message: "Error occurred while registering!",
    },
    [AuthErrorResponseCode.AUTH_500_REGISTER_SOCIAL]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_REGISTER_SOCIAL,
        message: "Error occurred while registering with social media account!",
    },
    [AuthErrorResponseCode.AUTH_500_LOGIN]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_LOGIN,
        message: "Error occurred while logging in!",
    },
    [AuthErrorResponseCode.AUTH_500_SOCIAL_LOGIN]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_SOCIAL_LOGIN,
        message: "Error occurred while logging in with social media account!",
    },
    [AuthErrorResponseCode.AUTH_500_SOCIAL_LOGIN_CALLBACK]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_SOCIAL_LOGIN_CALLBACK,
        message: "Error occurred while logging in with social media account!",
    },
    [AuthErrorResponseCode.AUTH_500_SEND_EMAIL_VERIFICATION]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_SEND_EMAIL_VERIFICATION,
        message: "Error occurred while sending email verification!",
    },
    [AuthErrorResponseCode.AUTH_500_VERIFY_EMAIL]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_VERIFY_EMAIL,
        message: "Error occurred while verifying email!",
    },
    [AuthErrorResponseCode.AUTH_500_REQUEST_PASSWORD_RESET]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_REQUEST_PASSWORD_RESET,
        message: "Error occurred while requesting password reset!",
    },
    [AuthErrorResponseCode.AUTH_500_PASSWORD_RESET]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500_PASSWORD_RESET,
        message: "Error occurred while resetting password!",
    },
    [AuthErrorResponseCode.AUTH_500]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.AUTH_500,
        message: "Error occurred!",
    },
    [AuthErrorResponseCode.AUTH_501_NOT_IMPLEMENTED]: {
        statusCode: ServerError.NOT_IMPLEMENTED,
        code: AuthErrorResponseCode.AUTH_501_NOT_IMPLEMENTED,
        message: "API Not implemented!",
    },
    [AuthErrorResponseCode.USER_400_EMPTY_EMAIL]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_EMPTY_EMAIL,
        message: "Email cannot be empty!",
    },
    [AuthErrorResponseCode.USER_400_EMPTY_FNAME]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_EMPTY_FNAME,
        message: "User first name cannot be empty!",
    },
    [AuthErrorResponseCode.USER_400_EMPTY_LNAME]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_EMPTY_LNAME,
        message: "User last name cannot be empty!",
    },
    [AuthErrorResponseCode.USER_400_EMPTY_UNAME]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_EMPTY_UNAME,
        message: "User username cannot be empty!",
    },
    [AuthErrorResponseCode.USER_400_EMPTY_PASSWORD]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_EMPTY_PASSWORD,
        message: "User password cannot be empty!",
    },
    [AuthErrorResponseCode.USER_400_INVALID_EMAIL]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_INVALID_EMAIL,
        message: "Invalid e-mail address!",
    },
    [AuthErrorResponseCode.USER_400_NOT_EMPTY_UNAME]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_NOT_EMPTY_UNAME,
        message: "User username cannot be updated!",
    },
    [AuthErrorResponseCode.USER_400_NOT_EMPTY_PASSWORD]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_NOT_EMPTY_PASSWORD,
        message: "User password cannot be updated!",
    },
    [AuthErrorResponseCode.USER_400_NOT_EMPTY_SALT]: {
        statusCode: ClientError.BAD_REQUEST,
        code: AuthErrorResponseCode.USER_400_NOT_EMPTY_SALT,
        message: "User salt cannot be inserted/updated!",
    },
    [AuthErrorResponseCode.USER_403_REGISTER]: {
        statusCode: ClientError.FORBIDDEN,
        code: AuthErrorResponseCode.USER_403_REGISTER,
        message: "User registration is disabled!",
    },
    [AuthErrorResponseCode.USER_404]: {
        statusCode: ClientError.NOT_FOUND,
        code: AuthErrorResponseCode.USER_404,
        message: "Cannot find a user with given id!",
    },
    [AuthErrorResponseCode.USER_409_EXIST_UNAME]: {
        statusCode: ClientError.CONFLICT,
        code: AuthErrorResponseCode.USER_409_EXIST_UNAME,
        message: "User with given username already exist!",
    },
    [AuthErrorResponseCode.USER_500_CREATE]: {
        statusCode: ServerError.INTERNAL_SERVER_ERROR,
        code: AuthErrorResponseCode.USER_500_CREATE,
        message: "Error occurred while creating user!",
    },
};

export { AuthErrors };
