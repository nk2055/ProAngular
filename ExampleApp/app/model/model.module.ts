import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";
// import { StaticDataSource } from "./static.datasource";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { Model } from "./repository.model";

@NgModule({
    imports: [HttpModule, JsonpModule],
    providers: [Model, RestDataSource, { provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}]
})
export class ModelModule { }

