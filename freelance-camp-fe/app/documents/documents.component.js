"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Documents Dashboard";
        this.documents = [
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
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.scss']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map