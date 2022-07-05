import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class PokemonService {
    constructor(private httpService: HttpService) {}

    find(name: string): Observable<AxiosResponse<any>> {
        return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
            map(response => response.data)
        )
    }
}
