import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { StaticDataSource } from "./static.datasource";
import { Model } from "./repository.model";

@NgModule({
    imports: [HttpModule],
    providers: [Model, StaticDataSource]
})
export class ModelModule { }

