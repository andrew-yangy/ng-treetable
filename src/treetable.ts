/**
 * Created by andrew.yang on 3/22/2017.
 */
import {
    NgModule, Component, Input, Output, EventEmitter, ContentChild, ContentChildren,
    QueryList, Renderer, SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Header, Footer, Column, TreeSharedModule} from './shared';
import {TreeNode} from "./model";
import {UITreeRow} from "./treerow";
import {PaginatorModule} from "./paginator";

@Component({
    selector: 'ay-treeTable',
    template: `
        <div [ngClass]="'ui-treetable ui-widget'" [ngStyle]="style" [class]="styleClass">
            <div class="ui-treetable-header ui-widget-header" *ngIf="header">
                <ng-content select="ay-header"></ng-content>
            </div>
            <div class="ui-treetable-tablewrapper">
                <table class="ui-widget-content">
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
                            <td *ngFor="let col of columns" [ngStyle]="col.style" [class]="col.styleClass" [ngClass]="{'ui-state-default':true}">
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
            <ay-paginator [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" styleClass="ui-paginator-bottom"
                (onPageChange)="paginate($event)" [rowsPerPageOptions]="rowsPerPageOptions" *ngIf="paginator"></ay-paginator>
            <div class="ui-treetable-footer ui-widget-header" *ngIf="footer">
                <ng-content select="ay-footer"></ng-content>
            </div>
        </div>
    `
})
export class TreeTable {
    @Input() paginator: boolean;

    @Input() rows: number;

    @Input() totalRecords: number;

    @Input() pageLinks: number = 5;

    @Input() rowsPerPageOptions: number[];

    @Input() first: number = 0;

    @Input() lazy: boolean;

    @Input() virtualScroll: boolean;

    @Input() value: TreeNode[];

    @Input() selectionMode: string;

    @Input() selection: any;

    @Input() style: any;

    @Input() styleClass: string;

    @Input() labelExpand: string = "Expand";

    @Input() labelCollapse: string = "Collapse";

    @Input() metaKeySelection: boolean = true;

    @Input() contextMenu: any;

    @Input() globalFilter: any;

    @Input() filterDelay: number = 300;

    @Input() immutable: boolean;

    @Output() selectionChange: EventEmitter<any> = new EventEmitter();

    @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();

    @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();

    @Output() onNodeExpand: EventEmitter<any> = new EventEmitter();

    @Output() onNodeCollapse: EventEmitter<any> = new EventEmitter();

    @Output() onContextMenuSelect: EventEmitter<any> = new EventEmitter();

    @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();

    @ContentChild(Header) header: Header;

    @ContentChild(Footer) footer: Footer;

    @ContentChildren(Column) columns: QueryList<Column>;

    public rowTouched: boolean;
    public loading: boolean;
    public stopFilterPropagation: boolean;
    public dataToRender: any[];
    public filterTimeout: any;
    public filteredValue: any[];
    globalFilterFunction: any;

    constructor(public renderer:Renderer) { }
    onRowClick(event: MouseEvent, node: TreeNode)
    {
        let eventTarget = (<Element> event.target);
        if(eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if(this.selectionMode) {
            if(node.selectable === false) {
                return;
            }

            let metaSelection = this.rowTouched ? false : this.metaKeySelection;
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);

            if(this.isCheckboxSelectionMode()) {
                if(selected) {
                    this.propagateSelectionDown(node, false);
                    if(node.parent) {
                        this.propagateSelectionUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({originalEvent: event, node: node});
                }
                else {
                    this.propagateSelectionDown(node, true);
                    if(node.parent) {
                        this.propagateSelectionUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({originalEvent: event, node: node});
                }
            }
            else {
                if(metaSelection) {
                    let metaKey = (event.metaKey||event.ctrlKey);

                    if(selected && metaKey) {
                        if(this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection.splice(index,1);
                            this.selectionChange.emit(this.selection);
                        }

                        this.onNodeUnselect.emit({originalEvent: event, node: node});
                    }
                    else {
                        if(this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if(this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection||[];
                            this.selection.push(node);
                            this.selectionChange.emit(this.selection);
                        }

                        this.onNodeSelect.emit({originalEvent: event, node: node});
                    }
                }
                else {
                    if(this.isSingleSelectionMode()) {
                        if(selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({originalEvent: event, node: node});
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({originalEvent: event, node: node});
                        }
                    }
                    else {
                        if(selected) {
                            this.selection.splice(index,1);
                            this.onNodeUnselect.emit({originalEvent: event, node: node});
                        }
                        else {
                            this.selection = this.selection||[];
                            this.selection.push(node);
                            this.onNodeSelect.emit({originalEvent: event, node: node});
                        }
                    }

                    this.selectionChange.emit(this.selection);
                }
            }
        }

        this.rowTouched = false;
    }

    onRowTouchEnd() {
        this.rowTouched = true;
    }

    onRowRightClick(event: MouseEvent, node: TreeNode) {
        if(this.contextMenu) {
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);

            if(!selected) {
                if(this.isSingleSelectionMode()) {
                    this.selection = node;
                }
                else if(this.isMultipleSelectionMode()) {
                    this.selection = [];
                    this.selection.push(node);
                    this.selectionChange.emit(this.selection);
                }

                this.selectionChange.emit(this.selection);
            }

            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({originalEvent: event, node: node});
        }
    }

    findIndexInSelection(node: TreeNode) {
        let index: number = -1;

        if(this.selectionMode && this.selection) {
            if(this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : - 1;
            }
            else {
                for(let i = 0; i  < this.selection.length; i++) {
                    if(this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }

        return index;
    }

    propagateSelectionUp(node: TreeNode, select: boolean) {
        if(node.children && node.children.length) {
            let selectedCount: number = 0;
            let childPartialSelected: boolean = false;
            for(let child of node.children) {
                if(this.isSelected(child)) {
                    selectedCount++;
                }
                else if(child.partialSelected) {
                    childPartialSelected = true;
                }
            }

            if(select && selectedCount == node.children.length) {
                this.selection = this.selection||[];
                this.selection.push(node);
                node.partialSelected = false;
            }
            else {
                if(!select) {
                    let index = this.findIndexInSelection(node);
                    if(index >= 0) {
                        this.selection.splice(index, 1);
                    }
                }

                if(childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }

        let parent = node.parent;
        if(parent) {
            this.propagateSelectionUp(parent, select);
        }
    }

    propagateSelectionDown(node: TreeNode, select: boolean) {
        let index = this.findIndexInSelection(node);

        if(select && index == -1) {
            this.selection = this.selection||[];
            this.selection.push(node);
        }
        else if(!select && index > -1) {
            this.selection.splice(index, 1);
        }

        node.partialSelected = false;

        if(node.children && node.children.length) {
            for(let child of node.children) {
                this.propagateSelectionDown(child, select);
            }
        }
    }

    isSelected(node: TreeNode) {
        return this.findIndexInSelection(node) != -1;
    }

    isSingleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'single';
    }

    isMultipleSelectionMode() {
        return this.selectionMode && this.selectionMode == 'multiple';
    }

    isCheckboxSelectionMode() {
        return this.selectionMode && this.selectionMode == 'checkbox';
    }

    hasFooter() {
        if(this.columns) {
            let columnsArr = this.columns.toArray();
            for(let i = 0; i < columnsArr.length; i++) {
                if(columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    }

    ngOnInit() {
        if(this.immutable) this.handleDataChange();
    }
    ngAfterViewInit() {
        if(this.globalFilter) {
            this.globalFilterFunction = this.renderer.listen(this.globalFilter, 'keyup', () => {
                this.filterTimeout = setTimeout(() => {
                    this.filter();
                    this.filterTimeout = null;
                }, this.filterDelay);
            });
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['value'] && this.value &&!this.immutable){
            this.handleDataChange();
        }
    }
    shownColumns() {
        return this.columns.filter(col=>!col.hidden)
    }
    handleDataChange() {
        if(this.paginator) {
            this.updatePaginator();
        }
        this.updateDataToRender(this.filteredValue||this.value);
    }

    updatePaginator() {
        //total records
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length: 0);
        //first
        if(this.totalRecords && this.first >= this.totalRecords) {
            let numberOfPages = Math.ceil(this.totalRecords/this.rows);
            this.first = Math.max((numberOfPages-1) * this.rows, 0);
        }
    }

    paginate(event) {
        this.first = event.first;
        this.rows = event.rows;

        if(this.lazy) {
            this.stopFilterPropagation = true;
        }
        else {
            this.updateDataToRender(this.filteredValue||this.value);
        }

    }

    updateDataToRender(datasource) {
        if((this.paginator || this.virtualScroll) && datasource) {
            this.dataToRender = [];
            let startIndex: number = this.lazy ? 0 : this.first;
            let endIndex: number = this.virtualScroll ? this.first + this.rows * 2 : startIndex + this.rows;

            for(let i = startIndex; i < endIndex; i++) {
                if(i >= datasource.length) {
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
    filterFields(object) {
        let res = false;
        this.columns.toArray().map(col=>{
            if(!res) {
                res = object[col.field].toLowerCase().includes(this.globalFilter.value.toLowerCase())
            }
        });
        return res;
    }
    filterChildren(children,parent) {
        let res = false;
        if(children){
            children.map(child=>{
                let _fields = this.filterFields(child.data);
                let _children = this.filterChildren(child.children,child);
                res = _fields || _children || res;
            });
            parent.expanded = res;
        }
        return res;
    }
    isFiltered(node) {
        return this.filterFields(node.data) || this.filterChildren(node.children,node)
    }
    filter() {
        this.first = 0;

        this.filteredValue = this.value.filter(val=>{
            return this.filterFields(val.data) || this.filterChildren(val.children,val);
        });

        if(this.filteredValue.length === this.value.length) {
            this.filteredValue = null;
        }

        if(this.paginator) {
            this.totalRecords = this.filteredValue ? this.filteredValue.length: this.value ? this.value.length: 0;
        }

        this.updateDataToRender(this.filteredValue||this.value);
    }
    filterConstraints = {

        startsWith(value, filter): boolean {
            if(filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if(value === undefined || value === null) {
                return false;
            }

            let filterValue = filter.toLowerCase();
            return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
        },

        contains(value, filter): boolean {
            if(filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }

            if(value === undefined || value === null) {
                return false;
            }

            return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        },

        endsWith(value, filter): boolean {
            if(filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if(value === undefined || value === null) {
                return false;
            }

            let filterValue = filter.toString().toLowerCase();
            return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
        },

        equals(value, filter): boolean {
            if(filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }

            if(value === undefined || value === null) {
                return false;
            }

            return value.toString().toLowerCase() == filter.toString().toLowerCase();
        },

        in(value, filter: any[]): boolean {
            if(filter === undefined || filter === null || filter.length === 0) {
                return true;
            }

            if(value === undefined || value === null) {
                return false;
            }

            for(let i = 0; i < filter.length; i++) {
                if(filter[i] === value)
                    return true;
            }

            return false;
        }
    };

    resolveFieldData(data: any, field: string): any {
        if(data && field) {
            if(field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields: string[] = field.split('.');
                let value = data;
                for(let i = 0, len = fields.length; i < len; ++i) {
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
    ngOnDestroy() {
        //remove event listener
        if(this.globalFilterFunction) {
            this.globalFilterFunction();
        }
    }
}

@NgModule({
    imports: [CommonModule,TreeSharedModule,PaginatorModule],
    exports: [TreeTable,TreeSharedModule,PaginatorModule],
    declarations: [TreeTable,UITreeRow]
})
export class TreeTableModule { }