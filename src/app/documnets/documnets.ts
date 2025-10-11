import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from './document.model';
import { DocumentList } from './document-list/document-list';
import { DocumentDetail } from './document-detail/document-detail';

@Component({
  selector: 'cms-documnets',
  imports: [CommonModule, DocumentList, DocumentDetail],
  templateUrl: './documnets.html',
  styleUrl: './documnets.css'
})
export class Documnets {
  selectedDocument!: Document;
}
