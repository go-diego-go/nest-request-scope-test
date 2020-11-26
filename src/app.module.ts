import { Module, Scope } from '@nestjs/common';
import { AppService } from './app.service';

const requestScopedProvider = {
      provide: Symbol.for('MagicNumber'),
      useFactory: () => Math.random(),
      scope: Scope.REQUEST,
    };

@Module({
  providers: [
    AppService,
    requestScopedProvider,
  ],
  exports: [requestScopedProvider]
})
export class AppModule {}
