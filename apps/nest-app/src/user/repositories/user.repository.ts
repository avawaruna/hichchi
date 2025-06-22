import { UserEntity } from "../entities";
import { BaseRepository, HichchiRepository, Repository, InjectRepository } from "@test-group/nest-crud";

@HichchiRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {
    constructor(@InjectRepository(UserEntity) repository: Repository<UserEntity>) {
        super(repository);
    }
}
