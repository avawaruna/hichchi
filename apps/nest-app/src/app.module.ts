import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CacheModule } from "@test-group/nest-core";
import { redisConfig } from "./core/config";
import { ConnectionOptions, HichchiCrudModule } from "@test-group/nest-crud";
import { UserModule } from "./user/user.module";
import { AuthField, AuthMethod, AuthOptions, HichchiAuthModule, UserServiceProvider } from "@test-group/nest-auth";
import { UserService } from "./user/services";
import { RegisterUserDto } from "./user/dto";
import { DAY_IN_SECONDS, MONTH_IN_SECONDS } from "@test-group/nest-connector";

const authOptions: AuthOptions = {
    redis: {
        host: "localhost",
        port: 6379,
        prefix: "nest-auth",
    },
    jwt: {
        secret: "3cGnEj4Kd1ENr8UcX8fBKrugman7lXmZyJetsam_fo-RcIk",
        expiresIn: DAY_IN_SECONDS,
        refreshSecret: "3cGnEj4Kd1EKIcX8fBKrugman7lXmZyJetsam_fo-RcIk",
        refreshExpiresIn: MONTH_IN_SECONDS,
    },
    authMethod: AuthMethod.JWT,
    authField: AuthField.EMAIL,
    registerDto: RegisterUserDto,
    validationExceptionFactory: true,
};

const connectionOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "dbname",
    charset: "utf8mb4",
    synchronize: true,
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    migrations: ["dist/database/migrations/*{.ts,.js}"],
    legacySpatialSupport: false,
    autoLoadEntities: true,
};

const userServiceProvider: UserServiceProvider = { imports: [UserModule], useExisting: UserService };

@Module({
    imports: [
        CacheModule.register(redisConfig),
        HichchiCrudModule.forRoot(connectionOptions),
        HichchiAuthModule.register(userServiceProvider, authOptions),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
