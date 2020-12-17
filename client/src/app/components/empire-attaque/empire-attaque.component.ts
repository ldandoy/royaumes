import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UnitService} from '../../services/unit/unit.service';
import { UserService} from '../../services/user/user.service';
import { BarrackService} from '../../services/barrack/barrack.service';
import { AuthService } from '../../services/auth/auth.service';
import { AttaqueService } from '../../services/attaque/attaque.service';
import { MessageService } from '../../services/message/message.service';

import { User } from '../../models/user';
import { Kingdom } from 'src/app/models/kingdom';

@Component({
  selector: 'app-empire-attaque',
  templateUrl: './empire-attaque.component.html',
  styleUrls: ['./empire-attaque.component.css']
})
export class EmpireAttaqueComponent implements OnInit {

  units = [];
  unitsOff = [];
  unitSurvey = [];
  unitkilled = [];
  me: User;
  userId: number;
  kingdom: Kingdom;
  user = {
    username: ""
  };
  result = '';

  constructor(
    private route: ActivatedRoute,
    private unitService: UnitService,
    private userService: UserService,
    private barrackService: BarrackService,
    private authService: AuthService,
    private attaqueService: AttaqueService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('userId');

    this.userService.get(this.userId)
    .subscribe(
      user => {
        this.user = user;
      },
      error => console.error(error)
    );

    this.unitService.list()
    .subscribe(
      units => {
        this.units = units;
        this.barrackService.list(this.me.id)
        .subscribe(
          barracks => {
            /*units.forEach((unit, keyUnit)=> {
              let found = false;
              this.unitsOff[keyUnit] = { id: unit.id, nb: 0 };
              barracks.forEach((barrack, keyBarrack)=> {
                if (unit.id == barrack.unitId) {
                  (unit as any).nb = barrack.nb;
                  found = true;
                }
              });

              if (!found) {
                (unit as any).nb = 0;
              }
            });*/
          },
          error => console.error(error)
        );
      },
      error => console.error(error)
    );

    this.me = this.authService.me();
  }

  addOff(key): void {
    if (this.unitsOff[key].nb < this.units[key].nb) {
      this.unitsOff[key].nb ++;
    }
  }

  delOff(key): void {
    if (this.unitsOff[key].nb > 0) {
      this.unitsOff[key].nb --;
    }
  }

  selectAll(key) : void {
    this.unitsOff[key].nb = this.units[key].nb
  }

  attaque(): void {
    let att = false;
    this.unitsOff.forEach((unitOff, keyUnitOff)=> {
      if (unitOff.nb > 0) {
        att = true;
      }
    });

    this.unitsOff.forEach((unitOff, keyUnitOff)=> {
      if (unitOff.nb > this.units[keyUnitOff].nb) {
        att = false;
      }
    });

    if (att) {
      this.attaqueService.attaque(this.userId, this.me, this.units, this.unitsOff)
      .subscribe(
        res => {
          console.log(res);
          this.result = res.result;
          this.unitSurvey = res.unitsOff;
          this.unitkilled = res.unitsDef;
        },
        error => console.error(error)
      );
    } else {
      this.messageService.add({
        text: "L'attaque n'est pas partie",
        type: "danger"
      });
    }
  }

}
