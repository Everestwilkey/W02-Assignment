import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList {
  contacts: Contact[] = [
    new Contact(
      "1",
      "R. Kent Jackson",
      "Jackson",
      "jacksonk@byui.edu",
      "208-496-3771",
      "assets/images/jacksonk.jpg",
      null
    ),
    new Contact(
      "2",
      "Rex Barzee",
      "Barzee",
      "barzeer@byui.edu",
      "208-496-3768",
      "assets/images/barzeer.jpg",
      null
    )
  ];
}
