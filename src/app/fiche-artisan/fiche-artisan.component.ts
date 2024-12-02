import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTISANS } from '../artisan/artisan-list';
import { Artisan } from '../artisan/artisans';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.scss',
})
export class FicheArtisanComponent implements OnInit {
  artisanList: Artisan[];
  artisan: Artisan | undefined;

  constructor(private route: ActivatedRoute) {}

  // Recherche fiche détail artisan

  ngOnInit() {
    this.artisanList = ARTISANS;
    const artisanId: string | null = this.route.snapshot.paramMap.get('id');

    if (artisanId) {
      this.artisan = this.artisanList.find(
        (artisan) => artisan.id == +artisanId
      );
    } else {
      this.artisan = undefined;
    }
  }
}
