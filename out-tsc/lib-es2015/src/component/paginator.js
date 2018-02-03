/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
export class Paginator {
    constructor() {
        this.pageLinkSize = 5;
        this.onPageChange = new EventEmitter();
        this._totalRecords = 0;
        this._first = 0;
        this._rows = 0;
    }
    /**
     * @return {?}
     */
    get totalRecords() {
        return this._totalRecords;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set totalRecords(val) {
        this._totalRecords = val;
        this.updatePageLinks();
    }
    /**
     * @return {?}
     */
    get first() {
        return this._first;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set first(val) {
        this._first = val;
        this.updatePageLinks();
    }
    /**
     * @return {?}
     */
    get rows() {
        return this._rows;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rows(val) {
        this._rows = val;
        this.updatePageLinks();
    }
    /**
     * @return {?}
     */
    isFirstPage() {
        return this.getPage() === 0;
    }
    /**
     * @return {?}
     */
    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }
    /**
     * @return {?}
     */
    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }
    /**
     * @return {?}
     */
    calculatePageLinkBoundaries() {
        let /** @type {?} */ numberOfPages = this.getPageCount(), /** @type {?} */
        visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        let /** @type {?} */ start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), /** @type {?} */
        end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var /** @type {?} */ delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    }
    /**
     * @return {?}
     */
    updatePageLinks() {
        this.pageLinks = [];
        let /** @type {?} */ boundaries = this.calculatePageLinkBoundaries(), /** @type {?} */
        start = boundaries[0], /** @type {?} */
        end = boundaries[1];
        for (let /** @type {?} */ i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    }
    /**
     * @param {?} p
     * @param {?} event
     * @return {?}
     */
    changePage(p, event) {
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
    }
    /**
     * @return {?}
     */
    getPage() {
        return Math.floor(this.first / this.rows);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changePageToFirst(event) {
        this.changePage(0, event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changePageToPrev(event) {
        this.changePage(this.getPage() - 1, event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changePageToNext(event) {
        this.changePage(this.getPage() + 1, event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changePageToLast(event) {
        this.changePage(this.getPageCount() - 1, event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRppChange(event) {
        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
        this.changePageToFirst(event);
    }
}
Paginator.decorators = [
    { type: Component, args: [{
                selector: 'ay-paginator',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'ui-paginator ui-widget ui-widget-header ui-unselectable-text'">
            <a href="#" class="ui-paginator-first ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToFirst($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="fa fa-step-backward"></span>
            </a>
            <a href="#" class="ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToPrev($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="fa fa-backward"></span>
            </a>
            <span class="ui-paginator-pages">
                <a href="#" *ngFor="let pageLink of pageLinks" class="ui-paginator-page ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePage(pageLink - 1, $event)" [ngClass]="{'ui-state-active': (pageLink-1 == getPage())}">{{pageLink}}</a>
            </span>
            <a href="#" class="ui-paginator-next ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToNext($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="fa fa-forward"></span>
            </a>
            <a href="#" class="ui-paginator-last ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToLast($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="fa fa-step-forward"></span>
            </a>
            <select class="ui-paginator-rpp-options ui-widget ui-state-default" *ngIf="rowsPerPageOptions" (change)="onRppChange($event)">
                <option *ngFor="let opt of rowsPerPageOptions" [value]="opt" [selected]="rows == opt">{{opt}}</option>
            </select>
        </div>
    `
            },] },
];
/** @nocollapse */
Paginator.ctorParameters = () => [];
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
export class PaginatorModule {
}
PaginatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [Paginator],
                declarations: [Paginator]
            },] },
];
/** @nocollapse */
PaginatorModule.ctorParameters = () => [];
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