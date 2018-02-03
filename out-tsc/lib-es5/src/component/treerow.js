/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Inject, forwardRef } from "@angular/core";
import { TreeTable } from "./treetable";
var UITreeRow = /** @class */ (function () {
    function UITreeRow(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
    }
    /**
     * @return {?}
     */
    UITreeRow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.node.parent = this.parentNode;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UITreeRow.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['node'] && this.node) {
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UITreeRow.prototype.toggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    UITreeRow.prototype.isLeaf = /**
     * @return {?}
     */
    function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    /**
     * @return {?}
     */
    UITreeRow.prototype.isSelected = /**
     * @return {?}
     */
    function () {
        return this.treeTable.isSelected(this.node);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UITreeRow.prototype.onRowClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.treeTable.onRowClick(event, this.node);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UITreeRow.prototype.onRowRightClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.treeTable.onRowRightClick(event, this.node);
    };
    /**
     * @return {?}
     */
    UITreeRow.prototype.onRowTouchEnd = /**
     * @return {?}
     */
    function () {
        this.treeTable.onRowTouchEnd();
    };
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    UITreeRow.prototype.resolveFieldData = /**
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
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    UITreeRow.decorators = [
        { type: Component, args: [{
                    selector: '[pTreeRow]',
                    template: "\n        <div *ngIf=\"treeTable.isFiltered(node)\" class=\"ui-treetable-row\" [class]=\"treeTable.getRowStyleClass(node)\"\n            [ngClass]=\"{'ui-state-highlight':isSelected() ,'ui-treetable-row-selectable':treeTable.selectionMode && node.selectable !== false}\">\n            <td *ngFor=\"let col of treeTable.columns; let i=index\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" \n            [style.display]=\"col.hidden ? 'none' : 'table-cell'\"\n            (click)=\"onRowClick($event)\" (touchend)=\"onRowTouchEnd()\" (contextmenu)=\"onRowRightClick($event)\">\n                <a href=\"#\" *ngIf=\"i==0\" class=\"ui-treetable-toggler fa fa-fw ui-c\" [ngClass]=\"{'fa-caret-down':node.expanded,'fa-caret-right':!node.expanded}\"\n                    [ngStyle]=\"{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}\"\n                    (click)=\"toggle($event)\"\n                    [title]=\"node.expanded ? labelCollapse : labelExpand\">\n                </a>\n                <div class=\"ui-chkbox ui-treetable-checkbox\" *ngIf=\"treeTable.selectionMode == 'checkbox' && i==0\">\n                    <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\">\n                        <span class=\"ui-chkbox-icon ui-c fa\" \n                            [ngClass]=\"{'fa-check':isSelected(),'fa-minus':node.partialSelected}\"></span>\n                    </div>\n                </div>\n                <span *ngIf=\"!col.template\">{{resolveFieldData(node.data,col.field)}}</span>\n                <ay-columnBodyTemplateLoader [column]=\"col\" [rowData]=\"node\" *ngIf=\"col.template\"></ay-columnBodyTemplateLoader>\n            </td>\n        </div>\n        <div *ngIf=\"node.children && node.expanded\" class=\"ui-treetable-row\" style=\"display:table-row;white-space: nowrap\">\n            <td [attr.colspan]=\"treeTable.shownColumns().length\" class=\"ui-treetable-child-table-container\">\n                <table>\n                    <tbody pTreeRow *ngFor=\"let childNode of node.children\" [node]=\"childNode\" [level]=\"level+1\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\" [parentNode]=\"node\"></tbody>\n                </table>\n            </td>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    UITreeRow.ctorParameters = function () { return [
        { type: TreeTable, decorators: [{ type: Inject, args: [forwardRef(function () { return TreeTable; }),] },] },
    ]; };
    UITreeRow.propDecorators = {
        "node": [{ type: Input },],
        "parentNode": [{ type: Input },],
        "level": [{ type: Input },],
        "labelExpand": [{ type: Input },],
        "labelCollapse": [{ type: Input },],
    };
    return UITreeRow;
}());
export { UITreeRow };
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