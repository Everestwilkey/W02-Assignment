import { Routes } from '@angular/router';
import { Documnets } from './documnets/documnets';
import { MessageList } from './messages/message-list/message-list';
import { Contacts } from './contacts/contacts';
import { DocumentDetail } from './documnets/document-detail/document-detail';
import { DocumentEdit } from './documnets/document-edit/document-edit';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactEdit } from './contacts/contact-edit/contact-edit';

export const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  {
    path: 'documents',
    component: Documnets,
    children: [
      { path: 'new', component: DocumentEdit },
      { path: ':id', component: DocumentDetail },
      { path: ':id/edit', component: DocumentEdit }
    ]
  },
  { path: 'messages', component: MessageList },
  {
    path: 'contacts',
    component: Contacts,
    children: [
      { path: 'new', component: ContactEdit },
      { path: ':id', component: ContactDetail },
      { path: ':id/edit', component: ContactEdit }
    ]
  }
];
