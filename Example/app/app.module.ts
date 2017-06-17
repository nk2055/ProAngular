import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from "./component";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],

    // declarations declares Directives & Components
    declarations: [ProductComponent, PaAttrDirective, PaModel, 
        PaStructureDirective, PaIteratorDirective, 
        PaCellColor, PaCellColorSwitcher,
        ProductTableComponent, ProductFormComponent, PaToggleView, 
        PaAddTaxPipe, PaCategoryFilterPipe],

    providers: [{ provide: LOCALE_ID, useValue: "en-US" }],
    
    bootstrap: [ProductComponent]
})
export class AppModule {}
