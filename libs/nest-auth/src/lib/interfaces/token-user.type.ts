import { User, UserSession } from "@test-group/nest-connector/auth";
import { UserExtra } from "./user-extra.interfaces";

export interface TokenUser extends User, UserExtra, UserSession {}
