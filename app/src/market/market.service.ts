import { Injectable } from '@nestjs/common';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Market } from './entities/market.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class MarketService {
  constructor(
    @InjectRepository(Market) private marketRepository: Repository<Market>
  ){}

  create(createMarketDto: CreateMarketDto) {
    const newMarket = this.marketRepository.create(createMarketDto);
    return this.marketRepository.save(newMarket)
  }

  findAll(): Promise<Market[]> {
    return this.marketRepository.find();
  }

  findOne(id: string): Promise<Market | null> {
    return this.marketRepository.findOneBy({id});
  }

  async update(id: string, updateMarketDto: UpdateMarketDto): Promise<Market | null> {
    const market = await this.marketRepository.findOneBy({id});
    
    if(market){
      Object.assign(market, updateMarketDto)

      return this.marketRepository.save(market);
    }

    return market
  }

  remove(id: string): Promise<DeleteResult> {
    return this.marketRepository.delete(id);
  }
}
