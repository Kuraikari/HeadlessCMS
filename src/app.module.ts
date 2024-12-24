import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        // Load .env variables
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
          }),

        // Configure GraphQL
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            sortSchema: true,
        }),

        // Import other modules (database, feature modules, etc.)
        DatabaseModule,
        UsersModule,
        // ContentModule,
        // AuthModule,
    ],
    providers: [AppService],
    controllers: [AppController]
})
export class AppModule { }
