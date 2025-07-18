import { BeforeInsert, BeforeUpdate, Column } from "typeorm";
import { BaseEntity } from "./base-entity";
import { UserInfo } from "@test-group/nest-connector";

export class HichchiUserEntity extends BaseEntity implements UserInfo {
    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ nullable: false })
    fullName: string;

    @BeforeInsert()
    @BeforeUpdate()
    beforeInsert?(): void {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
}
