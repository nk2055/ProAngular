import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { OndemandComponent } from "./ondemand.component";

let routing = RouterModule.forChild([
    { path: "", component: OndemandComponent }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [OndemandComponent],
    exports: [OndemandComponent]
})
export class OndemandModule { }

