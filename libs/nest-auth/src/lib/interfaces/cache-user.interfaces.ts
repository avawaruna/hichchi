import { User, UserSession } from "@test-group/nest-connector/auth";
import { UserExtra } from "./user-extra.interfaces";

export interface CacheUser extends User, UserExtra {
    sessions: UserSession[];
    encryptedSessions?: string;
}
