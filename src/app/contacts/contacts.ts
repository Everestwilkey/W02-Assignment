import { Component } from '@angular/core';
import { ContactList} from '../contacts/contact-list/contact-list';
import {ContactDetail} from '../contacts/contact-detail/contact-detail';
import {Contact} from './contact.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'cms-contacts',
  imports: [ContactList, ContactDetail, CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
  selectedContact!: Contact;
}
