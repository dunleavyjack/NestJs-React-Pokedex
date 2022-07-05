import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
    constructor(private pokemonService: PokemonService) {}

    @Get(':name')
    getPokemonbyName(@Param('name') name: string): any {
        return this.pokemonService.find(name)
    }
}
