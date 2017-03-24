/**
 * Created by andrew.yang on 3/24/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UITreeRow} from "./dist/treerow";
import {TreeSharedModule} from "./dist/shared";
import {PaginatorModule} from "./dist/paginator";
import {TreeTable} from "./dist/treetable";
@NgModule({
    imports: [CommonModule,TreeSharedModule,PaginatorModule],
    exports: [TreeTable,TreeSharedModule,PaginatorModule],
    declarations: [TreeTable,UITreeRow]
})
export class TreeTableModule { }