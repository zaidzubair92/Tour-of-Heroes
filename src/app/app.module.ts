import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopNavMenuComponent } from './components/top-nav-menu/top-nav-menu.component';
import { TopHeroesComponent } from './components/top-heroes/top-heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopNavMenuComponent,
    TopHeroesComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TopHeroesComponent },
      { path: 'heroes', component: HeroListComponent },
      { path: 'edit/:heroId', component: HeroDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
