import { Controller, Get, Param } from '@nestjs/common';
import { CreatePlayerResponse } from './cricketers.dto';
import { CricketersService } from './cricketers.service';

@Controller('cricketers')
export class CricketController {
    constructor(private readonly cricketersService: CricketersService) { }

    @Get('all')
    getCricketers(): Promise<CreatePlayerResponse[]> {
        return this.cricketersService.findAllCricketers();
    }

    @Get('player/:id')
    getCricketer(@Param('id') id: string): Promise<CreatePlayerResponse> {
        return this.cricketersService.getPlayer(id);
    }
}
