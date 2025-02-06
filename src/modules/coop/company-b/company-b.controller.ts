import { Controller, Get } from '@nestjs/common';

@Controller()
export class CompanyBController {
  constructor() {}

  @Get('/')
  getHello(): string {
    return 'i am company B';
  }

  @Get('/wowow')
  getCompanyA(): string {
    return 'wowow';
  }
}
