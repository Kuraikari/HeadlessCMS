import { DataSource } from 'typeorm'
import {Global, Module} from "@nestjs/common";

// database.module.ts
@Global()
@Module({
    imports: [],
    providers: [
        {
            provide: DataSource,
            inject: [],
            useFactory: async () => {
                try {
                    const dataSource = new DataSource({
                        type: 'postgres',
                        host: process.env.DB_HOST,
                        port: +process.env.DB_PORT,
                        username: process.env.DB_USERNAME,
                        password: process.env.DB_PASSWORD,
                        database: process.env.DB_NAME,
                        entities: [__dirname + '/../**/*.entity.{ts,js}'],
                        synchronize: true, // Don’t use this in production without caution
                    })
                    await dataSource.initialize()
                    console.log('Database connected successfully')
                    return dataSource
                } catch (error) {
                    console.log('Error connecting to database')
                    throw error
                }
            }
        }
    ],
    exports: [DataSource]
  })
  export class DatabaseModule {}
  