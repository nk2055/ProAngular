import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/add/operator/map";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: Http, @Inject(REST_URL) private url: string) { }

    getData(): Observable<Product[]> {
        return this.http.get(this.url).map(response => response.json());
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post(this.url, product).map(response => response.json());
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put(`${this.url}/${product.id}`, product).map(response => response.json());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete(`${this.url}/${id}`).map(response => response.json());
    }
}