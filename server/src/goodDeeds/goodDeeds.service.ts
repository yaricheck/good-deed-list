import { Injectable } from '@nestjs/common';
import { GoodDeed } from './goodDeeds.entity';

@Injectable()
export class GoodDeedsService {
  private GoodDeeds: GoodDeed[] = [];

  create(GoodDeed: GoodDeed): GoodDeed {
    this.GoodDeeds.push(GoodDeed);
    return GoodDeed;
  }

  findAll(): GoodDeed[] {
    return this.GoodDeeds;
  }

  findOne(id: number): GoodDeed {
    return this.GoodDeeds.find((GoodDeed) => GoodDeed.id === id);
  }

  update(id: number, updatedGoodDeed: GoodDeed): GoodDeed {
    let GoodDeed = this.GoodDeeds.find((GoodDeed) => GoodDeed.id === id);
    if (GoodDeed) {
      GoodDeed = { ...GoodDeed, ...updatedGoodDeed };
    }
    return GoodDeed;
  }

  remove(id: number): void {
    this.GoodDeeds = this.GoodDeeds.filter((GoodDeed) => GoodDeed.id !== id);
  }
}
