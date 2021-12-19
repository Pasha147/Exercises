import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero:Hero={
    id:1,
    name:'Windstorm'
  }

  selectedHero?:Hero;
  onSelect(hero: Hero):void{
    this.selectedHero=hero
  }

  // heroes=HEROES
  heroes: Hero[] = []
  getHeroes():void{
    // this.heroes=this.heroService.getHeroes()
  this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }


}