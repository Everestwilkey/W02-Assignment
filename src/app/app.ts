import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header }  from '../app/header/header'
import {Contacts} from '../app/contacts/contacts'

@Component({
  selector: 'cms-root',
  imports: [RouterOutlet, Header, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cms');
}
