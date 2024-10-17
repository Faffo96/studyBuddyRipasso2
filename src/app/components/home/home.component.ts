import { Component, OnInit } from '@angular/core';
import { Citta } from '../models/citta';
import { CittaService } from 'src/app/services/citta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  citta: Citta[] = [];
  cittaFavourites: Citta[] = []

  constructor(private cittaService: CittaService) {
  }

  ngOnInit(): void {
    /* this.citta = this.cittaService.citta; */

    this.cittaService.citta$?.subscribe((cittaList: Citta[]) => {
      this.citta = cittaList;
    });
  }

  switchVisited(cittaCard: number): void {
    const citta = this.citta.find(item => item.id == cittaCard);
    if (citta) {
      citta.visitata = !citta.visitata;
      this.cittaService.setCitta$(this.citta);
    } else {
      throw new Error("Impossibile cambiare lo stato della card. Id della citta non trovato.")
    }
  }

  addToFavourites(citta: Citta) {
    this.cittaFavourites.push(citta);
    this.cittaService.setCittaFavourites$(this.cittaFavourites);
  }

}
