import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KingdomService} from '../../../services/kingdom/kingdom.service';
import { AuthService } from '../../../services/auth/auth.service';

import { Kingdom } from '../../../models/kingdom';

@Component({
  selector: 'app-caserne',
  templateUrl: './caserne.component.html',
  styleUrls: ['./caserne.component.css']
})
export class CaserneComponent implements OnInit {

  kingdom: Kingdom;
  kingdomId: number;

  unites = [{
    name: "Combatant à l'épee",
    off: 7,
    def: 8,
    nb: 56,
    butin: 50
  },{
    name: "Frondeurs",
    off: 17,
    def: 8,
    nb: 26,
    butin: 50
  },{
    name: "Char",
    off: 7,
    def: 18,
    nb: 16,
    butin: 50
  }]

  recru = [0, 0, 0]

  constructor(private route: ActivatedRoute, private kingdomService: KingdomService, private authService: AuthService) { }

  ngOnInit(): void {
    this.kingdomId = +this.route.snapshot.paramMap.get('kingdomId');

    this.kingdomService.getById(this.authService.me(), this.kingdomId)
      .subscribe(
        kingdom => {
          this.kingdom = kingdom;
        },
        err => console.error(err)
      );
  }

  addRecru(key): void {
    this.recru[key]++
  }

  delRecru(key): void {
    if (this.recru[key] > 0) {
      this.recru[key]--
    }
  }

}
