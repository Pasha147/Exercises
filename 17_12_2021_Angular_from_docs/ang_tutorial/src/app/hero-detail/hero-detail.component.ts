import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
// @Input() hero?:Hero;
hero:Hero | undefined  
constructor(
    private route: ActivatedRoute, 
    private heroService: HeroService, 
    private location: Location,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getHero()
  }
getHero():void{
  const id=Number(this.route.snapshot.paramMap.get('id'))
this.heroService.getHero(id).subscribe(hero=>this.hero=hero)
}
goBack():void{
//  class ro =  Router
  // this.location.back()
  // let router: Router = new Router
  // router.navigateByUrl('/')
  this.router.navigateByUrl('/')
 
  
}

save():void{
  if(this.hero){
    this.heroService.updateHero(this.hero).subscribe(()=>this.goBack())
  }
}

}
