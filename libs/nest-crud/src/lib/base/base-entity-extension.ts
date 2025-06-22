// noinspection JSUnusedGlobalSymbols

import { PrimaryGeneratedColumn } from "typeorm";
import { EntityId, ModelExtension } from "@test-group/nest-connector/crud";

export class BaseEntityExtension implements ModelExtension {
    @PrimaryGeneratedColumn("uuid")
    id: EntityId;
}
