import { Component } from '@angular/core';
import { ContactList} from '../contacts/contact-list/contact-list';
import {ContactDetail} from '../contacts/contact-detail/contact-detail';

@Component({
  selector: 'cms-contacts',
  imports: [ContactList, ContactDetail],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {

}
