/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, EventEmitter, Directive, ViewContainerRef, Input, Output, ContentChildren, ContentChild, TemplateRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
var Header = /** @class */ (function () {
    function Header() {
    }
    Header.decorators = [
        { type: Component, args: [{
                    selector: 'ay-header',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    Header.ctorParameters = function () { return []; };
    return Header;
}());
export { Header };
function Header_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Header.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Header.ctorParameters;
}
var Footer = /** @class */ (function () {
    function Footer() {
    }
    Footer.decorators = [
        { type: Component, args: [{
                    selector: 'ay-footer',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    Footer.ctorParameters = function () { return []; };
    return Footer;
}());
export { Footer };
function Footer_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Footer.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Footer.ctorParameters;
}
var PrimeTemplate = /** @class */ (function () {
    function PrimeTemplate(template) {
        this.template = template;
    }
    /**
     * @return {?}
     */
    PrimeTemplate.prototype.getType = /**
     * @return {?}
     */
    function () {
        if (this.type) {
            console.log('Defining a pTemplate with type property is deprecated use pTemplate="type" instead.');
            return this.type;
        }
        else {
            return this.name;
        }
    };
    PrimeTemplate.decorators = [
        { type: Directive, args: [{
                    selector: '[pTemplate]',
                    host: {}
                },] },
    ];
    /** @nocollapse */
    PrimeTemplate.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    PrimeTemplate.propDecorators = {
        "type": [{ type: Input },],
        "name": [{ type: Input, args: ['pTemplate',] },],
    };
    return PrimeTemplate;
}());
export { PrimeTemplate };
function PrimeTemplate_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PrimeTemplate.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PrimeTemplate.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PrimeTemplate.propDecorators;
    /** @type {?} */
    PrimeTemplate.prototype.type;
    /** @type {?} */
    PrimeTemplate.prototype.name;
    /** @type {?} */
    PrimeTemplate.prototype.template;
}
var TemplateWrapper = /** @class */ (function () {
    function TemplateWrapper(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    TemplateWrapper.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item,
            'index': this.index
        });
    };
    /**
     * @return {?}
     */
    TemplateWrapper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    TemplateWrapper.decorators = [
        { type: Directive, args: [{
                    selector: '[pTemplateWrapper]'
                },] },
    ];
    /** @nocollapse */
    TemplateWrapper.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    TemplateWrapper.propDecorators = {
        "item": [{ type: Input },],
        "index": [{ type: Input },],
        "templateRef": [{ type: Input, args: ['pTemplateWrapper',] },],
    };
    return TemplateWrapper;
}());
export { TemplateWrapper };
function TemplateWrapper_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TemplateWrapper.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TemplateWrapper.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TemplateWrapper.propDecorators;
    /** @type {?} */
    TemplateWrapper.prototype.item;
    /** @type {?} */
    TemplateWrapper.prototype.index;
    /** @type {?} */
    TemplateWrapper.prototype.templateRef;
    /** @type {?} */
    TemplateWrapper.prototype.view;
    /** @type {?} */
    TemplateWrapper.prototype.viewContainer;
}
var Column = /** @class */ (function () {
    function Column() {
        this.sortFunction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    Column.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'filter':
                    _this.filterTemplate = item.template;
                    break;
                case 'editor':
                    _this.editorTemplate = item.template;
                    break;
                default:
                    _this.bodyTemplate = item.template;
                    break;
            }
        });
    };
    Column.decorators = [
        { type: Component, args: [{
                    selector: 'ay-column',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Column.ctorParameters = function () { return []; };
    Column.propDecorators = {
        "field": [{ type: Input },],
        "sortField": [{ type: Input },],
        "header": [{ type: Input },],
        "footer": [{ type: Input },],
        "sortable": [{ type: Input },],
        "editable": [{ type: Input },],
        "filter": [{ type: Input },],
        "filterMatchMode": [{ type: Input },],
        "rowspan": [{ type: Input },],
        "colspan": [{ type: Input },],
        "style": [{ type: Input },],
        "styleClass": [{ type: Input },],
        "hidden": [{ type: Input },],
        "expander": [{ type: Input },],
        "selectionMode": [{ type: Input },],
        "filterPlaceholder": [{ type: Input },],
        "frozen": [{ type: Input },],
        "sortFunction": [{ type: Output },],
        "templates": [{ type: ContentChildren, args: [PrimeTemplate,] },],
        "template": [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Column;
}());
export { Column };
function Column_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Column.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Column.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Column.propDecorators;
    /** @type {?} */
    Column.prototype.field;
    /** @type {?} */
    Column.prototype.sortField;
    /** @type {?} */
    Column.prototype.header;
    /** @type {?} */
    Column.prototype.footer;
    /** @type {?} */
    Column.prototype.sortable;
    /** @type {?} */
    Column.prototype.editable;
    /** @type {?} */
    Column.prototype.filter;
    /** @type {?} */
    Column.prototype.filterMatchMode;
    /** @type {?} */
    Column.prototype.rowspan;
    /** @type {?} */
    Column.prototype.colspan;
    /** @type {?} */
    Column.prototype.style;
    /** @type {?} */
    Column.prototype.styleClass;
    /** @type {?} */
    Column.prototype.hidden;
    /** @type {?} */
    Column.prototype.expander;
    /** @type {?} */
    Column.prototype.selectionMode;
    /** @type {?} */
    Column.prototype.filterPlaceholder;
    /** @type {?} */
    Column.prototype.frozen;
    /** @type {?} */
    Column.prototype.sortFunction;
    /** @type {?} */
    Column.prototype.templates;
    /** @type {?} */
    Column.prototype.template;
    /** @type {?} */
    Column.prototype.headerTemplate;
    /** @type {?} */
    Column.prototype.bodyTemplate;
    /** @type {?} */
    Column.prototype.footerTemplate;
    /** @type {?} */
    Column.prototype.filterTemplate;
    /** @type {?} */
    Column.prototype.editorTemplate;
}
var Row = /** @class */ (function () {
    function Row() {
    }
    Row.decorators = [
        { type: Component, args: [{
                    selector: 'ay-row',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Row.ctorParameters = function () { return []; };
    Row.propDecorators = {
        "columns": [{ type: ContentChildren, args: [Column,] },],
    };
    return Row;
}());
export { Row };
function Row_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Row.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Row.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Row.propDecorators;
    /** @type {?} */
    Row.prototype.columns;
}
var HeaderColumnGroup = /** @class */ (function () {
    function HeaderColumnGroup() {
    }
    HeaderColumnGroup.decorators = [
        { type: Component, args: [{
                    selector: 'ay-headerColumnGroup',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    HeaderColumnGroup.ctorParameters = function () { return []; };
    HeaderColumnGroup.propDecorators = {
        "rows": [{ type: ContentChildren, args: [Row,] },],
    };
    return HeaderColumnGroup;
}());
export { HeaderColumnGroup };
function HeaderColumnGroup_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HeaderColumnGroup.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HeaderColumnGroup.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HeaderColumnGroup.propDecorators;
    /** @type {?} */
    HeaderColumnGroup.prototype.rows;
}
var FooterColumnGroup = /** @class */ (function () {
    function FooterColumnGroup() {
    }
    FooterColumnGroup.decorators = [
        { type: Component, args: [{
                    selector: 'ay-footerColumnGroup',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    FooterColumnGroup.ctorParameters = function () { return []; };
    FooterColumnGroup.propDecorators = {
        "rows": [{ type: ContentChildren, args: [Row,] },],
    };
    return FooterColumnGroup;
}());
export { FooterColumnGroup };
function FooterColumnGroup_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FooterColumnGroup.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FooterColumnGroup.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FooterColumnGroup.propDecorators;
    /** @type {?} */
    FooterColumnGroup.prototype.rows;
}
var ColumnBodyTemplateLoader = /** @class */ (function () {
    function ColumnBodyTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnBodyTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    /**
     * @return {?}
     */
    ColumnBodyTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnBodyTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'ay-columnBodyTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnBodyTemplateLoader.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    ColumnBodyTemplateLoader.propDecorators = {
        "column": [{ type: Input },],
        "rowData": [{ type: Input },],
        "rowIndex": [{ type: Input },],
    };
    return ColumnBodyTemplateLoader;
}());
export { ColumnBodyTemplateLoader };
function ColumnBodyTemplateLoader_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColumnBodyTemplateLoader.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColumnBodyTemplateLoader.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColumnBodyTemplateLoader.propDecorators;
    /** @type {?} */
    ColumnBodyTemplateLoader.prototype.column;
    /** @type {?} */
    ColumnBodyTemplateLoader.prototype.rowData;
    /** @type {?} */
    ColumnBodyTemplateLoader.prototype.rowIndex;
    /** @type {?} */
    ColumnBodyTemplateLoader.prototype.view;
    /** @type {?} */
    ColumnBodyTemplateLoader.prototype.viewContainer;
}
var ColumnHeaderTemplateLoader = /** @class */ (function () {
    function ColumnHeaderTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnHeaderTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    };
    /**
     * @return {?}
     */
    ColumnHeaderTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnHeaderTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'ay-columnHeaderTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnHeaderTemplateLoader.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    ColumnHeaderTemplateLoader.propDecorators = {
        "column": [{ type: Input },],
    };
    return ColumnHeaderTemplateLoader;
}());
export { ColumnHeaderTemplateLoader };
function ColumnHeaderTemplateLoader_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColumnHeaderTemplateLoader.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColumnHeaderTemplateLoader.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColumnHeaderTemplateLoader.propDecorators;
    /** @type {?} */
    ColumnHeaderTemplateLoader.prototype.column;
    /** @type {?} */
    ColumnHeaderTemplateLoader.prototype.view;
    /** @type {?} */
    ColumnHeaderTemplateLoader.prototype.viewContainer;
}
var ColumnFooterTemplateLoader = /** @class */ (function () {
    function ColumnFooterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnFooterTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    };
    /**
     * @return {?}
     */
    ColumnFooterTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnFooterTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'ay-columnFooterTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnFooterTemplateLoader.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    ColumnFooterTemplateLoader.propDecorators = {
        "column": [{ type: Input },],
    };
    return ColumnFooterTemplateLoader;
}());
export { ColumnFooterTemplateLoader };
function ColumnFooterTemplateLoader_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColumnFooterTemplateLoader.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColumnFooterTemplateLoader.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColumnFooterTemplateLoader.propDecorators;
    /** @type {?} */
    ColumnFooterTemplateLoader.prototype.column;
    /** @type {?} */
    ColumnFooterTemplateLoader.prototype.view;
    /** @type {?} */
    ColumnFooterTemplateLoader.prototype.viewContainer;
}
var ColumnFilterTemplateLoader = /** @class */ (function () {
    function ColumnFilterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnFilterTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.filterTemplate, {
            '\$implicit': this.column
        });
    };
    /**
     * @return {?}
     */
    ColumnFilterTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnFilterTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'ay-columnFilterTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnFilterTemplateLoader.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    ColumnFilterTemplateLoader.propDecorators = {
        "column": [{ type: Input },],
    };
    return ColumnFilterTemplateLoader;
}());
export { ColumnFilterTemplateLoader };
function ColumnFilterTemplateLoader_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColumnFilterTemplateLoader.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColumnFilterTemplateLoader.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColumnFilterTemplateLoader.propDecorators;
    /** @type {?} */
    ColumnFilterTemplateLoader.prototype.column;
    /** @type {?} */
    ColumnFilterTemplateLoader.prototype.view;
    /** @type {?} */
    ColumnFilterTemplateLoader.prototype.viewContainer;
}
var ColumnEditorTemplateLoader = /** @class */ (function () {
    function ColumnEditorTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnEditorTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.editorTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData
        });
    };
    /**
     * @return {?}
     */
    ColumnEditorTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnEditorTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'ay-columnEditorTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnEditorTemplateLoader.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    ColumnEditorTemplateLoader.propDecorators = {
        "column": [{ type: Input },],
        "rowData": [{ type: Input },],
    };
    return ColumnEditorTemplateLoader;
}());
export { ColumnEditorTemplateLoader };
function ColumnEditorTemplateLoader_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColumnEditorTemplateLoader.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColumnEditorTemplateLoader.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColumnEditorTemplateLoader.propDecorators;
    /** @type {?} */
    ColumnEditorTemplateLoader.prototype.column;
    /** @type {?} */
    ColumnEditorTemplateLoader.prototype.rowData;
    /** @type {?} */
    ColumnEditorTemplateLoader.prototype.view;
    /** @type {?} */
    ColumnEditorTemplateLoader.prototype.viewContainer;
}
var TemplateLoader = /** @class */ (function () {
    function TemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    TemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template, {
                '\$implicit': this.data
            });
        }
    };
    /**
     * @return {?}
     */
    TemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.view)
            this.view.destroy();
    };
    TemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'ay-templateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TemplateLoader.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    TemplateLoader.propDecorators = {
        "template": [{ type: Input },],
        "data": [{ type: Input },],
    };
    return TemplateLoader;
}());
export { TemplateLoader };
function TemplateLoader_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TemplateLoader.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TemplateLoader.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TemplateLoader.propDecorators;
    /** @type {?} */
    TemplateLoader.prototype.template;
    /** @type {?} */
    TemplateLoader.prototype.data;
    /** @type {?} */
    TemplateLoader.prototype.view;
    /** @type {?} */
    TemplateLoader.prototype.viewContainer;
}
var TreeSharedModule = /** @class */ (function () {
    function TreeSharedModule() {
    }
    TreeSharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader],
                    declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader]
                },] },
    ];
    /** @nocollapse */
    TreeSharedModule.ctorParameters = function () { return []; };
    return TreeSharedModule;
}());
export { TreeSharedModule };
function TreeSharedModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TreeSharedModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TreeSharedModule.ctorParameters;
}
//# sourceMappingURL=shared.js.map