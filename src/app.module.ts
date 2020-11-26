import { Module, Scope } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyResolver } from './resolver'
import { join } from 'path';

const requestScopedProvider = {
      provide: Symbol.for('MagicNumber'),
      useFactory: () => Math.random(),
      scope: Scope.REQUEST,
    };

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MyResolver,
    requestScopedProvider,
  ],
  exports: [requestScopedProvider]
})
export class AppModule {}
