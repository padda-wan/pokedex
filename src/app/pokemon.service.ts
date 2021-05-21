import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface AllPokemonResponse {
  count: number
  next: string
  previous: string
  results: Pokemon[]
}

interface Pokemon {
  name: string
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public defaultUrl: string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) {}

  getPokemon(url?: string) {
    debugger
    if (url){
      return this.http.get<AllPokemonResponse>(url);
    }
    if (!url){
      return this.http.get<AllPokemonResponse>(this.defaultUrl);
    }
  }
  
}
