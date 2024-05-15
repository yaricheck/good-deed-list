import { Module } from '@nestjs/common';
import { GoodDeedsController } from './goodDeeds.controller';
import { GoodDeedsService } from './goodDeeds.service';

@Module({
  providers: [GoodDeedsService],
  controllers: [GoodDeedsController],
  exports: [GoodDeedsService],
})
export class UserModule {}
