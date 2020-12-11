import { Component, OnInit } from '@angular/core';

import { KingdomService} from '../../services/kingdom/kingdom.service';
import { AuthService } from '../../services/auth/auth.service';

import { Kingdom } from '../../models/kingdom';

@Component({
  selector: 'app-empire',
  templateUrl: './empire.component.html',
  styleUrls: ['./empire.component.css']
})
export class EmpireComponent implements OnInit {

  kingdoms: Kingdom[];

  constructor(private kingdomService: KingdomService, private authService: AuthService) { }

  ngOnInit(): void {
    this.kingdomService.list(this.authService.me())
      .subscribe(
        kingdoms => {
          this.kingdoms = kingdoms;
        },
        err => console.error(err)
      );
  }

}
