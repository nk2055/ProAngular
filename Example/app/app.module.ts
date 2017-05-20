import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from "./component";
import { PaAttrDirective } from "./attr.directive";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],

    // declarations declares Directives & Components
    declarations: [ProductComponent, PaAttrDirective],
    
    bootstrap: [ProductComponent]
})
export class AppModule {}
