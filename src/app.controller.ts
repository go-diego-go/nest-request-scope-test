import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject(Symbol.for('MagicNumber'))
    private readonly magicNumber: number
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
