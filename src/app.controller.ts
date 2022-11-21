import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

import { SumDto } from './dto/sum.dto';

import { SubtractDto } from './dto/subtract.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sum')
  async testSum(@Body() SumDto: SumDto) {
    const { numbers } = SumDto;
    const initialValue = 0;
    const sumWithInitial = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    return sumWithInitial;
  }

  // @Post('subtract')
  // async testSubtract(@Body() SumDto: SubtractDto) {
  //   const { numberArray } = SumDto;
  //   const initialValue = 0;
  //   const sumWithInitial = numberArray.reduce(
  //     (accumulator, currentValue) => accumulator - currentValue,
  //     initialValue,
  //   );
  //   return sumWithInitial;
  // }
}
