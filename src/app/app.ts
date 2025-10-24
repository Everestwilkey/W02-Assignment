import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from '../app/header/header';

@Component({
  selector: 'cms-root',
  imports: [CommonModule, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
