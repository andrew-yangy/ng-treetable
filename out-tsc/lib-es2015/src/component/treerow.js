/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Inject, forwardRef } from "@angular/core";
import { TreeTable } from "./treetable";
export class UITreeRow {
    /**
     * @param {?} treeTable
     */
    constructor(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.node.parent = this.parentNode;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['node'] && this.node) {
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    isLeaf() {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
    /**
     * @return {?}
     */
    isSelected() {
        return this.treeTable.isSelected(this.node);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRowClick(event) {
        this.treeTable.onRowClick(event, this.node);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRowRightClick(event) {
        this.treeTable.onRowRightClick(event, this.node);
    }
    /**
     * @return {?}
     */
    onRowTouchEnd() {
        this.treeTable.onRowTouchEnd();
    }
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    resolveFieldData(data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let /** @type {?} */ fields = field.split('.');
                let /** @type {?} */ value = data;
                for (var /** @type {?} */ i = 0, /** @type {?} */ len = fields.length; i < len; ++i) {
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
UITreeRow.decorators = [
    { type: Component, args: [{
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
            },] },
];
/** @nocollapse */
UITreeRow.ctorParameters = () => [
    { type: TreeTable, decorators: [{ type: Inject, args: [forwardRef(() => TreeTable),] },] },
];
UITreeRow.propDecorators = {
    "node": [{ type: Input },],
    "parentNode": [{ type: Input },],
    "level": [{ type: Input },],
    "labelExpand": [{ type: Input },],
    "labelCollapse": [{ type: Input },],
};
function UITreeRow_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    UITreeRow.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    UITreeRow.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    UITreeRow.propDecorators;
    /** @type {?} */
    UITreeRow.prototype.node;
    /** @type {?} */
    UITreeRow.prototype.parentNode;
    /** @type {?} */
    UITreeRow.prototype.level;
    /** @type {?} */
    UITreeRow.prototype.labelExpand;
    /** @type {?} */
    UITreeRow.prototype.labelCollapse;
    /** @type {?} */
    UITreeRow.prototype.treeTable;
}
//# sourceMappingURL=treerow.js.map