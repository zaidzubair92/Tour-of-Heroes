import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero-service.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero;
  heroes:Hero[];
  heroName;
  constructor(private route: ActivatedRoute, 
    private heroService : HeroService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hero = this.heroService.findHeroForId(JSON.parse(params.heroId.toString()));
    });
    this.heroName = this.hero.name;
  }

  onNameChange(searchValue: string): string {  
    this.heroName = searchValue;
    return this.heroName;
  }

  saveNewName(updatedHeroName, updatedHeroId) {
    this.heroService.saveUpdatedHero(updatedHeroName, updatedHeroId);
  }
}
