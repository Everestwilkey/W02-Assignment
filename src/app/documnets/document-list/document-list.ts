import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Document } from '../document.model';
import { DocumentItem } from '../document-item/document-item';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  imports: [CommonModule, DocumentItem, RouterLink],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();

    // Subscribe to document changes
    this.documentService.documentChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    );
  }
}
