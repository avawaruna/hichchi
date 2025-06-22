import { Request } from "express";
import { RegType, User, VerifyToken } from "@test-group/nest-connector/auth";
import { GoogleProfile } from "./google-profile.interface";
import { EntityId } from "@test-group/nest-connector/crud";
import { TokenUser } from "./token-user.type";

export interface UserServiceEvents {
    onRegister?(request: Request, userId?: EntityId, error?: unknown): Promise<void>;
    onResendVerificationEmail?(request: Request, userId: EntityId): Promise<void>;
    onVerifyEmail?(request: Request, userId: EntityId, status: boolean): Promise<void>;
    onLogin?(request: Request, tokenUser?: TokenUser, error?: Error): Promise<void>;
    onRefreshTokens?(request: Request, tokenUser?: TokenUser): Promise<void>;
    onGetCurrentUser?(request: Request, tokenUser?: TokenUser, error?: Error): Promise<void>;
    onChangePassword?(request: Request, tokenUser?: TokenUser, error?: Error): Promise<void>;
    onRequestPasswordReset?(request: Request, userId?: EntityId): Promise<void>;
    onVerifyResetPasswordToken?(request: Request, userId?: EntityId): Promise<void>;
    onResetPassword?(request: Request, userId?: EntityId): Promise<void>;
    onLogout?(request: Request, tokenUser?: TokenUser, error?: Error): Promise<void>;
    onAuthenticate?(request: Request, tokenUser?: TokenUser, error?: unknown): Promise<void>;
    onAuthenticateJWT?(request: Request, tokenUser?: TokenUser, error?: unknown): Promise<void>;
    onAuthenticateGoogle?(request: Request, tokenUser?: TokenUser, error?: unknown): Promise<void>;
    onGetUserByToken?(request: Request, userId?: EntityId, error?: unknown): Promise<void>;
}

export interface IUserService extends UserServiceEvents {
    getUserById(id: EntityId, subdomain?: string): Promise<User | null>;
    getUserByEmail(email: string, subdomain?: string): Promise<(User & { email: string }) | null>;
    getUserByUsername?(username: string, subdomain?: string): Promise<(User & { username: string }) | null>;
    getUserByUsernameOrEmail?(
        username: string,
        subdomain?: string,
    ): Promise<(User & { email: string; username: string }) | null>;
    getUserByAuthField?(authFieldValue: string | number, subdomain?: string): Promise<User | null>;
    registerUser(userDto: Partial<User>, regType: RegType, profile?: GoogleProfile): Promise<User>;
    updateUserById(id: EntityId, userDto: Partial<User>, updatedBy: User): Promise<User>;
    sendPasswordResetEmail?(email: string, token: VerifyToken, subdomain?: string): Promise<boolean>;
    sendVerificationEmail?(userId: EntityId, token: VerifyToken, subdomain?: string): Promise<boolean>;
}
