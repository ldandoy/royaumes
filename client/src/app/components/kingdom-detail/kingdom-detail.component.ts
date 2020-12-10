import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KingdomService} from '../../../services/kingdom/kingdom.service';
import { AuthService } from '../../../services/auth/auth.service';

import { Kingdom } from '../../../models/kingdom';

@Component({
  selector: 'app-kingdom-detail',
  templateUrl: './kingdom-detail.component.html',
  styleUrls: ['./kingdom-detail.component.css']
})
export class KingdomDetailComponent implements OnInit {

  kingdom: Kingdom;
  kingdomId: number;

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

}
