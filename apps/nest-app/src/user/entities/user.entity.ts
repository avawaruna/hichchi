import { Column } from "typeorm";
import { HichchiEntity, HichchiUserEntity, USER_ENTITY_TABLE_NAME } from "@test-group/nest-crud";
import { RegType, User } from "@test-group/nest-connector/auth";

@HichchiEntity(USER_ENTITY_TABLE_NAME, ["email"])
export class UserEntity extends HichchiUserEntity implements User {
    @Column({ nullable: false })
    email: string;

    @Column({ nullable: true })
    username: string;

    @Column({ nullable: true })
    password?: string;

    @Column({ default: false })
    emailVerified: boolean;

    @Column({ nullable: true })
    avatar?: string;

    @Column({ type: "json", nullable: true })
    profileData?: object;

    @Column({ type: "enum", enum: RegType, nullable: false })
    regType: RegType;

    // TODO: Implement role both enum and entity
    // @Column({ nullable: true })
    // role?: IRoleEntity;
}
