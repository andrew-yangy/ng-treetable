/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
var Paginator = /** @class */ (function () {
    function Paginator() {
        this.pageLinkSize = 5;
        this.onPageChange = new EventEmitter();
        this._totalRecords = 0;
        this._first = 0;
        this._rows = 0;
    }
    Object.defineProperty(Paginator.prototype, "totalRecords", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalRecords;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._totalRecords = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "first", {
        get: /**
         * @return {?}
         */
        function () {
            return this._first;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._first = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rows = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Paginator.prototype.isFirstPage = /**
     * @return {?}
     */
    function () {
        return this.getPage() === 0;
    };
    /**
     * @return {?}
     */
    Paginator.prototype.isLastPage = /**
     * @return {?}
     */
    function () {
        return this.getPage() === this.getPageCount() - 1;
    };
    /**
     * @return {?}
     */
    Paginator.prototype.getPageCount = /**
     * @return {?}
     */
    function () {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    };
    /**
     * @return {?}
     */
    Paginator.prototype.calculatePageLinkBoundaries = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ numberOfPages = this.getPageCount(), /** @type {?} */
        visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        var /** @type {?} */ start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), /** @type {?} */
        end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var /** @type {?} */ delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    };
    /**
     * @return {?}
     */
    Paginator.prototype.updatePageLinks = /**
     * @return {?}
     */
    function () {
        this.pageLinks = [];
        var /** @type {?} */ boundaries = this.calculatePageLinkBoundaries(), /** @type {?} */
        start = boundaries[0], /** @type {?} */
        end = boundaries[1];
        for (var /** @type {?} */ i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    };
    /**
     * @param {?} p
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePage = /**
     * @param {?} p
     * @param {?} event
     * @return {?}
     */
    function (p, event) {
        var /** @type {?} */ pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var /** @type {?} */ state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
        }
        if (event) {
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    Paginator.prototype.getPage = /**
     * @return {?}
     */
    function () {
        return Math.floor(this.first / this.rows);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToFirst = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(0, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToPrev = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(this.getPage() - 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToNext = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(this.getPage() + 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToLast = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(this.getPageCount() - 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.onRppChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
        this.changePageToFirst(event);
    };
    Paginator.decorators = [
        { type: Component, args: [{
                    selector: 'ay-paginator',
                    template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-paginator ui-widget ui-widget-header ui-unselectable-text'\">\n            <a href=\"#\" class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-step-backward\"></span>\n            </a>\n            <a href=\"#\" class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-backward\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a href=\"#\" *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePage(pageLink - 1, $event)\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a href=\"#\" class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-forward\"></span>\n            </a>\n            <a href=\"#\" class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-step-forward\"></span>\n            </a>\n            <select class=\"ui-paginator-rpp-options ui-widget ui-state-default\" *ngIf=\"rowsPerPageOptions\" (change)=\"onRppChange($event)\">\n                <option *ngFor=\"let opt of rowsPerPageOptions\" [value]=\"opt\" [selected]=\"rows == opt\">{{opt}}</option>\n            </select>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Paginator.ctorParameters = function () { return []; };
    Paginator.propDecorators = {
        "pageLinkSize": [{ type: Input },],
        "onPageChange": [{ type: Output },],
        "style": [{ type: Input },],
        "styleClass": [{ type: Input },],
        "rowsPerPageOptions": [{ type: Input },],
        "totalRecords": [{ type: Input },],
        "first": [{ type: Input },],
        "rows": [{ type: Input },],
    };
    return Paginator;
}());
export { Paginator };
function Paginator_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Paginator.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Paginator.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Paginator.propDecorators;
    /** @type {?} */
    Paginator.prototype.pageLinkSize;
    /** @type {?} */
    Paginator.prototype.onPageChange;
    /** @type {?} */
    Paginator.prototype.style;
    /** @type {?} */
    Paginator.prototype.styleClass;
    /** @type {?} */
    Paginator.prototype.rowsPerPageOptions;
    /** @type {?} */
    Paginator.prototype.pageLinks;
    /** @type {?} */
    Paginator.prototype._totalRecords;
    /** @type {?} */
    Paginator.prototype._first;
    /** @type {?} */
    Paginator.prototype._rows;
}
var PaginatorModule = /** @class */ (function () {
    function PaginatorModule() {
    }
    PaginatorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Paginator],
                    declarations: [Paginator]
                },] },
    ];
    /** @nocollapse */
    PaginatorModule.ctorParameters = function () { return []; };
    return PaginatorModule;
}());
export { PaginatorModule };
function PaginatorModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PaginatorModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PaginatorModule.ctorParameters;
}
//# sourceMappingURL=paginator.js.map