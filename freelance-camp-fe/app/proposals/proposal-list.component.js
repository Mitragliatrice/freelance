"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var proposal_1 = require("./proposal");
var ProposalListComponent = /** @class */ (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(15, 'Abc LLC', 'http://portfolio.coltonmathews.com', 'Ruby on Rails', 150, 90, 15, 'mathews.colton@gmail.com');
        this.proposalTwo = new proposal_1.Proposal(14, 'Abc Company', 'http://portfolio.coltonmathews.com', 'Ruby on Rails', 250, 150, 5, 'mathews.colton@gmail.com');
        this.proposalThree = new proposal_1.Proposal(13, 'Abc Incorperated', 'http://portfolio.coltonmathews.com', 'Ruby on Rails', 100, 100, 10, 'mathews.colton@gmail.com');
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree
        ];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-list',
            templateUrl: 'proposal-list.component.html',
            styleUrls: ['proposal-list.component.scss']
        })
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map