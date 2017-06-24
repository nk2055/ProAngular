import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from "./component";
import { ProductTableComponent } from "./component/productTable.component";
import { ProductFormComponent } from "./component/productForm.component";
import { LOCALE_ID } from "@angular/core";
import { ModelModule } from "./model/model.module";
import { CommonModule } from "./common/common.module";
import { ComponentModule } from "./component/component.module";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule, ComponentModule],
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {}
