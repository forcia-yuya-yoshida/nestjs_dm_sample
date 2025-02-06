import { Controller, Get } from '@nestjs/common';

@Controller()
export class CompanyAController {
  constructor() {}

  @Get('/')
  getHello(): string {
    return 'i am company A';
  }
}
