import { Query, Resolver } from '@nestjs/graphql';
import { DataSource } from 'typeorm';
import { UserEntity } from './users.entity';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly dataSource: DataSource) {}

  @Query(() => [UserEntity], { nullable: true })
  async users() {
    const users = await this.dataSource.getRepository(UserEntity).find({});
    return users;
  }
}