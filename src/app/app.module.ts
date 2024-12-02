import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { FooterComponent } from './footer/footer.component';
import { MentionsComponent } from './mentions/mentions.component';
import { DonneesComponent } from './donnees/donnees.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { BorderCardDirective } from './border-card.directive';
import { Page404Component } from './page-404/page-404.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BatimentComponent,
    ServicesComponent,
    FabricationComponent,
    AlimentationComponent,
    FooterComponent,
    MentionsComponent,
    DonneesComponent,
    AccessibiliteComponent,
    CookiesComponent,
    ArtisanComponent,
    FicheArtisanComponent,
    BorderCardDirective,
    Page404Component,
    FormulaireComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
