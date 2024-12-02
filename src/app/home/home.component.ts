import { Component, OnInit } from '@angular/core';
import { ARTISANS } from '../artisan/artisan-list';
import { Artisan } from '../artisan/artisans';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan | undefined;
  ARTISANS: any[] = [];
  
constructor(private router: Router) {}

goToArtisan(artisan: Artisan) {
  this.router.navigate(['/artisan', artisan.id]);
}

getARTISANS(): any[] {
  return this.ARTISANS;
}
  ngOnInit() {
    this.artisanList = ARTISANS.filter(
      (Artisan: { top: boolean }) => Artisan.top === true
    );
  }
}
