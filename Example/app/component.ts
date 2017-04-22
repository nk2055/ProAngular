import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;

        console.log((<any>window).model);
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClasses(key: number): string {
        let product = this.model.getProduct(key);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClassMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            "text-xs-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    }

    getStyles(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            fontSize: "30px",
            "margin.px": 100,
            color: product.price > 50 ? "red" : "green"
        };
    }

    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string = "30";
}
