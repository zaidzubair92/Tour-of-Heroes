import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes = [];
  private hero;
  private _url = "/assets/data/heroes.json";

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this._url);
  }
  
  findHeroForId(heroId:string){
      this.getHeroes()
      .subscribe(heroes => {
        heroes
        .find(hero => {
          if(hero.id == heroId) {
            this.hero = hero;
          }
        }
      );
    });
    return this.hero;
  }

  saveUpdatedHero(updatedHeroName: any, updatedHeroId: any) {
    this.getHeroes().subscribe(data => this.heroes = data);
    this.heroes.find(hero => {
      if(hero.id == updatedHeroId){
        hero.name = updatedHeroName;
      }
    });

    console.log(this.heroes);
  }
}
