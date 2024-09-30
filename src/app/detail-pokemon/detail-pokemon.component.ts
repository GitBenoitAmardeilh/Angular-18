import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../models/mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeColorPipe
  ],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  // Donne un accès à la route courante
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    // snapshot: Récupere la donnée de l'URL à l'instant T
    // paramMap : Liste des paramètres
    const pokemonID: string | null = this.route.snapshot.paramMap.get('id')
    this.pokemonList = POKEMONS;
    if(pokemonID){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonID)
    }

  }

  goToPokemonList(){
    this.router.navigate(['pokemons'])
  }

}
