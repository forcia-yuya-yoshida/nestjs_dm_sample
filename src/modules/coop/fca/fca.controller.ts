import { Controller, Get } from '@nestjs/common';

@Controller()
export class FCAController {
  constructor() {}

  @Get('/')
  getHello(): string {
    return 'i am fca';
  }
}
