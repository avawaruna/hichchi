import { Module } from "@nestjs/common";
import { HichchiCrudModule } from "@test-group/nest-crud";
import { AddressEntity, UserEntity } from "./entities";
import { UserService } from "./services";
import { UserRepository } from "./repositories";
import { UserController } from "./controllers";

@Module({
    imports: [HichchiCrudModule.forFeature([UserEntity, AddressEntity])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository],
})
export class UserModule {}
