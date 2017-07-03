import { Component, Inject } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
// import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
// import { Observer } from "rxjs/Observer";

@Component({
    selector: "paTable",
    moduleId: module.id,
    templateUrl: "table.component.html"
})
export class TableComponent {

    constructor(private model: Model) {
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] { 
        return this.model.getProducts();
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }
}