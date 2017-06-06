import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { DashboardComponent } from './dashboard.component.js'


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashbaord',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
