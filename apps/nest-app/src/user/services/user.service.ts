import { CrudService } from "@test-group/nest-crud";
import { GoogleProfile, IUserService } from "@test-group/nest-auth";
import { RegType, User, VerifyToken } from "@test-group/nest-connector/auth";
import { UserEntity } from "../entities";
import { UserRepository } from "../repositories";
import { RegisterUserDto } from "../dto";
import { EntityId } from "@test-group/nest-connector/crud";
import { LoggerService } from "@test-group/nest-core";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService extends CrudService<UserEntity> implements IUserService {
    constructor(readonly userRepository: UserRepository) {
        super(userRepository);
    }

    getUserById(id: EntityId): Promise<User | null> {
        return this.get(id);
    }

    getUserByEmail(email: string): Promise<UserEntity | null> {
        return this.getOne({ where: { email } });
    }

    getUserByAuthField(authFieldValue: EntityId): Promise<UserEntity | null> {
        return this.getOne({ where: { id: authFieldValue } });
    }

    getUserByUsername(username: string): Promise<UserEntity | null> {
        return this.getOne({ where: { username } });
    }

    getUserByUsernameOrEmail(username: string): Promise<UserEntity | null> {
        return this.getOne({ where: [{ username }, { email: username }] });
    }

    sendPasswordResetEmail(email: string, token: VerifyToken): Promise<boolean> {
        LoggerService.log(`Sending password reset email to ${email} with token: ${token}`);
        return Promise.resolve(false);
    }

    sendVerificationEmail(userId: EntityId, token: VerifyToken): Promise<boolean> {
        LoggerService.log(`Sending verification email to user with id: ${userId} with token: ${token}`);
        return Promise.resolve(false);
    }

    registerUser(userDto: RegisterUserDto, regType: RegType, profileData?: GoogleProfile): Promise<User> {
        return this.save({ ...userDto, regType, profileData });
    }

    updateUserById(id: EntityId, userDto: Partial<User>): Promise<User> {
        return this.update(id, { password: userDto.password });
    }
}
