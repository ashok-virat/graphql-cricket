import { Module } from '@nestjs/common';
import { CricketersService } from './cricketers.service';
import { CricketersResolver } from './cricketers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cricketers } from './cricketers.entity';
import { CricketController } from './cricketers.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Cricketers])],
    providers: [CricketersService, CricketersResolver],
    controllers: [CricketController]
})
export class CricketersModule { }
