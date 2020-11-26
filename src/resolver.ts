import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MyResolver {
  constructor(
    @Inject(Symbol.for('MagicNumber'))
    private readonly magicNumber: number) {
  }

  @Query('myValue')
  public myValue() {
    return 1.0;
  }
}
