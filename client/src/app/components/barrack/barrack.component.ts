import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RessourceService } from '../../services/ressource/ressource.service';
import { BarrackService } from '../../services/barrack/barrack.service';

import { Ressource } from '../../models/ressource';
import { Unit } from 'src/app/models/unit';

@Component({
  selector: 'app-barrack',
  templateUrl: './barrack.component.html',
  styleUrls: ['./barrack.component.css']
})
export class BarrackComponent implements OnInit {

  kingdomId: number;
  ressource: Ressource;
  units: Unit[];
  recru = [];

  constructor(private route: ActivatedRoute, private ressourceService: RessourceService, private barrackService: BarrackService) { }

  ngOnInit(): void {
    this.kingdomId = +this.route.snapshot.paramMap.get('kingdomId');

    this.ressourceService.list(this.kingdomId)
    .subscribe(
      ressource => {
        this.ressource = ressource;
      },
      error => console.error(error)
    );

    this.barrackService.list(this.kingdomId)
    .subscribe(
      units => {
        this.units = units;

        for (let i = 0; i < this.units.length; i++) {
          if (this.units[i].barracks[0]) {
            (this.units[i].barracks[0] as any).recru = 0;
          } else {
            (this.units[i].barracks[0] as any) = {nb: 0, recru: 0};
          }

        }
      },
      error => console.log(error)
    )
  }

  addRecru(key): void {
    (this.units[key].barracks[0]as any).recru++
  }

  delRecru(key): void {
    if ((this.units[key].barracks[0]as any).recru > 0) {
      (this.units[key].barracks[0]as any).recru--;
    }
  }

  doRecru(): void {
    this.barrackService.recru(this.kingdomId, this.units)
    .subscribe(
      units => {
        this.units = units;

        for (let i = 0; i < this.units.length; i++) {
          if (this.units[i].barracks[0]) {
            (this.units[i].barracks[0] as any).recru = 0;
          } else {
            (this.units[i].barracks[0] as any) = {nb: 0, recru: 0};
          }
        }
      },
      error => console.log(error)
    )
  }

}
