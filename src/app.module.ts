import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CricketersModule } from './cricketers/cricketers.module';
const { join } = require('path');
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
    CricketersModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    this.testDatabaseConnection();
  }

  async testDatabaseConnection() {
    try {
      await TypeOrmModule.forRoot(); // Establish the connection
      console.log('Database connection established!');
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  }


}
