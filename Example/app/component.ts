import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();
    
    showTable: boolean = true;
    darkColor: boolean = false;

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;

        console.log((<any>window).model);
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }
}

