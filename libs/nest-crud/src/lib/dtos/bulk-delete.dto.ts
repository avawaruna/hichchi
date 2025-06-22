// noinspection JSUnusedGlobalSymbols

import { IsArray, IsNotEmpty, IsUUID } from "class-validator";
import { EntityId } from "@test-group/nest-connector/crud";
import { Dto } from "@test-group/nest-core";
import { BulkDeleteBody } from "@test-group/nest-connector/auth";
import { DEFAULT_UUID_VERSION } from "@test-group/nest-connector";

@Dto()
export class BulkDeleteDto implements BulkDeleteBody {
    @IsUUID(DEFAULT_UUID_VERSION)
    @IsArray()
    @IsNotEmpty()
    ids: EntityId[];
}
