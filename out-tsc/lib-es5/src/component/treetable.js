/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Component, Input, Output, EventEmitter, ContentChild, ContentChildren, QueryList, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, Footer, Column, TreeSharedModule } from './shared';
import { UITreeRow } from "./treerow";
import { PaginatorModule } from "./paginator";
var TreeTable = /** @class */ (function () {
    function TreeTable(renderer) {
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
            startsWith: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var /** @type {?} */ filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
            },
            contains: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            },
            endsWith: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var /** @type {?} */ filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
            },
            equals: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase() == filter.toString().toLowerCase();
            },
            in: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || filter.length === 0) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                for (var /** @type {?} */ i = 0; i < filter.length; i++) {
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
    TreeTable.prototype.onRowClick = /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    function (event, node) {
        var /** @type {?} */ eventTarget = (/** @type {?} */ (event.target));
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var /** @type {?} */ metaSelection = this.rowTouched ? false : this.metaKeySelection;
            var /** @type {?} */ index = this.findIndexInSelection(node);
            var /** @type {?} */ selected = (index >= 0);
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
                    var /** @type {?} */ metaKey = (event.metaKey || event.ctrlKey);
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
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.onRowTouchEnd = /**
     * @return {?}
     */
    function () {
        this.rowTouched = true;
    };
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.onRowRightClick = /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    function (event, node) {
        if (this.contextMenu) {
            var /** @type {?} */ index = this.findIndexInSelection(node);
            var /** @type {?} */ selected = (index >= 0);
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
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.findIndexInSelection = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var /** @type {?} */ index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
                for (var /** @type {?} */ i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    TreeTable.prototype.propagateSelectionUp = /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    function (node, select) {
        if (node.children && node.children.length) {
            var /** @type {?} */ selectedCount = 0;
            var /** @type {?} */ childPartialSelected = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
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
                    var /** @type {?} */ index = this.findIndexInSelection(node);
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
        var /** @type {?} */ parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    };
    /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    TreeTable.prototype.propagateSelectionDown = /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    function (node, select) {
        var /** @type {?} */ index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = this.selection || [];
            this.selection.push(node);
        }
        else if (!select && index > -1) {
            this.selection.splice(index, 1);
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.propagateSelectionDown(child, select);
            }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.isSelected = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.isSingleSelectionMode = /**
     * @return {?}
     */
    function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.isMultipleSelectionMode = /**
     * @return {?}
     */
    function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.isCheckboxSelectionMode = /**
     * @return {?}
     */
    function () {
        return this.selectionMode && this.selectionMode == 'checkbox';
    };
    /**
     * @param {?} rowData
     * @return {?}
     */
    TreeTable.prototype.getRowStyleClass = /**
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        var /** @type {?} */ styleClass = '';
        if (this.rowStyleClass) {
            var /** @type {?} */ rowClass = this.rowStyleClass.call(this, rowData);
            if (rowClass) {
                styleClass += ' ' + rowClass;
            }
        }
        return styleClass;
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.hasFooter = /**
     * @return {?}
     */
    function () {
        if (this.columns) {
            var /** @type {?} */ columnsArr = this.columns.toArray();
            for (var /** @type {?} */ i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.immutable)
            this.handleDataChange();
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.globalFilter && this.value) {
            this.globalFilterFunction = this.renderer.listen(this.globalFilter, 'keyup', function () {
                _this.filterTimeout = setTimeout(function () {
                    _this.filter();
                    _this.filterTimeout = null;
                }, _this.filterDelay);
            });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TreeTable.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['value'] && this.value && !this.immutable) {
            this.handleDataChange();
        }
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.shownColumns = /**
     * @return {?}
     */
    function () {
        return this.columns.filter(function (col) { return !col.hidden; });
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.handleDataChange = /**
     * @return {?}
     */
    function () {
        if (this.paginator) {
            this.updatePaginator();
        }
        this.updateDataToRender(this.filteredValue || this.value);
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.updatePaginator = /**
     * @return {?}
     */
    function () {
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
        if (this.totalRecords && this.first >= this.totalRecords) {
            var /** @type {?} */ numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this.first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TreeTable.prototype.paginate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.stopFilterPropagation = true;
        }
        else {
            this.updateDataToRender(this.filteredValue || this.value);
        }
    };
    /**
     * @param {?} datasource
     * @return {?}
     */
    TreeTable.prototype.updateDataToRender = /**
     * @param {?} datasource
     * @return {?}
     */
    function (datasource) {
        if ((this.paginator || this.virtualScroll) && datasource) {
            this.dataToRender = [];
            var /** @type {?} */ startIndex = this.lazy ? 0 : this.first;
            var /** @type {?} */ endIndex = this.virtualScroll ? this.first + this.rows * 2 : startIndex + this.rows;
            for (var /** @type {?} */ i = startIndex; i < endIndex; i++) {
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
    };
    /**
     * @param {?} object
     * @return {?}
     */
    TreeTable.prototype.filterFields = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        var _this = this;
        var /** @type {?} */ res = false;
        this.columns.toArray().map(function (col) {
            if (!res && object[col.field]) {
                res = object[col.field].toString().toLowerCase().includes(_this.globalFilter.value.toString().toLowerCase());
            }
        });
        return res;
    };
    /**
     * @param {?} children
     * @param {?} parent
     * @return {?}
     */
    TreeTable.prototype.filterChildren = /**
     * @param {?} children
     * @param {?} parent
     * @return {?}
     */
    function (children, parent) {
        var _this = this;
        var /** @type {?} */ res = false;
        if (children) {
            children.map(function (child) {
                var /** @type {?} */ _fields = _this.filterFields(child.data);
                var /** @type {?} */ _children = _this.filterChildren(child.children, child);
                res = _fields || _children || res;
            });
            parent.expanded = res;
        }
        return res;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.isFiltered = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.globalFilter) {
            return this.filterFields(node.data) || this.filterChildren(node.children, node);
        }
        else {
            return true;
        }
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.filter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.first = 0;
        this.filteredValue = this.value.filter(function (val) {
            return _this.filterFields(val.data) || _this.filterChildren(val.children, val);
        });
        if (this.paginator) {
            this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
        this.updateDataToRender(this.filteredValue || this.value);
    };
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    TreeTable.prototype.resolveFieldData = /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var /** @type {?} */ fields = field.split('.');
                var /** @type {?} */ value = data;
                for (var /** @type {?} */ i = 0, /** @type {?} */ len = fields.length; i < len; ++i) {
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
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //remove event listener
        if (this.globalFilterFunction) {
            this.globalFilterFunction();
        }
    };
    TreeTable.decorators = [
        { type: Component, args: [{
                    selector: 'ay-treeTable',
                    template: "\n        <div [ngClass]=\"'ui-treetable ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-treetable-header ui-widget-header\" *ngIf=\"header\">\n                <ng-content select=\"ay-header\"></ng-content>\n            </div>\n            <div class=\"ui-treetable-tablewrapper\">\n                <table class=\"ui-widget-content\" [class]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <thead>\n                    <tr class=\"ui-state-default\">\n                        <th #headerCell *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\"\n                            [ngClass]=\"'ui-state-default ui-unselectable-text'\"\n                            [style.display]=\"col.hidden ? 'none' : 'table-cell'\">\n                            <span class=\"ui-column-title\" *ngIf=\"!col.headerTemplate\">{{col.header}}</span>\n                            <span class=\"ui-column-title\" *ngIf=\"col.headerTemplate\">\n                                    <ay-columnHeaderTemplateLoader [column]=\"col\"></ay-columnHeaderTemplateLoader>\n                                </span>\n                        </th>\n                    </tr>\n                    </thead>\n                    <tfoot *ngIf=\"hasFooter()\">\n                    <tr>\n                        <td *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\"\n                            [ngClass]=\"{'ui-state-default':true}\">\n                            <span class=\"ui-column-footer\" *ngIf=\"!col.footerTemplate\">{{col.footer}}</span>\n                            <span class=\"ui-column-footer\" *ngIf=\"col.footerTemplate\">\n                                    <ay-columnFooterTemplateLoader [column]=\"col\"></ay-columnFooterTemplateLoader>\n                                </span>\n                        </td>\n                    </tr>\n                    </tfoot>\n                    <tbody pTreeRow *ngFor=\"let node of dataToRender;let odd = odd;let even=even\"\n                           [node]=\"node\" [level]=\"0\"\n                           [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\"\n                           class=\"ui-widget-content\"\n                           [ngClass]=\"{'ui-treetable-even':even,'ui-treetable-odd':odd}\"\n                    ></tbody>\n                </table>\n            </div>\n            <ay-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\"\n                          styleClass=\"ui-paginator-bottom\"\n                          (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\"\n                          *ngIf=\"paginator\"></ay-paginator>\n            <div class=\"ui-treetable-footer ui-widget-header\" *ngIf=\"footer\">\n                <ng-content select=\"ay-footer\"></ng-content>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    TreeTable.ctorParameters = function () { return [
        { type: Renderer2, },
    ]; };
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
    return TreeTable;
}());
export { TreeTable };
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
var TreeTableModule = /** @class */ (function () {
    function TreeTableModule() {
    }
    TreeTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, TreeSharedModule, PaginatorModule],
                    exports: [TreeTable, TreeSharedModule, PaginatorModule],
                    declarations: [TreeTable, UITreeRow]
                },] },
    ];
    /** @nocollapse */
    TreeTableModule.ctorParameters = function () { return []; };
    return TreeTableModule;
}());
export { TreeTableModule };
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