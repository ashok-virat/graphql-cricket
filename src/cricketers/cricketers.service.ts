import { Injectable } from '@nestjs/common';
import { CreatePlayerInput, CreatePlayerResponse, EditPlayerInput } from './cricketers.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cricketers } from './cricketers.entity';

@Injectable()
export class CricketersService {
    constructor(@InjectRepository(Cricketers) private playerEntity: Repository<Cricketers>) { }
    async findAllCricketers(): Promise<CreatePlayerResponse[]> {
        try {
            const data = await this.playerEntity.find()
            return data
        }
        catch (e) {
            return (e)
        }
    }

    async createPlayer(playerInput: CreatePlayerInput): Promise<CreatePlayerResponse> {
        try {
            const data = await this.playerEntity.save(playerInput)
            return data
        }
        catch (e) {
            return e
        }
    }

    async deletePlayer(id: string): Promise<boolean> {
        try {
            const data = await this.playerEntity.delete(id)
            return data.affected > 0
        }
        catch (e) {
            return e
        }
    }

    async getPlayer(id: string): Promise<CreatePlayerResponse> {
        try {
            const data = await this.playerEntity.findOne({ where: { id } })
            return data
        }
        catch (e) {
            return e
        }
    }

    async editPlayer(playerInput: EditPlayerInput): Promise<CreatePlayerResponse> {
        try {
            const player = await this.playerEntity.findOne({ where: { id: playerInput.id } })
            if (!player) {
                throw Error('Id is not valid')
            }
            player.name = playerInput.name || player.name
            player.age = playerInput.age || player.age
            player.batingPosititon = playerInput.batingPosititon || player.batingPosititon
            player.bowlingType = playerInput.bowlingType || player.bowlingType
            player.country = playerInput.country || player.country
            return await this.playerEntity.save(player)
        }
        catch (e) {
            return e
        }
    }
}

