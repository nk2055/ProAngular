import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http, Request, RequestMethod, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/add/operator/map";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: Http, private jsonp: Jsonp, @Inject(REST_URL) private url: string) { }

    getData(): Observable<Product[]> {
        // return this.sendRequest(RequestMethod.Get, this.url);
        return this.jsonp.get(this.url + "?callback=JSONP_CALLBACK").map(response => response.json());
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Post, this.url, product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Put, `${this.url}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest(RequestMethod.Delete, `${this.url}/${id}`);
    }

    private sendRequest(verb: RequestMethod, url: string, body?: Product): Observable<Product> {
        return this.http.request(new Request({
            method: verb,
            url: url,
            body: body
        })).map(response => response.json());
    }
}