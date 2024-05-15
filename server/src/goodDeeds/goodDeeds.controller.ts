import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { GoodDeedsService } from './goodDeeds.service';
import { GoodDeed } from './goodDeeds.entity';

@Controller('goodDeeds')
export class GoodDeedsController {
  constructor(private readonly goodDeedsService: GoodDeedsService) {}

  @Post()
  create(@Body() goodDeed: GoodDeed): GoodDeed {
    return this.goodDeedsService.create(goodDeed);
  }

  @Get()
  findAll(): GoodDeed[] {
    return this.goodDeedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): GoodDeed {
    return this.goodDeedsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedGoodDeed: GoodDeed): GoodDeed {
    return this.goodDeedsService.update(id, updatedGoodDeed);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.goodDeedsService.remove(id);
  }
}
