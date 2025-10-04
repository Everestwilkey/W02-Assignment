import { Component } from '@angular/core';
import {Document} from './document.model';
import {DocumentList} from './document-list/document-list';
import {DocumentItem} from './document-item/document-item';
import {DocumentDetail} from './document-detail/document-detail';

@Component({
  selector: 'cms-documnets',
  imports: [DocumentList, DocumentDetail],
  templateUrl: './documnets.html',
  styleUrl: './documnets.css'
})
export class Documnets {

}
