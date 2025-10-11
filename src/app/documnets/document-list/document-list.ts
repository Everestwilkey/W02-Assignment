import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentItem } from '../document-item/document-item';

@Component({
  selector: 'cms-document-list',
  imports: [CommonModule, DocumentItem],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      '1',
      'CMS Design',
      'Design document for the CMS application',
      'https://example.com/cms-design.pdf',
      null
    ),
    new Document(
      '2',
      'Angular Tutorial',
      'Comprehensive guide to Angular development',
      'https://angular.io/tutorial',
      null
    ),
    new Document(
      '3',
      'TypeScript Handbook',
      'Official TypeScript documentation',
      'https://www.typescriptlang.org/docs/handbook/intro.html',
      null
    ),
    new Document(
      '4',
      'Bootstrap Guide',
      'Bootstrap CSS framework documentation',
      'https://getbootstrap.com/docs',
      null
    ),
    new Document(
      '5',
      'Git Commands',
      'Essential Git commands reference',
      'https://git-scm.com/docs',
      null
    )
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
