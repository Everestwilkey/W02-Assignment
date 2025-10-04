import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../app/header/header';
import { Contacts } from '../app/contacts/contacts';
import { Documnets}  from './documnets/documnets';
import {MessageList} from './messages/message-list/message-list';

@Component({
  selector: 'cms-root',
  imports: [CommonModule, Header, Contacts, Documnets,MessageList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cms');
  selectedFeature: string = 'documents';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}
