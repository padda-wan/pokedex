import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service'
import { AllPokemonResponse } from '../pokemon.service'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [
    PokemonService,
  ]
})
export class PokemonListComponent implements OnInit {

  public CurrentPokemonList: object;
  public NextUrl: string;
  public PreviousUrl: string;

  constructor( private pokemonService: PokemonService ) {}

  populateData(data: AllPokemonResponse) {

    this.CurrentPokemonList = data.results.map(obj => {
      obj.id = obj.url.split('/')[6]
      return obj
    })
    this.NextUrl = data.next
    this.PreviousUrl = data.previous
  }

  showPokemon() {
    this.pokemonService.getPokemon()
      .subscribe((data: AllPokemonResponse) => this.populateData(data));
  }

  showNextPokemon() {
    this.pokemonService.getPokemon(this.NextUrl)
      .subscribe((data: AllPokemonResponse) => this.populateData(data));
  }

  showPreviousPokemon() {
    this.pokemonService.getPokemon(this.PreviousUrl)
      .subscribe((data: AllPokemonResponse) => this.populateData(data));
  }

  ngOnInit(): void {
    this.showPokemon();
  }

}
