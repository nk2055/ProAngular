import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { Model } from "./repository.model";
import { ModelResolver } from "./model.resolver";

@NgModule({
    imports: [HttpModule],
    providers: [Model, RestDataSource, ModelResolver, { provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}]
})
export class ModelModule { }

