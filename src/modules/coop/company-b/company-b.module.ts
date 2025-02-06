import { DynamicModule, Module } from '@nestjs/common';
import { CompanyBController } from './company-b.controller';

@Module({})
export class CompanyBModule {
  static register(): DynamicModule {
    return {
      module: CompanyBModule,
      imports: [],
      controllers: [CompanyBController],
      providers: [],
    };
  }
}
