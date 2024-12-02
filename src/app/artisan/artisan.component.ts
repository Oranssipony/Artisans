import { Component, OnInit } from '@angular/core';
import { ARTISANS } from './artisan-list';
import { Artisan } from './artisans';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss',
})
export class ArtisanComponent implements OnInit {
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan | undefined;
  ARTISANS: any[] = [];
  searchtext: any;

  constructor(private router: Router) {}

  goToArtisan(artisan: Artisan) {
    this.router.navigate(['/artisan', artisan.id]);
  }

  getARTISANS(): any[] {
    return this.ARTISANS;
  }

  ngOnInit() {
    console.table(this.artisanList);
  }

  // Pour la recherche d'artisan

  selectArtisan(artisanId: string) {
    const artisan: Artisan | undefined = this.artisanList.find(
      (artisan) => artisan.id == +artisanId
    );
    if (artisan) {
      console.log(`vous avez sélectionné l'artisan ${artisan.name}`);
      this.artisanSelected = artisan;
    } else {
      console.log(`vous avez demandé un artisan qui n'est pas référencé.`);
      this.artisanSelected = artisan;
    }
  }
}
