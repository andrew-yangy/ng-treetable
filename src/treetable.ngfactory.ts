import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './treetable';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from './shared';
import * as import4 from './paginator';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/i18n/tokens';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
import * as import9 from '@angular/core/src/linker/view';
import * as import10 from '@angular/core/src/linker/view_utils';
import * as import11 from '@angular/core/src/render/api';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_type';
import * as import15 from '@angular/core/src/change_detection/constants';
import * as import16 from '@angular/core/src/linker/component_factory';
import * as import17 from '@angular/core/src/linker/view_container';
import * as import18 from './shared.ngfactory';
import * as import19 from '../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import20 from '../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import21 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import22 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import23 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from '@angular/common/src/directives/ng_class';
import * as import28 from '@angular/common/src/directives/ng_style';
import * as import29 from '@angular/core/src/security';
import * as import30 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import31 from '@angular/common/src/directives/ng_for';
import * as import32 from './treerow';
import * as import33 from './treerow.ngfactory';
import * as import34 from './paginator.ngfactory';
class TreeTableModuleInjector extends import0.NgModuleInjector<import1.TreeTableModule> {
  _CommonModule_0:import2.CommonModule;
  _TreeSharedModule_1:import3.TreeSharedModule;
  _PaginatorModule_2:import4.PaginatorModule;
  _TreeTableModule_3:import1.TreeTableModule;
  __NgLocalization_4:import5.NgLocaleLocalization;
  constructor(parent:import6.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_4():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == null)) { (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import7.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  createInternal():import1.TreeTableModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._TreeSharedModule_1 = new import3.TreeSharedModule();
    this._PaginatorModule_2 = new import4.PaginatorModule();
    this._TreeTableModule_3 = new import1.TreeTableModule();
    return this._TreeTableModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.TreeSharedModule)) { return this._TreeSharedModule_1; }
    if ((token === import4.PaginatorModule)) { return this._PaginatorModule_2; }
    if ((token === import1.TreeTableModule)) { return this._TreeTableModule_3; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const TreeTableModuleNgFactory:import0.NgModuleFactory<import1.TreeTableModule> = new import0.NgModuleFactory(TreeTableModuleInjector,import1.TreeTableModule);
export class Wrapper_TreeTable {
  /*private*/ _eventHandler:Function;
  context:import1.TreeTable;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
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
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  subscription5:any;
  subscription6:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import1.TreeTable(p0);
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
    this._expr_10 = import8.UNINITIALIZED;
    this._expr_11 = import8.UNINITIALIZED;
    this._expr_12 = import8.UNINITIALIZED;
    this._expr_13 = import8.UNINITIALIZED;
    this._expr_14 = import8.UNINITIALIZED;
    this._expr_15 = import8.UNINITIALIZED;
    this._expr_16 = import8.UNINITIALIZED;
    this._expr_17 = import8.UNINITIALIZED;
    this._expr_18 = import8.UNINITIALIZED;
    this._expr_19 = import8.UNINITIALIZED;
  }
  ngOnDetach(view:import9.AppView<any>,componentView:import9.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
    (this.subscription5 && this.subscription5.unsubscribe());
    (this.subscription6 && this.subscription6.unsubscribe());
  }
  check_paginator(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.paginator = currValue;
      this._changes['paginator'] = new import8.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_rows(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.rows = currValue;
      this._changes['rows'] = new import8.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_totalRecords(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.totalRecords = currValue;
      this._changes['totalRecords'] = new import8.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_pageLinks(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.pageLinks = currValue;
      this._changes['pageLinks'] = new import8.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_rowsPerPageOptions(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.rowsPerPageOptions = currValue;
      this._changes['rowsPerPageOptions'] = new import8.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_first(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.first = currValue;
      this._changes['first'] = new import8.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_lazy(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.lazy = currValue;
      this._changes['lazy'] = new import8.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_virtualScroll(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.virtualScroll = currValue;
      this._changes['virtualScroll'] = new import8.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._changes['value'] = new import8.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_selectionMode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.selectionMode = currValue;
      this._changes['selectionMode'] = new import8.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_selection(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.selection = currValue;
      this._changes['selection'] = new import8.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  check_style(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.style = currValue;
      this._changes['style'] = new import8.SimpleChange(this._expr_11,currValue);
      this._expr_11 = currValue;
    }
  }
  check_styleClass(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.styleClass = currValue;
      this._changes['styleClass'] = new import8.SimpleChange(this._expr_12,currValue);
      this._expr_12 = currValue;
    }
  }
  check_labelExpand(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.labelExpand = currValue;
      this._changes['labelExpand'] = new import8.SimpleChange(this._expr_13,currValue);
      this._expr_13 = currValue;
    }
  }
  check_labelCollapse(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.labelCollapse = currValue;
      this._changes['labelCollapse'] = new import8.SimpleChange(this._expr_14,currValue);
      this._expr_14 = currValue;
    }
  }
  check_metaKeySelection(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_15,currValue))) {
      this._changed = true;
      this.context.metaKeySelection = currValue;
      this._changes['metaKeySelection'] = new import8.SimpleChange(this._expr_15,currValue);
      this._expr_15 = currValue;
    }
  }
  check_contextMenu(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_16,currValue))) {
      this._changed = true;
      this.context.contextMenu = currValue;
      this._changes['contextMenu'] = new import8.SimpleChange(this._expr_16,currValue);
      this._expr_16 = currValue;
    }
  }
  check_globalFilter(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_17,currValue))) {
      this._changed = true;
      this.context.globalFilter = currValue;
      this._changes['globalFilter'] = new import8.SimpleChange(this._expr_17,currValue);
      this._expr_17 = currValue;
    }
  }
  check_filterDelay(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_18,currValue))) {
      this._changed = true;
      this.context.filterDelay = currValue;
      this._changes['filterDelay'] = new import8.SimpleChange(this._expr_18,currValue);
      this._expr_18 = currValue;
    }
  }
  check_immutable(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import10.checkBinding(throwOnChange,this._expr_19,currValue))) {
      this._changed = true;
      this.context.immutable = currValue;
      this._changes['immutable'] = new import8.SimpleChange(this._expr_19,currValue);
      this._expr_19 = currValue;
    }
  }
  ngDoCheck(view:import9.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) {
      if (changed) {
        this.context.ngOnChanges(this._changes);
        this._changes = {};
      }
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
    }
    return changed;
  }
  checkHost(view:import9.AppView<any>,componentView:import9.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import9.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean,emit5:boolean,emit6:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.selectionChange.subscribe(_eventHandler.bind(view,'selectionChange'))); }
    if (emit1) { (this.subscription1 = this.context.onNodeSelect.subscribe(_eventHandler.bind(view,'onNodeSelect'))); }
    if (emit2) { (this.subscription2 = this.context.onNodeUnselect.subscribe(_eventHandler.bind(view,'onNodeUnselect'))); }
    if (emit3) { (this.subscription3 = this.context.onNodeExpand.subscribe(_eventHandler.bind(view,'onNodeExpand'))); }
    if (emit4) { (this.subscription4 = this.context.onNodeCollapse.subscribe(_eventHandler.bind(view,'onNodeCollapse'))); }
    if (emit5) { (this.subscription5 = this.context.onContextMenuSelect.subscribe(_eventHandler.bind(view,'onContextMenuSelect'))); }
    if (emit6) { (this.subscription6 = this.context.onLazyLoad.subscribe(_eventHandler.bind(view,'onLazyLoad'))); }
  }
}
var renderType_TreeTable_Host:import11.RenderComponentType = import10.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{});
class View_TreeTable_Host0 extends import9.AppView<any> {
  _el_0:any;
  compView_0:import9.AppView<import1.TreeTable>;
  _TreeTable_0_3:Wrapper_TreeTable;
  _query_Header_0_0:import13.QueryList<any>;
  _query_Footer_0_1:import13.QueryList<any>;
  _query_Column_0_2:import13.QueryList<any>;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeTable_Host0,renderType_TreeTable_Host,import14.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.selectOrCreateRenderHostElement(this.renderer,'ay-treeTable',import10.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TreeTable0(this.viewUtils,this,0,this._el_0);
    this._TreeTable_0_3 = new Wrapper_TreeTable(this.renderer);
    this._query_Header_0_0 = new import13.QueryList<any>();
    this._query_Footer_0_1 = new import13.QueryList<any>();
    this._query_Column_0_2 = new import13.QueryList<any>();
    this.compView_0.create(this._TreeTable_0_3.context);
    this._query_Header_0_0.reset(([] as any[]));
    this._TreeTable_0_3.context.header = this._query_Header_0_0.first;
    this._query_Footer_0_1.reset(([] as any[]));
    this._TreeTable_0_3.context.footer = this._query_Footer_0_1.first;
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import16.ComponentRef_<any>(0,this,this._el_0,this._TreeTable_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.TreeTable) && (0 === requestNodeIndex))) { return this._TreeTable_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TreeTable_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { if (this._query_Column_0_2.dirty) {
      this._query_Column_0_2.reset(([] as any[]));
      this._TreeTable_0_3.context.columns = this._query_Column_0_2;
      this._query_Column_0_2.notifyOnChanges();
    } }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._TreeTable_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TreeTable_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 0) && (ngContentIndex == 1))) {  }
  }
}
export const TreeTableNgFactory:import16.ComponentFactory<import1.TreeTable> = new import16.ComponentFactory<import1.TreeTable>('ay-treeTable',View_TreeTable_Host0,import1.TreeTable);
const styles_TreeTable:any[] = ([] as any[]);
class View_TreeTable1 extends import9.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable1,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'div',new import10.InlineArray2(2,'class','ui-treetable-header ui-widget-header'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this.projectNodes(this._el_0,0);
    this._text_2 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_TreeTable3 extends import9.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable3,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'span',new import10.InlineArray2(2,'class','ui-column-title'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import10.inlineInterpolate(1,'',this.parentView.context.$implicit.header,'');
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_TreeTable4 extends import9.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _vc_2:import17.ViewContainer;
  compView_2:import9.AppView<import3.ColumnHeaderTemplateLoader>;
  _ColumnHeaderTemplateLoader_2_5:import18.Wrapper_ColumnHeaderTemplateLoader;
  _text_3:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable4,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'span',new import10.InlineArray2(2,'class','ui-column-title'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                                    ',(null as any));
    this._el_2 = import10.createRenderElement(this.renderer,this._el_0,'ay-columnHeaderTemplateLoader',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_2 = new import17.ViewContainer(2,0,this,this._el_2);
    this.compView_2 = new import18.View_ColumnHeaderTemplateLoader0(this.viewUtils,this,2,this._el_2);
    this._ColumnHeaderTemplateLoader_2_5 = new import18.Wrapper_ColumnHeaderTemplateLoader(this._vc_2.vcRef);
    this.compView_2.create(this._ColumnHeaderTemplateLoader_2_5.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n                                ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ColumnHeaderTemplateLoader) && (2 === requestNodeIndex))) { return this._ColumnHeaderTemplateLoader_2_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.$implicit;
    this._ColumnHeaderTemplateLoader_2_5.check_column(currVal_2_0_0,throwOnChange,false);
    this._ColumnHeaderTemplateLoader_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this.compView_2.destroy();
    this._ColumnHeaderTemplateLoader_2_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_TreeTable2 extends import9.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import19.Wrapper_NgClass;
  _NgStyle_0_4:import20.Wrapper_NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import17.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import21.Wrapper_NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import17.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import21.Wrapper_NgIf;
  _text_5:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable2,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_14 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'th',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import19.Wrapper_NgClass(this.parentView.parentView.injectorGet(import22.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import23.KeyValueDiffers,this.parentView.parentIndex),new import24.ElementRef(this._el_0),this.renderer);
    this._NgStyle_0_4 = new import20.Wrapper_NgStyle(this.parentView.parentView.injectorGet(import23.KeyValueDiffers,this.parentView.parentIndex),new import24.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                                ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import17.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import25.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import21.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n                                ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_4 = new import17.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import25.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import21.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import26.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import25.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import26.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import27.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgClass_0_3.context; }
    if (((token === import28.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgStyle_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit.styleClass;
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = 'ui-state-default ui-unselectable-text';
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit.style;
    this._NgStyle_0_4.check_ngStyle(currVal_0_1_0,throwOnChange,false);
    this._NgStyle_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:boolean = !this.context.$implicit.headerTemplate;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_4_0_0:any = this.context.$implicit.headerTemplate;
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    const currVal_14:any = (this.context.$implicit.hidden? 'none': 'table-cell');
    if (import10.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_0,'display',((this.viewUtils.sanitizer.sanitize(import29.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import29.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import9.AppView<any> {
    if ((nodeIndex == 2)) { return new View_TreeTable3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 4)) { return new View_TreeTable4(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
}
class View_TreeTable7 extends import9.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable7,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'span',new import10.InlineArray2(2,'class','ui-column-footer'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import10.inlineInterpolate(1,'',this.parentView.context.$implicit.footer,'');
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_TreeTable8 extends import9.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _vc_2:import17.ViewContainer;
  compView_2:import9.AppView<import3.ColumnFooterTemplateLoader>;
  _ColumnFooterTemplateLoader_2_5:import18.Wrapper_ColumnFooterTemplateLoader;
  _text_3:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable8,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'span',new import10.InlineArray2(2,'class','ui-column-footer'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                                    ',(null as any));
    this._el_2 = import10.createRenderElement(this.renderer,this._el_0,'ay-columnFooterTemplateLoader',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_2 = new import17.ViewContainer(2,0,this,this._el_2);
    this.compView_2 = new import18.View_ColumnFooterTemplateLoader0(this.viewUtils,this,2,this._el_2);
    this._ColumnFooterTemplateLoader_2_5 = new import18.Wrapper_ColumnFooterTemplateLoader(this._vc_2.vcRef);
    this.compView_2.create(this._ColumnFooterTemplateLoader_2_5.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n                                ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ColumnFooterTemplateLoader) && (2 === requestNodeIndex))) { return this._ColumnFooterTemplateLoader_2_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.$implicit;
    this._ColumnFooterTemplateLoader_2_5.check_column(currVal_2_0_0,throwOnChange,false);
    this._ColumnFooterTemplateLoader_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this.compView_2.destroy();
    this._ColumnFooterTemplateLoader_2_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_TreeTable6 extends import9.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import19.Wrapper_NgClass;
  _NgStyle_0_4:import20.Wrapper_NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import17.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import21.Wrapper_NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import17.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import21.Wrapper_NgIf;
  _text_5:any;
  _map_14:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable6,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_14 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-state-default': p0};
    });
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'td',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import19.Wrapper_NgClass(this.parentView.parentView.parentView.injectorGet(import22.IterableDiffers,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import23.KeyValueDiffers,this.parentView.parentView.parentIndex),new import24.ElementRef(this._el_0),this.renderer);
    this._NgStyle_0_4 = new import20.Wrapper_NgStyle(this.parentView.parentView.parentView.injectorGet(import23.KeyValueDiffers,this.parentView.parentView.parentIndex),new import24.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                                ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import17.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import25.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import21.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n                                ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_4 = new import17.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import25.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import21.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import26.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import25.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import26.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import27.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgClass_0_3.context; }
    if (((token === import28.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._NgStyle_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit.styleClass;
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_14(true);
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit.style;
    this._NgStyle_0_4.check_ngStyle(currVal_0_1_0,throwOnChange,false);
    this._NgStyle_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:boolean = !this.context.$implicit.footerTemplate;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_4_0_0:any = this.context.$implicit.footerTemplate;
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import9.AppView<any> {
    if ((nodeIndex == 2)) { return new View_TreeTable7(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 4)) { return new View_TreeTable8(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
}
class View_TreeTable5 extends import9.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import17.ViewContainer;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import30.Wrapper_NgFor;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable5,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'tfoot',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_2 = import10.createRenderElement(this.renderer,this._el_0,'tr',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                            ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_4 = new import17.ViewContainer(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import25.TemplateRef_(this,4,this._anchor_4);
    this._NgFor_4_6 = new import30.Wrapper_NgFor(this._vc_4.vcRef,this._TemplateRef_4_5,this.parentView.parentView.injectorGet(import22.IterableDiffers,this.parentView.parentIndex),this.parentView.ref);
    this._text_5 = this.renderer.createText(this._el_2,'\n                        ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import31.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = this.parentView.context.columns;
    this._NgFor_4_6.check_ngForOf(currVal_4_0_0,throwOnChange,false);
    this._NgFor_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import9.AppView<any> {
    if ((nodeIndex == 4)) { return new View_TreeTable6(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
}
class View_TreeTable9 extends import9.AppView<any> {
  _el_0:any;
  compView_0:import9.AppView<import32.UITreeRow>;
  _NgClass_0_3:import19.Wrapper_NgClass;
  _UITreeRow_0_4:import33.Wrapper_UITreeRow;
  _map_4:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable9,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_4 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-treetable-even': p0,
        'ui-treetable-odd': p1
      }
      ;
    });
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'tbody',new import10.InlineArray4(4,'class','ui-widget-content','pTreeRow',''),(null as any));
    this.compView_0 = new import33.View_UITreeRow0(this.viewUtils,this,0,this._el_0);
    this._NgClass_0_3 = new import19.Wrapper_NgClass(this.parentView.parentView.injectorGet(import22.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import23.KeyValueDiffers,this.parentView.parentIndex),new import24.ElementRef(this._el_0),this.renderer);
    this._UITreeRow_0_4 = new import33.Wrapper_UITreeRow(this.parentView.parentView.injectorGet(import1.TreeTable,this.parentView.parentIndex));
    this.compView_0.create(this._UITreeRow_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.NgClass) && (0 === requestNodeIndex))) { return this._NgClass_0_3.context; }
    if (((token === import32.UITreeRow) && (0 === requestNodeIndex))) { return this._UITreeRow_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'ui-widget-content';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_4(this.context.even,this.context.odd);
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.$implicit;
    this._UITreeRow_0_4.check_node(currVal_0_1_0,throwOnChange,false);
    const currVal_0_1_1:any = 0;
    this._UITreeRow_0_4.check_level(currVal_0_1_1,throwOnChange,false);
    const currVal_0_1_2:any = this.parentView.context.labelExpand;
    this._UITreeRow_0_4.check_labelExpand(currVal_0_1_2,throwOnChange,false);
    const currVal_0_1_3:any = this.parentView.context.labelCollapse;
    this._UITreeRow_0_4.check_labelCollapse(currVal_0_1_3,throwOnChange,false);
    this._UITreeRow_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_TreeTable10 extends import9.AppView<any> {
  _el_0:any;
  compView_0:import9.AppView<import4.Paginator>;
  _Paginator_0_3:import34.Wrapper_Paginator;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable10,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'ay-paginator',new import10.InlineArray2(2,'styleClass','ui-paginator-bottom'),(null as any));
    this.compView_0 = new import34.View_Paginator0(this.viewUtils,this,0,this._el_0);
    this._Paginator_0_3 = new import34.Wrapper_Paginator();
    this.compView_0.create(this._Paginator_0_3.context);
    var disposable_0:Function = import10.subscribeToRenderElement(this,this._el_0,new import10.InlineArray2(2,'onPageChange',(null as any)),this.eventHandler(this.handleEvent_0));
    this._Paginator_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import4.Paginator) && (0 === requestNodeIndex))) { return this._Paginator_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.pageLinks;
    this._Paginator_0_3.check_pageLinkSize(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = 'ui-paginator-bottom';
    this._Paginator_0_3.check_styleClass(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.rowsPerPageOptions;
    this._Paginator_0_3.check_rowsPerPageOptions(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.totalRecords;
    this._Paginator_0_3.check_totalRecords(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.first;
    this._Paginator_0_3.check_first(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.parentView.context.rows;
    this._Paginator_0_3.check_rows(currVal_0_0_5,throwOnChange,false);
    this._Paginator_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Paginator_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'onPageChange')) {
      const pd_sub_0:any = ((<any>this.parentView.context.paginate($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_TreeTable11 extends import9.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import17.ViewContainer) {
    super(View_TreeTable11,renderType_TreeTable,import14.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    this._el_0 = import10.createRenderElement(this.renderer,(null as any),'div',new import10.InlineArray2(2,'class','ui-treetable-footer ui-widget-header'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this.projectNodes(this._el_0,1);
    this._text_2 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_TreeTable:import11.RenderComponentType = import10.createRenderComponentType('',2,import12.ViewEncapsulation.None,styles_TreeTable,{});
export class View_TreeTable0 extends import9.AppView<import1.TreeTable> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import19.Wrapper_NgClass;
  _NgStyle_1_4:import20.Wrapper_NgStyle;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import17.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import21.Wrapper_NgIf;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _vc_13:import17.ViewContainer;
  _TemplateRef_13_5:any;
  _NgFor_13_6:import30.Wrapper_NgFor;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _vc_17:import17.ViewContainer;
  _TemplateRef_17_5:any;
  _NgIf_17_6:import21.Wrapper_NgIf;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _vc_19:import17.ViewContainer;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import30.Wrapper_NgFor;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _anchor_23:any;
  /*private*/ _vc_23:import17.ViewContainer;
  _TemplateRef_23_5:any;
  _NgIf_23_6:import21.Wrapper_NgIf;
  _text_24:any;
  _anchor_25:any;
  /*private*/ _vc_25:import17.ViewContainer;
  _TemplateRef_25_5:any;
  _NgIf_25_6:import21.Wrapper_NgIf;
  _text_26:any;
  _text_27:any;
  constructor(viewUtils:import10.ViewUtils,parentView:import9.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeTable0,renderType_TreeTable,import14.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import15.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import16.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import10.createRenderElement(this.renderer,parentRenderNode,'div',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_1_3 = new import19.Wrapper_NgClass(this.parentView.injectorGet(import22.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import23.KeyValueDiffers,this.parentIndex),new import24.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import20.Wrapper_NgStyle(this.parentView.injectorGet(import23.KeyValueDiffers,this.parentIndex),new import24.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import17.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import25.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import21.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_5 = import10.createRenderElement(this.renderer,this._el_1,'div',new import10.InlineArray2(2,'class','ui-treetable-tablewrapper'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n                ',(null as any));
    this._el_7 = import10.createRenderElement(this.renderer,this._el_5,'table',new import10.InlineArray2(2,'class','ui-widget-content'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n                    ',(null as any));
    this._el_9 = import10.createRenderElement(this.renderer,this._el_7,'thead',import10.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n                        ',(null as any));
    this._el_11 = import10.createRenderElement(this.renderer,this._el_9,'tr',new import10.InlineArray2(2,'class','ui-state-default'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n                            ',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11,(null as any));
    this._vc_13 = new import17.ViewContainer(13,11,this,this._anchor_13);
    this._TemplateRef_13_5 = new import25.TemplateRef_(this,13,this._anchor_13);
    this._NgFor_13_6 = new import30.Wrapper_NgFor(this._vc_13.vcRef,this._TemplateRef_13_5,this.parentView.injectorGet(import22.IterableDiffers,this.parentIndex),this.ref);
    this._text_14 = this.renderer.createText(this._el_11,'\n                        ',(null as any));
    this._text_15 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._text_16 = this.renderer.createText(this._el_7,'\n                    ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_7,(null as any));
    this._vc_17 = new import17.ViewContainer(17,7,this,this._anchor_17);
    this._TemplateRef_17_5 = new import25.TemplateRef_(this,17,this._anchor_17);
    this._NgIf_17_6 = new import21.Wrapper_NgIf(this._vc_17.vcRef,this._TemplateRef_17_5);
    this._text_18 = this.renderer.createText(this._el_7,'\n                    ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_7,(null as any));
    this._vc_19 = new import17.ViewContainer(19,7,this,this._anchor_19);
    this._TemplateRef_19_5 = new import25.TemplateRef_(this,19,this._anchor_19);
    this._NgFor_19_6 = new import30.Wrapper_NgFor(this._vc_19.vcRef,this._TemplateRef_19_5,this.parentView.injectorGet(import22.IterableDiffers,this.parentIndex),this.ref);
    this._text_20 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._text_21 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._text_22 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_23 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_23 = new import17.ViewContainer(23,1,this,this._anchor_23);
    this._TemplateRef_23_5 = new import25.TemplateRef_(this,23,this._anchor_23);
    this._NgIf_23_6 = new import21.Wrapper_NgIf(this._vc_23.vcRef,this._TemplateRef_23_5);
    this._text_24 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_25 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_25 = new import17.ViewContainer(25,1,this,this._anchor_25);
    this._TemplateRef_25_5 = new import25.TemplateRef_(this,25,this._anchor_25);
    this._NgIf_25_6 = new import21.Wrapper_NgIf(this._vc_25.vcRef,this._TemplateRef_25_5);
    this._text_26 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._anchor_23,
      this._text_24,
      this._anchor_25,
      this._text_26,
      this._text_27
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import26.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import25.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import31.NgFor) && (13 === requestNodeIndex))) { return this._NgFor_13_6.context; }
    if (((token === import25.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import26.NgIf) && (17 === requestNodeIndex))) { return this._NgIf_17_6.context; }
    if (((token === import25.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import31.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    if (((token === import25.TemplateRef) && (23 === requestNodeIndex))) { return this._TemplateRef_23_5; }
    if (((token === import26.NgIf) && (23 === requestNodeIndex))) { return this._NgIf_23_6.context; }
    if (((token === import25.TemplateRef) && (25 === requestNodeIndex))) { return this._TemplateRef_25_5; }
    if (((token === import26.NgIf) && (25 === requestNodeIndex))) { return this._NgIf_25_6.context; }
    if (((token === import27.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._NgClass_1_3.context; }
    if (((token === import28.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._NgStyle_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.styleClass;
    this._NgClass_1_3.check_klass(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = 'ui-treetable ui-widget';
    this._NgClass_1_3.check_ngClass(currVal_1_0_1,throwOnChange,false);
    this._NgClass_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_1_1_0:any = this.context.style;
    this._NgStyle_1_4.check_ngStyle(currVal_1_1_0,throwOnChange,false);
    this._NgStyle_1_4.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = this.context.header;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_13_0_0:any = this.context.columns;
    this._NgFor_13_6.check_ngForOf(currVal_13_0_0,throwOnChange,false);
    this._NgFor_13_6.ngDoCheck(this,this._anchor_13,throwOnChange);
    const currVal_17_0_0:any = this.context.hasFooter();
    this._NgIf_17_6.check_ngIf(currVal_17_0_0,throwOnChange,false);
    this._NgIf_17_6.ngDoCheck(this,this._anchor_17,throwOnChange);
    const currVal_19_0_0:any = this.context.dataToRender;
    this._NgFor_19_6.check_ngForOf(currVal_19_0_0,throwOnChange,false);
    this._NgFor_19_6.ngDoCheck(this,this._anchor_19,throwOnChange);
    const currVal_23_0_0:any = this.context.paginator;
    this._NgIf_23_6.check_ngIf(currVal_23_0_0,throwOnChange,false);
    this._NgIf_23_6.ngDoCheck(this,this._anchor_23,throwOnChange);
    const currVal_25_0_0:any = this.context.footer;
    this._NgIf_25_6.check_ngIf(currVal_25_0_0,throwOnChange,false);
    this._NgIf_25_6.ngDoCheck(this,this._anchor_25,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_13.detectChangesInNestedViews(throwOnChange);
    this._vc_17.detectChangesInNestedViews(throwOnChange);
    this._vc_19.detectChangesInNestedViews(throwOnChange);
    this._vc_23.detectChangesInNestedViews(throwOnChange);
    this._vc_25.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_13.destroyNestedViews();
    this._vc_17.destroyNestedViews();
    this._vc_19.destroyNestedViews();
    this._vc_23.destroyNestedViews();
    this._vc_25.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import9.AppView<any> {
    if ((nodeIndex == 3)) { return new View_TreeTable1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 13)) { return new View_TreeTable2(this.viewUtils,this,13,this._anchor_13,this._vc_13); }
    if ((nodeIndex == 17)) { return new View_TreeTable5(this.viewUtils,this,17,this._anchor_17,this._vc_17); }
    if ((nodeIndex == 19)) { return new View_TreeTable9(this.viewUtils,this,19,this._anchor_19,this._vc_19); }
    if ((nodeIndex == 23)) { return new View_TreeTable10(this.viewUtils,this,23,this._anchor_23,this._vc_23); }
    if ((nodeIndex == 25)) { return new View_TreeTable11(this.viewUtils,this,25,this._anchor_25,this._vc_25); }
    return (null as any);
  }
}