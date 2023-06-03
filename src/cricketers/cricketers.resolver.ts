import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreatePlayerInput, CreatePlayerResponse, EditPlayerInput } from './cricketers.dto';
import { CricketersService } from './cricketers.service';

@Resolver(of => CreatePlayerResponse)
export class CricketersResolver {
    constructor(private cricketersService: CricketersService) { }

    @Query(returns => [CreatePlayerResponse])
    async cricketers(): Promise<CreatePlayerResponse[]> {
        return await this.cricketersService.findAllCricketers();
    }

    @Mutation(() => CreatePlayerResponse)
    async createCricketer(@Args('userInput') playerInput: CreatePlayerInput) {
        return await this.cricketersService.createPlayer(playerInput)
    }

    @Mutation(() => Boolean)
    async deleteCricketer(@Args('id') id: string) {
        return await this.cricketersService.deletePlayer(id)
    }

    @Query(returns => CreatePlayerResponse)
    async getPlayer(@Args('id') id: string): Promise<CreatePlayerResponse> {
        return await this.cricketersService.getPlayer(id);
    }

    @Mutation(() => CreatePlayerResponse)
    async editCricketer(@Args('userInput') playerInput: EditPlayerInput) {
        return await this.cricketersService.editPlayer(playerInput)
    }
}
