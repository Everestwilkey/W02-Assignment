import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactList } from '../contacts/contact-list/contact-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-contacts',
  standalone: true,
  imports: [ContactList, CommonModule, RouterOutlet],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
}
