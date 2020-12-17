import { Injectable } from '@angular/core';

import { Message } from '../../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[];

  constructor() {
    this.messages = [];
  }

  add = (message: Message) => {
    this.messages.push(message);
  }

  list = () => {
    return this.messages;
  }

  remove = (key) => {
    this.messages.slice(key, 1);
  }
}
