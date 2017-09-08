import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.scss']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc LLC', 'http://portfolio.coltonmathews.com',
    'Ruby on Rails', 150, 90, 15, 'mathews.colton@gmail.com');
  proposalTwo: Proposal = new Proposal(14, 'Abc Company', 'http://portfolio.coltonmathews.com',
    'Ruby on Rails', 250, 150, 5, 'mathews.colton@gmail.com');
  proposalThree: Proposal = new Proposal(13, 'Abc Incorperated', 'http://portfolio.coltonmathews.com',    'Ruby on Rails', 100, 100, 10, 'mathews.colton@gmail.com')
  
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}