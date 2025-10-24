import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DocumentList } from './document-list/document-list';

@Component({
  selector: 'cms-documnets',
  imports: [CommonModule, DocumentList, RouterOutlet],
  templateUrl: './documnets.html',
  styleUrl: './documnets.css'
})
export class Documnets {
  // Removed the selectedDocument property, constructor, and ngOnInit
}
