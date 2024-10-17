import { Component, OnInit } from '@angular/core';
import { CittaService } from 'src/app/services/citta.service';
import { Citta } from '../models/citta';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  cittaFavourites: Citta[] = [];

  constructor(private cittaService: CittaService) {

  }

  ngOnInit(): void {
    this.cittaService.cittaFavourites$?.subscribe((cittaList: Citta[]) => {
      this.cittaFavourites = cittaList;
    });
  }
}
