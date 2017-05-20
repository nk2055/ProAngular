import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";

@Component({
    selector: "app",
    templateUrl: "app/Forms-Model.html"
})
export class ProductComponent {
    model: Model = new Model();
    newProduct: Product = new Product();
    form: ProductFormGroup = new ProductFormGroup();

    counter: number = 1;
    targetName: string = "Kayak";
    selectedProduct: string;

    formSubmitted: boolean = false;

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;

        console.log((<any>window).model);
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product {
        var product = this.model.getProduct(key);
        return product;
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.getProducts().length;
    }

    getProductPrice(index: number): number {
        return Math.floor(this.getProduct(index).price);
    }

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }

    getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch(errorName) {
                    case "required": {
                        messages.push(`You must enter a ${thing}`);
                        break;
                    }
                    case "minlength":{
                        messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
                        break;
                    }
                    case "pattern": {
                        messages.push(`The ${thing} contains illegal characters`);
                        break;
                    }
                }
            }
        }
        return messages;
    }

    getFormValidationMessages(form: NgForm): string[] {
        let messages: string[] = [];
        Object.keys(form.controls).forEach(key => {
            this.getValidationMessages(form.controls[key], key).forEach(m => messages.push(m));
        });
        return messages;
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

