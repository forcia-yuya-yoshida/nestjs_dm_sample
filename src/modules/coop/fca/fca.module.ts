import { DynamicModule, Module } from '@nestjs/common';
import { FCAController } from './fca.controller';

@Module({})
export class FCAModule {
  static register(): DynamicModule {
    return {
      module: FCAModule,
      imports: [],
      controllers: [FCAController],
      providers: [],
    };
  }
}
