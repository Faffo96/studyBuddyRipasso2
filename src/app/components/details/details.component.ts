import { Component, OnInit } from '@angular/core';
import { Citta } from '../models/citta';
import { CittaService } from 'src/app/services/citta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  citta?: Citta;

  constructor(private cittaService: CittaService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.citta = this.cittaService.getCitta(id);
  }
}
