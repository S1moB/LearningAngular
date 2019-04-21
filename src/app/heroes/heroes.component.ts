import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*hero: Hero = 
  {
    id:1,
    name:"S1moB",
    class:"SuperHero BOSS"
  };*/
  //heroes = HEROES;
  //selectedHero: Hero;
  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();
  }
  
 /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
