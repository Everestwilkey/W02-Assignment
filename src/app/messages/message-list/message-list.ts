import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { MessageItem } from '../message-item/message-item';
import { MessageEdit } from '../message-edit/message-edit';

@Component({
  selector: 'cms-message-list',
  imports: [CommonModule, MessageItem, MessageEdit],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList {
  messages: Message[] = [
    new Message('1', 'Welcome', 'Welcome to the CMS application!', 'Bro. Jackson'),
    new Message('2', 'Assignment Due', 'Don\'t forget assignment 3 is due Monday', 'Bro. Barzee'),
    new Message('3', 'Office Hours', 'I\'ll be available Tuesday 2-4pm', 'Bro. Jackson')
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
