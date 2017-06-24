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
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model";
import { LogService, LOG_SERVICE, SpecialLogService, LogLevel } from "./log.service";

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],

    // declarations declares Directives & Components
    declarations: [ProductComponent, PaAttrDirective, PaModel, 
        PaStructureDirective, PaIteratorDirective, 
        PaCellColor, PaCellColorSwitcher,
        ProductTableComponent, ProductFormComponent, PaToggleView, 
        PaAddTaxPipe, PaCategoryFilterPipe,
        PaDiscountDisplayComponent, PaDiscountEditorComponent,
        PaDiscountPipe, PaDiscountAmountDirective],

    providers: [
        DiscountService, SimpleDataSource, Model, 
        // { provide: LOG_SERVICE, useClass: SpecialLogService, multi: true },
        // { provide: LOG_SERVICE, useClass: LogService, multi: true }],
        { provide: LogService, useValue: logger }],
    
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {}
