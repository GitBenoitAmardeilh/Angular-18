import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../models/mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../directives/border-card.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe,
    BorderCardDirective
  ],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(
    private router: Router
  ){}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['pokemons', pokemon.id])
  }

}
