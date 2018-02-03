/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, EventEmitter, Directive, ViewContainerRef, Input, Output, ContentChildren, ContentChild, TemplateRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export class Header {
}
Header.decorators = [
    { type: Component, args: [{
                selector: 'ay-header',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
Header.ctorParameters = () => [];
function Header_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Header.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Header.ctorParameters;
}
export class Footer {
}
Footer.decorators = [
    { type: Component, args: [{
                selector: 'ay-footer',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
Footer.ctorParameters = () => [];
function Footer_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Footer.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Footer.ctorParameters;
}
export class PrimeTemplate {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
    /**
     * @return {?}
     */
    getType() {
        if (this.type) {
            console.log('Defining a pTemplate with type property is deprecated use pTemplate="type" instead.');
            return this.type;
        }
        else {
            return this.name;
        }
    }
}
PrimeTemplate.decorators = [
    { type: Directive, args: [{
                selector: '[pTemplate]',
                host: {}
            },] },
];
/** @nocollapse */
PrimeTemplate.ctorParameters = () => [
    { type: TemplateRef, },
];
PrimeTemplate.propDecorators = {
    "type": [{ type: Input },],
    "name": [{ type: Input, args: ['pTemplate',] },],
};
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
export class TemplateWrapper {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item,
            'index': this.index
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.view.destroy();
    }
}
TemplateWrapper.decorators = [
    { type: Directive, args: [{
                selector: '[pTemplateWrapper]'
            },] },
];
/** @nocollapse */
TemplateWrapper.ctorParameters = () => [
    { type: ViewContainerRef, },
];
TemplateWrapper.propDecorators = {
    "item": [{ type: Input },],
    "index": [{ type: Input },],
    "templateRef": [{ type: Input, args: ['pTemplateWrapper',] },],
};
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
export class Column {
    constructor() {
        this.sortFunction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'body':
                    this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'filter':
                    this.filterTemplate = item.template;
                    break;
                case 'editor':
                    this.editorTemplate = item.template;
                    break;
                default:
                    this.bodyTemplate = item.template;
                    break;
            }
        });
    }
}
Column.decorators = [
    { type: Component, args: [{
                selector: 'ay-column',
                template: ``
            },] },
];
/** @nocollapse */
Column.ctorParameters = () => [];
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
export class Row {
}
Row.decorators = [
    { type: Component, args: [{
                selector: 'ay-row',
                template: ``
            },] },
];
/** @nocollapse */
Row.ctorParameters = () => [];
Row.propDecorators = {
    "columns": [{ type: ContentChildren, args: [Column,] },],
};
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
export class HeaderColumnGroup {
}
HeaderColumnGroup.decorators = [
    { type: Component, args: [{
                selector: 'ay-headerColumnGroup',
                template: ``
            },] },
];
/** @nocollapse */
HeaderColumnGroup.ctorParameters = () => [];
HeaderColumnGroup.propDecorators = {
    "rows": [{ type: ContentChildren, args: [Row,] },],
};
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
export class FooterColumnGroup {
}
FooterColumnGroup.decorators = [
    { type: Component, args: [{
                selector: 'ay-footerColumnGroup',
                template: ``
            },] },
];
/** @nocollapse */
FooterColumnGroup.ctorParameters = () => [];
FooterColumnGroup.propDecorators = {
    "rows": [{ type: ContentChildren, args: [Row,] },],
};
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
export class ColumnBodyTemplateLoader {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.view.destroy();
    }
}
ColumnBodyTemplateLoader.decorators = [
    { type: Component, args: [{
                selector: 'ay-columnBodyTemplateLoader',
                template: ``
            },] },
];
/** @nocollapse */
ColumnBodyTemplateLoader.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ColumnBodyTemplateLoader.propDecorators = {
    "column": [{ type: Input },],
    "rowData": [{ type: Input },],
    "rowIndex": [{ type: Input },],
};
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
export class ColumnHeaderTemplateLoader {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.view.destroy();
    }
}
ColumnHeaderTemplateLoader.decorators = [
    { type: Component, args: [{
                selector: 'ay-columnHeaderTemplateLoader',
                template: ``
            },] },
];
/** @nocollapse */
ColumnHeaderTemplateLoader.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ColumnHeaderTemplateLoader.propDecorators = {
    "column": [{ type: Input },],
};
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
export class ColumnFooterTemplateLoader {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.view.destroy();
    }
}
ColumnFooterTemplateLoader.decorators = [
    { type: Component, args: [{
                selector: 'ay-columnFooterTemplateLoader',
                template: ``
            },] },
];
/** @nocollapse */
ColumnFooterTemplateLoader.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ColumnFooterTemplateLoader.propDecorators = {
    "column": [{ type: Input },],
};
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
export class ColumnFilterTemplateLoader {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.filterTemplate, {
            '\$implicit': this.column
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.view.destroy();
    }
}
ColumnFilterTemplateLoader.decorators = [
    { type: Component, args: [{
                selector: 'ay-columnFilterTemplateLoader',
                template: ``
            },] },
];
/** @nocollapse */
ColumnFilterTemplateLoader.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ColumnFilterTemplateLoader.propDecorators = {
    "column": [{ type: Input },],
};
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
export class ColumnEditorTemplateLoader {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.editorTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.view.destroy();
    }
}
ColumnEditorTemplateLoader.decorators = [
    { type: Component, args: [{
                selector: 'ay-columnEditorTemplateLoader',
                template: ``
            },] },
];
/** @nocollapse */
ColumnEditorTemplateLoader.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ColumnEditorTemplateLoader.propDecorators = {
    "column": [{ type: Input },],
    "rowData": [{ type: Input },],
};
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
export class TemplateLoader {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template, {
                '\$implicit': this.data
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.view)
            this.view.destroy();
    }
}
TemplateLoader.decorators = [
    { type: Component, args: [{
                selector: 'ay-templateLoader',
                template: ``
            },] },
];
/** @nocollapse */
TemplateLoader.ctorParameters = () => [
    { type: ViewContainerRef, },
];
TemplateLoader.propDecorators = {
    "template": [{ type: Input },],
    "data": [{ type: Input },],
};
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
export class TreeSharedModule {
}
TreeSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader],
                declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader]
            },] },
];
/** @nocollapse */
TreeSharedModule.ctorParameters = () => [];
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