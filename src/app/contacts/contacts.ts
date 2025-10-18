import { Component, OnInit } from '@angular/core';
import { ContactList } from '../contacts/contact-list/contact-list';
import { ContactDetail } from '../contacts/contact-detail/contact-detail';
import { Contact } from './contact.model';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';

@Component({
  selector: 'cms-contacts',
  standalone: true,
  imports: [ContactList, ContactDetail, CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts implements OnInit {
  selectedContact!: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
  }
}
