import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './shared';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/common/src/localization';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@angular/core/src/i18n/tokens';
import * as import6 from '@angular/core/src/linker/view';
import * as import7 from '@angular/core/src/change_detection/change_detection_util';
import * as import8 from '@angular/core/src/linker/view_utils';
import * as import9 from '@angular/core/src/render/api';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/view_type';
import * as import12 from '@angular/core/src/change_detection/constants';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '@angular/core/src/linker/view_container';
class TreeSharedModuleInjector extends import0.NgModuleInjector<import1.TreeSharedModule> {
  _CommonModule_0:import2.CommonModule;
  _TreeSharedModule_1:import1.TreeSharedModule;
  __NgLocalization_2:import3.NgLocaleLocalization;
  constructor(parent:import4.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  createInternal():import1.TreeSharedModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._TreeSharedModule_1 = new import1.TreeSharedModule();
    return this._TreeSharedModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.TreeSharedModule)) { return this._TreeSharedModule_1; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const TreeSharedModuleNgFactory:import0.NgModuleFactory<import1.TreeSharedModule> = new import0.NgModuleFactory(TreeSharedModuleInjector,import1.TreeSharedModule);
export class Wrapper_Header {
  /*private*/ _eventHandler:Function;
  context:import1.Header;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import1.Header();
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_Footer {
  /*private*/ _eventHandler:Function;
  context:import1.Footer;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import1.Footer();
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_Column {
  /*private*/ _eventHandler:Function;
  context:import1.Column;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import1.Column();
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_field(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.field = currValue;
      this._expr_0 = currValue;
    }
  }
  check_sortField(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.sortField = currValue;
      this._expr_1 = currValue;
    }
  }
  check_header(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.header = currValue;
      this._expr_2 = currValue;
    }
  }
  check_footer(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.footer = currValue;
      this._expr_3 = currValue;
    }
  }
  check_sortable(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.sortable = currValue;
      this._expr_4 = currValue;
    }
  }
  check_editable(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.editable = currValue;
      this._expr_5 = currValue;
    }
  }
  check_filter(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.filter = currValue;
      this._expr_6 = currValue;
    }
  }
  check_filterMatchMode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.filterMatchMode = currValue;
      this._expr_7 = currValue;
    }
  }
  check_rowspan(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.rowspan = currValue;
      this._expr_8 = currValue;
    }
  }
  check_colspan(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.colspan = currValue;
      this._expr_9 = currValue;
    }
  }
  check_style(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.style = currValue;
      this._expr_10 = currValue;
    }
  }
  check_styleClass(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.styleClass = currValue;
      this._expr_11 = currValue;
    }
  }
  check_hidden(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.hidden = currValue;
      this._expr_12 = currValue;
    }
  }
  check_expander(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.expander = currValue;
      this._expr_13 = currValue;
    }
  }
  check_selectionMode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.selectionMode = currValue;
      this._expr_14 = currValue;
    }
  }
  check_filterPlaceholder(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_15,currValue))) {
      this._changed = true;
      this.context.filterPlaceholder = currValue;
      this._expr_15 = currValue;
    }
  }
  check_frozen(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_16,currValue))) {
      this._changed = true;
      this.context.frozen = currValue;
      this._expr_16 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.sortFunction.subscribe(_eventHandler.bind(view,'sortFunction'))); }
  }
}
export class Wrapper_TemplateWrapper {
  /*private*/ _eventHandler:Function;
  context:import1.TemplateWrapper;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.TemplateWrapper(p0);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_item(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.item = currValue;
      this._expr_0 = currValue;
    }
  }
  check_index(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.index = currValue;
      this._expr_1 = currValue;
    }
  }
  check_templateRef(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.templateRef = currValue;
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_ColumnHeaderTemplateLoader {
  /*private*/ _eventHandler:Function;
  context:import1.ColumnHeaderTemplateLoader;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.ColumnHeaderTemplateLoader(p0);
    this._expr_0 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.column = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_ColumnBodyTemplateLoader {
  /*private*/ _eventHandler:Function;
  context:import1.ColumnBodyTemplateLoader;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.ColumnBodyTemplateLoader(p0);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.column = currValue;
      this._expr_0 = currValue;
    }
  }
  check_rowData(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.rowData = currValue;
      this._expr_1 = currValue;
    }
  }
  check_rowIndex(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.rowIndex = currValue;
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_ColumnFooterTemplateLoader {
  /*private*/ _eventHandler:Function;
  context:import1.ColumnFooterTemplateLoader;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.ColumnFooterTemplateLoader(p0);
    this._expr_0 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.column = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_ColumnFilterTemplateLoader {
  /*private*/ _eventHandler:Function;
  context:import1.ColumnFilterTemplateLoader;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.ColumnFilterTemplateLoader(p0);
    this._expr_0 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.column = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_PrimeTemplate {
  /*private*/ _eventHandler:Function;
  context:import1.PrimeTemplate;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.PrimeTemplate(p0);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_type(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.type = currValue;
      this._expr_0 = currValue;
    }
  }
  check_name(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.name = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_TemplateLoader {
  /*private*/ _eventHandler:Function;
  context:import1.TemplateLoader;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.TemplateLoader(p0);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_template(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.template = currValue;
      this._expr_0 = currValue;
    }
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_Row {
  /*private*/ _eventHandler:Function;
  context:import1.Row;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import1.Row();
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_HeaderColumnGroup {
  /*private*/ _eventHandler:Function;
  context:import1.HeaderColumnGroup;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import1.HeaderColumnGroup();
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_FooterColumnGroup {
  /*private*/ _eventHandler:Function;
  context:import1.FooterColumnGroup;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import1.FooterColumnGroup();
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
export class Wrapper_ColumnEditorTemplateLoader {
  /*private*/ _eventHandler:Function;
  context:import1.ColumnEditorTemplateLoader;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import1.ColumnEditorTemplateLoader(p0);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
  }
  ngOnDetach(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.column = currValue;
      this._expr_0 = currValue;
    }
  }
  check_rowData(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.rowData = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import6.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import6.AppView<any>,componentView:import6.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import6.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Header_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_Header_Host0 extends import6.AppView<any> {
  _el_0:any;
  compView_0:import6.AppView<import1.Header>;
  _Header_0_3:Wrapper_Header;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Header_Host0,renderType_Header_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-header',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Header0(this.viewUtils,this,0,this._el_0);
    this._Header_0_3 = new Wrapper_Header();
    this.compView_0.create(this._Header_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._Header_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.Header) && (0 === requestNodeIndex))) { return this._Header_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const HeaderNgFactory:import13.ComponentFactory<import1.Header> = new import13.ComponentFactory<import1.Header>('ay-header',View_Header_Host0,import1.Header);
const styles_Header:any[] = ([] as any[]);
var renderType_Header:import9.RenderComponentType = import8.createRenderComponentType('',1,import10.ViewEncapsulation.None,styles_Header,{});
export class View_Header0 extends import6.AppView<import1.Header> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Header0,renderType_Header,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.projectNodes(parentRenderNode,0);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_Footer_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_Footer_Host0 extends import6.AppView<any> {
  _el_0:any;
  compView_0:import6.AppView<import1.Footer>;
  _Footer_0_3:Wrapper_Footer;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Footer_Host0,renderType_Footer_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-footer',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Footer0(this.viewUtils,this,0,this._el_0);
    this._Footer_0_3 = new Wrapper_Footer();
    this.compView_0.create(this._Footer_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._Footer_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.Footer) && (0 === requestNodeIndex))) { return this._Footer_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Footer_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const FooterNgFactory:import13.ComponentFactory<import1.Footer> = new import13.ComponentFactory<import1.Footer>('ay-footer',View_Footer_Host0,import1.Footer);
const styles_Footer:any[] = ([] as any[]);
var renderType_Footer:import9.RenderComponentType = import8.createRenderComponentType('',1,import10.ViewEncapsulation.None,styles_Footer,{});
export class View_Footer0 extends import6.AppView<import1.Footer> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Footer0,renderType_Footer,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.projectNodes(parentRenderNode,0);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_Column_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_Column_Host0 extends import6.AppView<any> {
  _el_0:any;
  compView_0:import6.AppView<import1.Column>;
  _Column_0_3:Wrapper_Column;
  _query_PrimeTemplate_0_0:import14.QueryList<any>;
  _query_TemplateRef_0_1:import14.QueryList<any>;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Column_Host0,renderType_Column_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-column',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Column0(this.viewUtils,this,0,this._el_0);
    this._Column_0_3 = new Wrapper_Column();
    this._query_PrimeTemplate_0_0 = new import14.QueryList<any>();
    this._query_TemplateRef_0_1 = new import14.QueryList<any>();
    this.compView_0.create(this._Column_0_3.context);
    this._query_TemplateRef_0_1.reset(([] as any[]));
    this._Column_0_3.context.template = this._query_TemplateRef_0_1.first;
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._Column_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.Column) && (0 === requestNodeIndex))) { return this._Column_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Column_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) {
      if (this._query_PrimeTemplate_0_0.dirty) {
        this._query_PrimeTemplate_0_0.reset(([] as any[]));
        this._Column_0_3.context.templates = this._query_PrimeTemplate_0_0;
        this._query_PrimeTemplate_0_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Column_0_3.context.ngAfterContentInit(); }
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Column_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ColumnNgFactory:import13.ComponentFactory<import1.Column> = new import13.ComponentFactory<import1.Column>('ay-column',View_Column_Host0,import1.Column);
const styles_Column:any[] = ([] as any[]);
var renderType_Column:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_Column,{});
export class View_Column0 extends import6.AppView<import1.Column> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Column0,renderType_Column,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_ColumnHeaderTemplateLoader_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_ColumnHeaderTemplateLoader_Host0 extends import6.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import6.AppView<import1.ColumnHeaderTemplateLoader>;
  _ColumnHeaderTemplateLoader_0_5:Wrapper_ColumnHeaderTemplateLoader;
  _el_1:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnHeaderTemplateLoader_Host0,renderType_ColumnHeaderTemplateLoader_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-columnHeaderTemplateLoader',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_ColumnHeaderTemplateLoader0(this.viewUtils,this,0,this._el_0);
    this._ColumnHeaderTemplateLoader_0_5 = new Wrapper_ColumnHeaderTemplateLoader(this._vc_0.vcRef);
    this.compView_0.create(this._ColumnHeaderTemplateLoader_0_5.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._ColumnHeaderTemplateLoader_0_5.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.ColumnHeaderTemplateLoader) && (0 === requestNodeIndex))) { return this._ColumnHeaderTemplateLoader_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ColumnHeaderTemplateLoader_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._ColumnHeaderTemplateLoader_0_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
}
export const ColumnHeaderTemplateLoaderNgFactory:import13.ComponentFactory<import1.ColumnHeaderTemplateLoader> = new import13.ComponentFactory<import1.ColumnHeaderTemplateLoader>('ay-columnHeaderTemplateLoader',View_ColumnHeaderTemplateLoader_Host0,import1.ColumnHeaderTemplateLoader);
const styles_ColumnHeaderTemplateLoader:any[] = ([] as any[]);
var renderType_ColumnHeaderTemplateLoader:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ColumnHeaderTemplateLoader,{});
export class View_ColumnHeaderTemplateLoader0 extends import6.AppView<import1.ColumnHeaderTemplateLoader> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnHeaderTemplateLoader0,renderType_ColumnHeaderTemplateLoader,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_ColumnBodyTemplateLoader_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_ColumnBodyTemplateLoader_Host0 extends import6.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import6.AppView<import1.ColumnBodyTemplateLoader>;
  _ColumnBodyTemplateLoader_0_5:Wrapper_ColumnBodyTemplateLoader;
  _el_1:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnBodyTemplateLoader_Host0,renderType_ColumnBodyTemplateLoader_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-columnBodyTemplateLoader',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_ColumnBodyTemplateLoader0(this.viewUtils,this,0,this._el_0);
    this._ColumnBodyTemplateLoader_0_5 = new Wrapper_ColumnBodyTemplateLoader(this._vc_0.vcRef);
    this.compView_0.create(this._ColumnBodyTemplateLoader_0_5.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._ColumnBodyTemplateLoader_0_5.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.ColumnBodyTemplateLoader) && (0 === requestNodeIndex))) { return this._ColumnBodyTemplateLoader_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ColumnBodyTemplateLoader_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._ColumnBodyTemplateLoader_0_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
}
export const ColumnBodyTemplateLoaderNgFactory:import13.ComponentFactory<import1.ColumnBodyTemplateLoader> = new import13.ComponentFactory<import1.ColumnBodyTemplateLoader>('ay-columnBodyTemplateLoader',View_ColumnBodyTemplateLoader_Host0,import1.ColumnBodyTemplateLoader);
const styles_ColumnBodyTemplateLoader:any[] = ([] as any[]);
var renderType_ColumnBodyTemplateLoader:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ColumnBodyTemplateLoader,{});
export class View_ColumnBodyTemplateLoader0 extends import6.AppView<import1.ColumnBodyTemplateLoader> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnBodyTemplateLoader0,renderType_ColumnBodyTemplateLoader,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_ColumnFooterTemplateLoader_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_ColumnFooterTemplateLoader_Host0 extends import6.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import6.AppView<import1.ColumnFooterTemplateLoader>;
  _ColumnFooterTemplateLoader_0_5:Wrapper_ColumnFooterTemplateLoader;
  _el_1:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnFooterTemplateLoader_Host0,renderType_ColumnFooterTemplateLoader_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-columnFooterTemplateLoader',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_ColumnFooterTemplateLoader0(this.viewUtils,this,0,this._el_0);
    this._ColumnFooterTemplateLoader_0_5 = new Wrapper_ColumnFooterTemplateLoader(this._vc_0.vcRef);
    this.compView_0.create(this._ColumnFooterTemplateLoader_0_5.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._ColumnFooterTemplateLoader_0_5.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.ColumnFooterTemplateLoader) && (0 === requestNodeIndex))) { return this._ColumnFooterTemplateLoader_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ColumnFooterTemplateLoader_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._ColumnFooterTemplateLoader_0_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
}
export const ColumnFooterTemplateLoaderNgFactory:import13.ComponentFactory<import1.ColumnFooterTemplateLoader> = new import13.ComponentFactory<import1.ColumnFooterTemplateLoader>('ay-columnFooterTemplateLoader',View_ColumnFooterTemplateLoader_Host0,import1.ColumnFooterTemplateLoader);
const styles_ColumnFooterTemplateLoader:any[] = ([] as any[]);
var renderType_ColumnFooterTemplateLoader:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ColumnFooterTemplateLoader,{});
export class View_ColumnFooterTemplateLoader0 extends import6.AppView<import1.ColumnFooterTemplateLoader> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnFooterTemplateLoader0,renderType_ColumnFooterTemplateLoader,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_ColumnFilterTemplateLoader_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_ColumnFilterTemplateLoader_Host0 extends import6.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import6.AppView<import1.ColumnFilterTemplateLoader>;
  _ColumnFilterTemplateLoader_0_5:Wrapper_ColumnFilterTemplateLoader;
  _el_1:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnFilterTemplateLoader_Host0,renderType_ColumnFilterTemplateLoader_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-columnFilterTemplateLoader',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_ColumnFilterTemplateLoader0(this.viewUtils,this,0,this._el_0);
    this._ColumnFilterTemplateLoader_0_5 = new Wrapper_ColumnFilterTemplateLoader(this._vc_0.vcRef);
    this.compView_0.create(this._ColumnFilterTemplateLoader_0_5.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._ColumnFilterTemplateLoader_0_5.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.ColumnFilterTemplateLoader) && (0 === requestNodeIndex))) { return this._ColumnFilterTemplateLoader_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ColumnFilterTemplateLoader_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._ColumnFilterTemplateLoader_0_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
}
export const ColumnFilterTemplateLoaderNgFactory:import13.ComponentFactory<import1.ColumnFilterTemplateLoader> = new import13.ComponentFactory<import1.ColumnFilterTemplateLoader>('ay-columnFilterTemplateLoader',View_ColumnFilterTemplateLoader_Host0,import1.ColumnFilterTemplateLoader);
const styles_ColumnFilterTemplateLoader:any[] = ([] as any[]);
var renderType_ColumnFilterTemplateLoader:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ColumnFilterTemplateLoader,{});
export class View_ColumnFilterTemplateLoader0 extends import6.AppView<import1.ColumnFilterTemplateLoader> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnFilterTemplateLoader0,renderType_ColumnFilterTemplateLoader,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_TemplateLoader_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_TemplateLoader_Host0 extends import6.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import6.AppView<import1.TemplateLoader>;
  _TemplateLoader_0_5:Wrapper_TemplateLoader;
  _el_1:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TemplateLoader_Host0,renderType_TemplateLoader_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-templateLoader',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_TemplateLoader0(this.viewUtils,this,0,this._el_0);
    this._TemplateLoader_0_5 = new Wrapper_TemplateLoader(this._vc_0.vcRef);
    this.compView_0.create(this._TemplateLoader_0_5.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._TemplateLoader_0_5.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.TemplateLoader) && (0 === requestNodeIndex))) { return this._TemplateLoader_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TemplateLoader_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._TemplateLoader_0_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
}
export const TemplateLoaderNgFactory:import13.ComponentFactory<import1.TemplateLoader> = new import13.ComponentFactory<import1.TemplateLoader>('ay-templateLoader',View_TemplateLoader_Host0,import1.TemplateLoader);
const styles_TemplateLoader:any[] = ([] as any[]);
var renderType_TemplateLoader:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_TemplateLoader,{});
export class View_TemplateLoader0 extends import6.AppView<import1.TemplateLoader> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TemplateLoader0,renderType_TemplateLoader,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_Row_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_Row_Host0 extends import6.AppView<any> {
  _el_0:any;
  compView_0:import6.AppView<import1.Row>;
  _Row_0_3:Wrapper_Row;
  _query_Column_0_0:import14.QueryList<any>;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Row_Host0,renderType_Row_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-row',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Row0(this.viewUtils,this,0,this._el_0);
    this._Row_0_3 = new Wrapper_Row();
    this._query_Column_0_0 = new import14.QueryList<any>();
    this.compView_0.create(this._Row_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._Row_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.Row) && (0 === requestNodeIndex))) { return this._Row_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Row_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { if (this._query_Column_0_0.dirty) {
      this._query_Column_0_0.reset(([] as any[]));
      this._Row_0_3.context.columns = this._query_Column_0_0;
      this._query_Column_0_0.notifyOnChanges();
    } }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const RowNgFactory:import13.ComponentFactory<import1.Row> = new import13.ComponentFactory<import1.Row>('ay-row',View_Row_Host0,import1.Row);
const styles_Row:any[] = ([] as any[]);
var renderType_Row:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_Row,{});
export class View_Row0 extends import6.AppView<import1.Row> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Row0,renderType_Row,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_HeaderColumnGroup_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_HeaderColumnGroup_Host0 extends import6.AppView<any> {
  _el_0:any;
  compView_0:import6.AppView<import1.HeaderColumnGroup>;
  _HeaderColumnGroup_0_3:Wrapper_HeaderColumnGroup;
  _query_Row_0_0:import14.QueryList<any>;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderColumnGroup_Host0,renderType_HeaderColumnGroup_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-headerColumnGroup',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HeaderColumnGroup0(this.viewUtils,this,0,this._el_0);
    this._HeaderColumnGroup_0_3 = new Wrapper_HeaderColumnGroup();
    this._query_Row_0_0 = new import14.QueryList<any>();
    this.compView_0.create(this._HeaderColumnGroup_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._HeaderColumnGroup_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.HeaderColumnGroup) && (0 === requestNodeIndex))) { return this._HeaderColumnGroup_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderColumnGroup_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { if (this._query_Row_0_0.dirty) {
      this._query_Row_0_0.reset(([] as any[]));
      this._HeaderColumnGroup_0_3.context.rows = this._query_Row_0_0;
      this._query_Row_0_0.notifyOnChanges();
    } }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeaderColumnGroupNgFactory:import13.ComponentFactory<import1.HeaderColumnGroup> = new import13.ComponentFactory<import1.HeaderColumnGroup>('ay-headerColumnGroup',View_HeaderColumnGroup_Host0,import1.HeaderColumnGroup);
const styles_HeaderColumnGroup:any[] = ([] as any[]);
var renderType_HeaderColumnGroup:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_HeaderColumnGroup,{});
export class View_HeaderColumnGroup0 extends import6.AppView<import1.HeaderColumnGroup> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderColumnGroup0,renderType_HeaderColumnGroup,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_FooterColumnGroup_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_FooterColumnGroup_Host0 extends import6.AppView<any> {
  _el_0:any;
  compView_0:import6.AppView<import1.FooterColumnGroup>;
  _FooterColumnGroup_0_3:Wrapper_FooterColumnGroup;
  _query_Row_0_0:import14.QueryList<any>;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FooterColumnGroup_Host0,renderType_FooterColumnGroup_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-footerColumnGroup',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_FooterColumnGroup0(this.viewUtils,this,0,this._el_0);
    this._FooterColumnGroup_0_3 = new Wrapper_FooterColumnGroup();
    this._query_Row_0_0 = new import14.QueryList<any>();
    this.compView_0.create(this._FooterColumnGroup_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._FooterColumnGroup_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.FooterColumnGroup) && (0 === requestNodeIndex))) { return this._FooterColumnGroup_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._FooterColumnGroup_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { if (this._query_Row_0_0.dirty) {
      this._query_Row_0_0.reset(([] as any[]));
      this._FooterColumnGroup_0_3.context.rows = this._query_Row_0_0;
      this._query_Row_0_0.notifyOnChanges();
    } }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const FooterColumnGroupNgFactory:import13.ComponentFactory<import1.FooterColumnGroup> = new import13.ComponentFactory<import1.FooterColumnGroup>('ay-footerColumnGroup',View_FooterColumnGroup_Host0,import1.FooterColumnGroup);
const styles_FooterColumnGroup:any[] = ([] as any[]);
var renderType_FooterColumnGroup:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_FooterColumnGroup,{});
export class View_FooterColumnGroup0 extends import6.AppView<import1.FooterColumnGroup> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FooterColumnGroup0,renderType_FooterColumnGroup,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}
var renderType_ColumnEditorTemplateLoader_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_ColumnEditorTemplateLoader_Host0 extends import6.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import15.ViewContainer;
  compView_0:import6.AppView<import1.ColumnEditorTemplateLoader>;
  _ColumnEditorTemplateLoader_0_5:Wrapper_ColumnEditorTemplateLoader;
  _el_1:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnEditorTemplateLoader_Host0,renderType_ColumnEditorTemplateLoader_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-columnEditorTemplateLoader',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import15.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_ColumnEditorTemplateLoader0(this.viewUtils,this,0,this._el_0);
    this._ColumnEditorTemplateLoader_0_5 = new Wrapper_ColumnEditorTemplateLoader(this._vc_0.vcRef);
    this.compView_0.create(this._ColumnEditorTemplateLoader_0_5.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._ColumnEditorTemplateLoader_0_5.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.ColumnEditorTemplateLoader) && (0 === requestNodeIndex))) { return this._ColumnEditorTemplateLoader_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ColumnEditorTemplateLoader_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
    this._ColumnEditorTemplateLoader_0_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
}
export const ColumnEditorTemplateLoaderNgFactory:import13.ComponentFactory<import1.ColumnEditorTemplateLoader> = new import13.ComponentFactory<import1.ColumnEditorTemplateLoader>('ay-columnEditorTemplateLoader',View_ColumnEditorTemplateLoader_Host0,import1.ColumnEditorTemplateLoader);
const styles_ColumnEditorTemplateLoader:any[] = ([] as any[]);
var renderType_ColumnEditorTemplateLoader:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_ColumnEditorTemplateLoader,{});
export class View_ColumnEditorTemplateLoader0 extends import6.AppView<import1.ColumnEditorTemplateLoader> {
  constructor(viewUtils:import8.ViewUtils,parentView:import6.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ColumnEditorTemplateLoader0,renderType_ColumnEditorTemplateLoader,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}