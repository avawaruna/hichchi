// noinspection JSUnusedGlobalSymbols

import { RegType, User } from "@test-group/nest-connector/auth";
import { EntityId } from "@test-group/nest-connector/crud";

export class BaseUserEntity implements User {
    regType: RegType;

    id: EntityId;

    firstName: string;

    lastName: string;

    fullName: string;

    username?: string;

    email?: string;

    password: string;

    salt: string;

    role?: string;

    emailVerified?: boolean;

    avatar?: string;

    profileData?: object;
}
