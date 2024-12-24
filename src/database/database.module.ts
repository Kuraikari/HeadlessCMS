import { UserEntity } from './../users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm'
import {Global, Module} from "@nestjs/common";

// database.module.ts
@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/../**/*.entity.{ts,js}', UserEntity],
            synchronize: true, // Don’t use this in production without caution
        })
    ],
  })
  export class DatabaseModule {}
  