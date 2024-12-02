import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { MentionsComponent } from './mentions/mentions.component';
import { DonneesComponent } from './donnees/donnees.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'batiment', component: BatimentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'fabrication', component: FabricationComponent },
  { path: 'alimentation', component: AlimentationComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'donnees', component: DonneesComponent },
  { path: 'accessibilite', component: AccessibiliteComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'artisan/:id', component: FicheArtisanComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
