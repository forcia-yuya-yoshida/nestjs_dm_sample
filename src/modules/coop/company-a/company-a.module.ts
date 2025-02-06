import { DynamicModule, Module } from '@nestjs/common';
import { CompanyAController } from './company-a.controller';

@Module({})
export class CompanyAModule {
  static register(): DynamicModule {
    return {
      module: CompanyAModule,
      imports: [],
      controllers: [CompanyAController],
      providers: [],
    };
  }
}
