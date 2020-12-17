import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message/message.service';

import { Message } from '../../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.list();
  }

}
