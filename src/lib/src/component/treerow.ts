/**
 * Created by andrew.yang on 3/22/2017.
 */
import {Component, Input, OnInit, Inject, forwardRef, SimpleChanges} from "@angular/core";
import {TreeNode} from "./model";
import {TreeTable} from "./treetable";

@Component({
    selector: '[pTreeRow]',
    template: `
        <div *ngIf="treeTable.isFiltered(node)" class="ui-treetable-row" [class]="treeTable.getRowStyleClass(node)"
            [ngClass]="{'ui-state-highlight':isSelected() ,'ui-treetable-row-selectable':treeTable.selectionMode && node.selectable !== false}">
            <td *ngFor="let col of treeTable.columns; let i=index" [ngStyle]="col.style" [class]="col.styleClass" 
            [style.display]="col.hidden ? 'none' : 'table-cell'"
            (click)="onRowClick($event)" (touchend)="onRowTouchEnd()" (contextmenu)="onRowRightClick($event)">
                <a href="#" *ngIf="i==0" class="ui-treetable-toggler fa fa-fw ui-c" [ngClass]="{'fa-caret-down':node.expanded,'fa-caret-right':!node.expanded}"
                    [ngStyle]="{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}"
                    (click)="toggle($event)"
                    [title]="node.expanded ? labelCollapse : labelExpand">
                </a>
                <div class="ui-chkbox ui-treetable-checkbox" *ngIf="treeTable.selectionMode == 'checkbox' && i==0">
                    <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default">
                        <span class="ui-chkbox-icon ui-c fa" 
                            [ngClass]="{'fa-check':isSelected(),'fa-minus':node.partialSelected}"></span>
                    </div>
                </div>
                <span *ngIf="!col.template">{{resolveFieldData(node.data,col.field)}}</span>
                <ay-columnBodyTemplateLoader [column]="col" [rowData]="node" *ngIf="col.template"></ay-columnBodyTemplateLoader>
            </td>
        </div>
        <div *ngIf="node.children && node.expanded" class="ui-treetable-row" style="display:table-row;white-space: nowrap">
            <td [attr.colspan]="treeTable.shownColumns().length" class="ui-treetable-child-table-container">
                <table>
                    <tbody pTreeRow *ngFor="let childNode of node.children" [node]="childNode" [level]="level+1" [labelExpand]="labelExpand" [labelCollapse]="labelCollapse" [parentNode]="node"></tbody>
                </table>
            </td>
        </div>
    `
})
export class UITreeRow implements OnInit {

    @Input() node: TreeNode;

    @Input() parentNode: TreeNode;

    @Input() level: number = 0;

    @Input() labelExpand: string = "Expand";

    @Input() labelCollapse: string = "Collapse";

    constructor(@Inject(forwardRef(() => TreeTable)) public treeTable:TreeTable) {}

    ngOnInit() {
        this.node.parent = this.parentNode;
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['node'] && this.node){
        }
    }
    toggle(event: Event) {
        if(this.node.expanded)
            this.treeTable.onNodeCollapse.emit({originalEvent: event, node: this.node});
        else
            this.treeTable.onNodeExpand.emit({originalEvent: event, node: this.node});

        this.node.expanded = !this.node.expanded;

        event.preventDefault();
    }

    isLeaf() {
        return this.node.leaf == false ? false : !(this.node.children&&this.node.children.length);
    }

    isSelected() {
        return this.treeTable.isSelected(this.node);
    }

    onRowClick(event: MouseEvent) {
        this.treeTable.onRowClick(event, this.node);
    }

    onRowRightClick(event: MouseEvent) {
        this.treeTable.onRowRightClick(event, this.node);
    }

    onRowTouchEnd() {
        this.treeTable.onRowTouchEnd();
    }

    resolveFieldData(data: any, field: string): any {
        if(data && field) {
            if(field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields: string[] = field.split('.');
                let value = data;
                for(var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
}