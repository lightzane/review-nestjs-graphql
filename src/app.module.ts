import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // autoSchemaFile: 'src/shared/graphql/schema.gql',
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: true,
      introspection: true
    }),
    QuestionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
