import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemonDetails: object

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit(): void {
    this.getPokemonDetail()
  }

  getPokemonDetail(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id')
    this.pokemonService.getPokemonDetail(pokemonId)
      .subscribe(pokemonDetails => {
        console.log(pokemonDetails)
        this.pokemonDetails = pokemonDetails
      })
  }

}
