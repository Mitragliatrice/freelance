import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.scss']
})

export class DocumentsComponent {
  pageTitle: string = "Documents Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdfasdfasfd asdf asdfasdf",
      file_url: "https://www.google.com",
      updated_at: "09/05/17",
      image_url: "https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg"
    },
    {
      title: "My Second Doc",
      description: "asdfasdfasfd asdf asdfasdf",
      file_url: "https://www.google.com",
      updated_at: "09/05/17",
      image_url: "https://qph.ec.quoracdn.net/main-qimg-edafb5dc2318160e8791a4207315e799-c"
    },
    {
      title: "My Third Doc",
      description: "asdfasdfasfd asdf asdfasdf",
      file_url: "https://www.google.com",
      updated_at: "09/05/17",
      image_url: "https://dragonlaw.io/wp-content/uploads/2017/05/Freelancer.png"
    }
  ]
}