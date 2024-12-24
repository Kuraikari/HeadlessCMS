import { DatabaseModule } from './../database/database.module';
import { UserEntity } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { UserResolver } from './users.resolver';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
  controllers: [UsersController]
})
export class UsersModule {}
