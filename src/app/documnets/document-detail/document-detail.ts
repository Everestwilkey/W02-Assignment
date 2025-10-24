import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, Params } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  imports: [RouterLink],  // ADD RouterLink HERE
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css'
})
export class DocumentDetail implements OnInit {
  document!: Document;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private windRefService: WindRefService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.document = this.documentService.getDocument(id)!;
      }
    );

    this.nativeWindow = this.windRefService.getNativeWindow();
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }
}
