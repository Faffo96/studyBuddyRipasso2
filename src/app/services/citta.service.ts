import { Injectable } from '@angular/core';
import { Citta } from '../components/models/citta';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CittaService {
  citta: Citta[] = [
    {
      id: 1,
      nome: 'Roma',
      descrizione: 'Capitale d\'Italia, conosciuta per la sua ricca storia e i monumenti come il Colosseo e il Vaticano.',
      img: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/14/16814863035657.jpg',
      visitata: true,
    },
    {
      id: 2,
      nome: 'Parigi',
      descrizione: 'La città dell\'amore, famosa per la Torre Eiffel, il Louvre e la sua cucina raffinata.',
      img: 'http://appuntidiviaggio.sevendays.biz/wp-content/uploads/44288531_xl.jpg',
      visitata: false,
    },
    {
      id: 3,
      nome: 'New York',
      descrizione: 'La città che non dorme mai, conosciuta per la Statua della Libertà, Times Square e Central Park.',
      img: 'https://th.bing.com/th/id/OIP.1LlS8eTqn9gOZScV_vfH4AHaEK?rs=1&pid=ImgDetMain',
      visitata: false,
    },
    {
      id: 4,
      nome: 'Tokyo',
      descrizione: 'Una metropoli futuristica, famosa per la tecnologia avanzata e il contrasto con la cultura tradizionale giapponese.',
      img: 'https://images.ctfassets.net/bth3mlrehms2/2cCxpmVnFuv9cwMkr2NsqO/0f41647ab438ea7efa23b0d260123a50/Japan_Tokio_Skyline_und_Mt._Fuji.jpg?w=1920&h=1080&fl=progressive&q=50&fm=jpg',
      visitata: true,
    },
    {
      id: 5,
      nome: 'Sydney',
      descrizione: 'La più grande città australiana, nota per l\'Opera House e la sua spettacolare baia.',
      img: 'https://i.pinimg.com/originals/68/9b/51/689b51a89c70107ce0abd69d8e6e530c.jpg',
      visitata: false,
    }
  ];
  cittaFavourites: Citta[] = [];

  citta$ = new BehaviorSubject<Citta[]>([]);
  cittaFavourites$ = new BehaviorSubject<Citta[]>([]);

  constructor() {
    this.setCitta$(this.citta)
   }



   

  public setCitta$(citta:Citta[]) {
    this.citta$?.next(citta)
  }

  public getCitta(id: number) {
    return this.citta.find(item => item.id === id);
  }
  
  public setCittaFavourites$(citta:Citta[]) {
    this.cittaFavourites$?.next(citta)
  }
}
