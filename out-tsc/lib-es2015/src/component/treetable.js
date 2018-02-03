/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Component, Input, Output, EventEmitter, ContentChild, ContentChildren, QueryList, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, Footer, Column, TreeSharedModule } from './shared';
import { UITreeRow } from "./treerow";
import { PaginatorModule } from "./paginator";
export class TreeTable {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.pageLinks = 5;
        this.first = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
        this.metaKeySelection = true;
        this.filterDelay = 300;
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
        this.onContextMenuSelect = new EventEmitter();
        this.onLazyLoad = new EventEmitter();
        this.filterConstraints = {
            /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            startsWith(value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                let /** @type {?} */ filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
            },
            /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            contains(value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            },
            /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            endsWith(value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                let /** @type {?} */ filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
            },
            /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            equals(value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase() == filter.toString().toLowerCase();
            },
            /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            in(value, filter) {
                if (filter === undefined || filter === null || filter.length === 0) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                for (let /** @type {?} */ i = 0; i < filter.length; i++) {
                    if (filter[i] === value)
                        return true;
                }
                return false;
            }
        };
    }
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    onRowClick(event, node) {
        let /** @type {?} */ eventTarget = (/** @type {?} */ (event.target));
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            let /** @type {?} */ metaSelection = this.rowTouched ? false : this.metaKeySelection;
            let /** @type {?} */ index = this.findIndexInSelection(node);
            let /** @type {?} */ selected = (index >= 0);
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    this.propagateSelectionDown(node, false);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.propagateSelectionDown(node, true);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else {
                if (metaSelection) {
                    let /** @type {?} */ metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection.splice(index, 1);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection.push(node);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
                        if (selected) {
                            this.selection.splice(index, 1);
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = this.selection || [];
                            this.selection.push(node);
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
        }
        this.rowTouched = false;
    }
    /**
     * @return {?}
     */
    onRowTouchEnd() {
        this.rowTouched = true;
    }
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    onRowRightClick(event, node) {
        if (this.contextMenu) {
            let /** @type {?} */ index = this.findIndexInSelection(node);
            let /** @type {?} */ selected = (index >= 0);
            if (!selected) {
                if (this.isSingleSelectionMode()) {
                    this.selection = node;
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = [];
                    this.selection.push(node);
                    this.selectionChange.emit(this.selection);
                }
                this.selectionChange.emit(this.selection);
            }
            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({ originalEvent: event, node: node });
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    findIndexInSelection(node) {
        let /** @type {?} */ index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
                for (let /** @type {?} */ i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    }
    /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    propagateSelectionUp(node, select) {
        if (node.children && node.children.length) {
            let /** @type {?} */ selectedCount = 0;
            let /** @type {?} */ childPartialSelected = false;
            for (let /** @type {?} */ child of node.children) {
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = this.selection || [];
                this.selection.push(node);
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    let /** @type {?} */ index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection.splice(index, 1);
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        let /** @type {?} */ parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    }
    /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    propagateSelectionDown(node, select) {
        let /** @type {?} */ index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = this.selection || [];
            this.selection.push(node);
        }
        else if (!select && index > -1) {
            this.selection.splice(index, 1);
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (let /** @type {?} */ child of node.children) {
                this.propagateSelectionDown(child, select);
            }
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isSelected(node) {
        return this.findIndexInSelection(node) != -1;
    }
    /**
     * @return {?}
     */
    isSingleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'single';
    }
    /**
     * @return {?}
     */
    isMultipleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'multiple';
    }
    /**
     * @return {?}
     */
    isCheckboxSelectionMode() {
        return this.selectionMode && this.selectionMode == 'checkbox';
    }
    /**
     * @param {?} rowData
     * @return {?}
     */
    getRowStyleClass(rowData) {
        let /** @type {?} */ styleClass = '';
        if (this.rowStyleClass) {
            let /** @type {?} */ rowClass = this.rowStyleClass.call(this, rowData);
            if (rowClass) {
                styleClass += ' ' + rowClass;
            }
        }
        return styleClass;
    }
    /**
     * @return {?}
     */
    hasFooter() {
        if (this.columns) {
            let /** @type {?} */ columnsArr = this.columns.toArray();
            for (let /** @type {?} */ i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.immutable)
            this.handleDataChange();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.globalFilter && this.value) {
            this.globalFilterFunction = this.renderer.listen(this.globalFilter, 'keyup', () => {
                this.filterTimeout = setTimeout(() => {
                    this.filter();
                    this.filterTimeout = null;
                }, this.filterDelay);
            });
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['value'] && this.value && !this.immutable) {
            this.handleDataChange();
        }
    }
    /**
     * @return {?}
     */
    shownColumns() {
        return this.columns.filter(col => !col.hidden);
    }
    /**
     * @return {?}
     */
    handleDataChange() {
        if (this.paginator) {
            this.updatePaginator();
        }
        this.updateDataToRender(this.filteredValue || this.value);
    }
    /**
     * @return {?}
     */
    updatePaginator() {
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
        if (this.totalRecords && this.first >= this.totalRecords) {
            let /** @type {?} */ numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this.first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    paginate(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.stopFilterPropagation = true;
        }
        else {
            this.updateDataToRender(this.filteredValue || this.value);
        }
    }
    /**
     * @param {?} datasource
     * @return {?}
     */
    updateDataToRender(datasource) {
        if ((this.paginator || this.virtualScroll) && datasource) {
            this.dataToRender = [];
            let /** @type {?} */ startIndex = this.lazy ? 0 : this.first;
            let /** @type {?} */ endIndex = this.virtualScroll ? this.first + this.rows * 2 : startIndex + this.rows;
            for (let /** @type {?} */ i = startIndex; i < endIndex; i++) {
                if (i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
        this.loading = false;
    }
    /**
     * @param {?} object
     * @return {?}
     */
    filterFields(object) {
        let /** @type {?} */ res = false;
        this.columns.toArray().map(col => {
            if (!res && object[col.field]) {
                res = object[col.field].toString().toLowerCase().includes(this.globalFilter.value.toString().toLowerCase());
            }
        });
        return res;
    }
    /**
     * @param {?} children
     * @param {?} parent
     * @return {?}
     */
    filterChildren(children, parent) {
        let /** @type {?} */ res = false;
        if (children) {
            children.map(child => {
                let /** @type {?} */ _fields = this.filterFields(child.data);
                let /** @type {?} */ _children = this.filterChildren(child.children, child);
                res = _fields || _children || res;
            });
            parent.expanded = res;
        }
        return res;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    isFiltered(node) {
        if (this.globalFilter) {
            return this.filterFields(node.data) || this.filterChildren(node.children, node);
        }
        else {
            return true;
        }
    }
    /**
     * @return {?}
     */
    filter() {
        this.first = 0;
        this.filteredValue = this.value.filter(val => {
            return this.filterFields(val.data) || this.filterChildren(val.children, val);
        });
        if (this.paginator) {
            this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
        this.updateDataToRender(this.filteredValue || this.value);
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
                for (let /** @type {?} */ i = 0, /** @type {?} */ len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        //remove event listener
        if (this.globalFilterFunction) {
            this.globalFilterFunction();
        }
    }
}
TreeTable.decorators = [
    { type: Component, args: [{
                selector: 'ay-treeTable',
                template: `
        <div [ngClass]="'ui-treetable ui-widget'" [ngStyle]="style" [class]="styleClass">
            <div class="ui-treetable-header ui-widget-header" *ngIf="header">
                <ng-content select="ay-header"></ng-content>
            </div>
            <div class="ui-treetable-tablewrapper">
                <table class="ui-widget-content" [class]="tableStyleClass" [ngStyle]="tableStyle">
                    <thead>
                    <tr class="ui-state-default">
                        <th #headerCell *ngFor="let col of columns" [ngStyle]="col.style" [class]="col.styleClass"
                            [ngClass]="'ui-state-default ui-unselectable-text'"
                            [style.display]="col.hidden ? 'none' : 'table-cell'">
                            <span class="ui-column-title" *ngIf="!col.headerTemplate">{{col.header}}</span>
                            <span class="ui-column-title" *ngIf="col.headerTemplate">
                                    <ay-columnHeaderTemplateLoader [column]="col"></ay-columnHeaderTemplateLoader>
                                </span>
                        </th>
                    </tr>
                    </thead>
                    <tfoot *ngIf="hasFooter()">
                    <tr>
                        <td *ngFor="let col of columns" [ngStyle]="col.style" [class]="col.styleClass"
                            [ngClass]="{'ui-state-default':true}">
                            <span class="ui-column-footer" *ngIf="!col.footerTemplate">{{col.footer}}</span>
                            <span class="ui-column-footer" *ngIf="col.footerTemplate">
                                    <ay-columnFooterTemplateLoader [column]="col"></ay-columnFooterTemplateLoader>
                                </span>
                        </td>
                    </tr>
                    </tfoot>
                    <tbody pTreeRow *ngFor="let node of dataToRender;let odd = odd;let even=even"
                           [node]="node" [level]="0"
                           [labelExpand]="labelExpand" [labelCollapse]="labelCollapse"
                           class="ui-widget-content"
                           [ngClass]="{'ui-treetable-even':even,'ui-treetable-odd':odd}"
                    ></tbody>
                </table>
            </div>
            <ay-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks"
                          styleClass="ui-paginator-bottom"
                          (onPageChange)="paginate($event)" [rowsPerPageOptions]="rowsPerPageOptions"
                          *ngIf="paginator"></ay-paginator>
            <div class="ui-treetable-footer ui-widget-header" *ngIf="footer">
                <ng-content select="ay-footer"></ng-content>
            </div>
        </div>
    `
            },] },
];
/** @nocollapse */
TreeTable.ctorParameters = () => [
    { type: Renderer2, },
];
TreeTable.propDecorators = {
    "paginator": [{ type: Input },],
    "rows": [{ type: Input },],
    "totalRecords": [{ type: Input },],
    "pageLinks": [{ type: Input },],
    "rowsPerPageOptions": [{ type: Input },],
    "first": [{ type: Input },],
    "lazy": [{ type: Input },],
    "virtualScroll": [{ type: Input },],
    "value": [{ type: Input },],
    "selectionMode": [{ type: Input },],
    "selection": [{ type: Input },],
    "style": [{ type: Input },],
    "styleClass": [{ type: Input },],
    "labelExpand": [{ type: Input },],
    "labelCollapse": [{ type: Input },],
    "metaKeySelection": [{ type: Input },],
    "contextMenu": [{ type: Input },],
    "globalFilter": [{ type: Input },],
    "filterDelay": [{ type: Input },],
    "immutable": [{ type: Input },],
    "rowStyleClass": [{ type: Input },],
    "tableStyle": [{ type: Input },],
    "tableStyleClass": [{ type: Input },],
    "selectionChange": [{ type: Output },],
    "onNodeSelect": [{ type: Output },],
    "onNodeUnselect": [{ type: Output },],
    "onNodeExpand": [{ type: Output },],
    "onNodeCollapse": [{ type: Output },],
    "onContextMenuSelect": [{ type: Output },],
    "onLazyLoad": [{ type: Output },],
    "header": [{ type: ContentChild, args: [Header,] },],
    "footer": [{ type: ContentChild, args: [Footer,] },],
    "columns": [{ type: ContentChildren, args: [Column,] },],
};
function TreeTable_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TreeTable.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TreeTable.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TreeTable.propDecorators;
    /** @type {?} */
    TreeTable.prototype.paginator;
    /** @type {?} */
    TreeTable.prototype.rows;
    /** @type {?} */
    TreeTable.prototype.totalRecords;
    /** @type {?} */
    TreeTable.prototype.pageLinks;
    /** @type {?} */
    TreeTable.prototype.rowsPerPageOptions;
    /** @type {?} */
    TreeTable.prototype.first;
    /** @type {?} */
    TreeTable.prototype.lazy;
    /** @type {?} */
    TreeTable.prototype.virtualScroll;
    /** @type {?} */
    TreeTable.prototype.value;
    /** @type {?} */
    TreeTable.prototype.selectionMode;
    /** @type {?} */
    TreeTable.prototype.selection;
    /** @type {?} */
    TreeTable.prototype.style;
    /** @type {?} */
    TreeTable.prototype.styleClass;
    /** @type {?} */
    TreeTable.prototype.labelExpand;
    /** @type {?} */
    TreeTable.prototype.labelCollapse;
    /** @type {?} */
    TreeTable.prototype.metaKeySelection;
    /** @type {?} */
    TreeTable.prototype.contextMenu;
    /** @type {?} */
    TreeTable.prototype.globalFilter;
    /** @type {?} */
    TreeTable.prototype.filterDelay;
    /** @type {?} */
    TreeTable.prototype.immutable;
    /** @type {?} */
    TreeTable.prototype.rowStyleClass;
    /** @type {?} */
    TreeTable.prototype.tableStyle;
    /** @type {?} */
    TreeTable.prototype.tableStyleClass;
    /** @type {?} */
    TreeTable.prototype.selectionChange;
    /** @type {?} */
    TreeTable.prototype.onNodeSelect;
    /** @type {?} */
    TreeTable.prototype.onNodeUnselect;
    /** @type {?} */
    TreeTable.prototype.onNodeExpand;
    /** @type {?} */
    TreeTable.prototype.onNodeCollapse;
    /** @type {?} */
    TreeTable.prototype.onContextMenuSelect;
    /** @type {?} */
    TreeTable.prototype.onLazyLoad;
    /** @type {?} */
    TreeTable.prototype.header;
    /** @type {?} */
    TreeTable.prototype.footer;
    /** @type {?} */
    TreeTable.prototype.columns;
    /** @type {?} */
    TreeTable.prototype.rowTouched;
    /** @type {?} */
    TreeTable.prototype.loading;
    /** @type {?} */
    TreeTable.prototype.stopFilterPropagation;
    /** @type {?} */
    TreeTable.prototype.dataToRender;
    /** @type {?} */
    TreeTable.prototype.filterTimeout;
    /** @type {?} */
    TreeTable.prototype.filteredValue;
    /** @type {?} */
    TreeTable.prototype.globalFilterFunction;
    /** @type {?} */
    TreeTable.prototype.filterConstraints;
    /** @type {?} */
    TreeTable.prototype.renderer;
}
export class TreeTableModule {
}
TreeTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TreeSharedModule, PaginatorModule],
                exports: [TreeTable, TreeSharedModule, PaginatorModule],
                declarations: [TreeTable, UITreeRow]
            },] },
];
/** @nocollapse */
TreeTableModule.ctorParameters = () => [];
function TreeTableModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TreeTableModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TreeTableModule.ctorParameters;
}
//# sourceMappingURL=treetable.js.map