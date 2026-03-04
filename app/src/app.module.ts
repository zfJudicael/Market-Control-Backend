import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketModule } from './market/market.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from './market/entities/market.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'database',
      entities: [Market],
      synchronize: true,
    }),
    MarketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
