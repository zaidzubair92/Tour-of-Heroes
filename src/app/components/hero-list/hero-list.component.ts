import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero-service.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  private heroes = [];
  private hero;
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
        .subscribe(data => this.heroes = data);
    this.hero = null;
  }

  setHeroName(hero){
    this.hero = hero;
  }

  getHeroName(){
    return this.hero;
  }
}
