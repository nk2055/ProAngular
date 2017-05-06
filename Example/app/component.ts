import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/EventBinding.html"
})
export class ProductComponent {
    model: Model = new Model();

    counter: number = 1;
    targetName: string = "Kayak";

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

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }
}

