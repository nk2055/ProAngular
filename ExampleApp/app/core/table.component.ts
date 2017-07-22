import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { HighlightTrigger } from "./table.animation";

@Component({
    selector: "paTable",
    moduleId: module.id,
    templateUrl: "table.component.html",
    animations: [HighlightTrigger],
})
export class TableComponent {
    private category: string = null;
    highlightCategory: string = "";

    constructor(private model: Model, private activeRoute: ActivatedRoute) {
        activeRoute.params.subscribe(params => {
            this.category = params["category"] || null;
        });
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] { 
        return this.model.getProducts().filter(p => this.category == null || p.category == this.category);
    }

    get categories(): string[] {
        return this.model.getProducts().map(p => p.category).filter((category, index, array) => array.indexOf(category) == index).sort();
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    getRowState(category: string): string {
        return this.highlightCategory == "" ? "" : this.highlightCategory == category ? "selected" : "notselected";
    }
}