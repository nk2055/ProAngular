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
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;

        console.log((<any>window).model);
    }
    
    getProduct(key: number): Product {
        var product = this.model.getProduct(key);
        return product;
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
}

