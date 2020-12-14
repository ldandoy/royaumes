import { Component, OnInit } from '@angular/core';

import { WorldService} from '../../services/world/world.service';
import { AuthService } from '../../services/auth/auth.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  users: User[];
  me: User;

  constructor(private worldService: WorldService, private authService: AuthService) { }

  ngOnInit(): void {
    this.worldService.list()
      .subscribe(
        users => {
          this.users = users;
        },
        err => console.error(err)
      );

    this.me = this.authService.me();
  }

}
