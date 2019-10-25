import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero-service.service';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {
  title = 'Top Heroes';
  private heroesToDisplay = [];
  private errorMessage;
  
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
        .subscribe(
          heroes => {
              this.heroesToDisplay = heroes.splice(0,4);
          },
          error => this.errorMessage = <any>error
        );
  }
}