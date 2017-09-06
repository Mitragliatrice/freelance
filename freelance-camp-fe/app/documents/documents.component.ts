import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Documents Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdfasdfasfd asdf asdfasdf",
      file_url: "https://www.google.com",
      updated_at: "09/05/17",
      image_url: "https://www.colton-mathews.com"
    },
    {
      title: "My Second Doc",
      description: "asdfasdfasfd asdf asdfasdf",
      file_url: "https://www.google.com",
      updated_at: "09/05/17",
      image_url: "https://www.colton-mathews.com"
    },
    {
      title: "My Third Doc",
      description: "asdfasdfasfd asdf asdfasdf",
      file_url: "https://www.google.com",
      updated_at: "09/05/17",
      image_url: "https://www.colton-mathews.com"
    }
  ]
}