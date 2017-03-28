import * as import0 from './treerow';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './treetable';
import * as import10 from '../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import11 from '../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/common/src/directives/ng_class';
import * as import17 from '@angular/common/src/directives/ng_style';
import * as import18 from './shared';
import * as import19 from './shared.ngfactory';
import * as import20 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from '@angular/core/src/security';
import * as import24 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import25 from '@angular/common/src/directives/ng_for';
export class Wrapper_UITreeRow {
  /*private*/ _eventHandler:Function;
  context:import0.UITreeRow;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.UITreeRow(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_node(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.node = currValue;
      this._changes['node'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_parentNode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.parentNode = currValue;
      this._changes['parentNode'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_level(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.level = currValue;
      this._changes['level'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_labelExpand(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.labelExpand = currValue;
      this._changes['labelExpand'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_labelCollapse(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.labelCollapse = currValue;
      this._changes['labelCollapse'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
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
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_UITreeRow_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_UITreeRow_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.UITreeRow>;
  _UITreeRow_0_3:Wrapper_UITreeRow;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UITreeRow_Host0,renderType_UITreeRow_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'div',new import3.InlineArray2(2,'pTreeRow',''),rootSelector,(null as any));
    this.compView_0 = new View_UITreeRow0(this.viewUtils,this,0,this._el_0);
    this._UITreeRow_0_3 = new Wrapper_UITreeRow(this.injectorGet(import9.TreeTable,this.parentIndex));
    this.compView_0.create(this._UITreeRow_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._UITreeRow_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.UITreeRow) && (0 === requestNodeIndex))) { return this._UITreeRow_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._UITreeRow_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const UITreeRowNgFactory:import8.ComponentFactory<import0.UITreeRow> = new import8.ComponentFactory<import0.UITreeRow>('[pTreeRow]',View_UITreeRow_Host0,import0.UITreeRow);
const styles_UITreeRow:any[] = ([] as any[]);
class View_UITreeRow3 extends import2.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import10.Wrapper_NgClass;
  _NgStyle_0_4:import11.Wrapper_NgStyle;
  _text_1:any;
  /*private*/ _expr_4:any;
  _map_5:any;
  _map_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow3,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
    this._map_5 = import3.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'fa-caret-down': p0,
        'fa-caret-right': p1
      }
      ;
    });
    this._map_6 = import3.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'margin-left': p0,
        visibility: p1
      }
      ;
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray4(4,'class','ui-treetable-toggler fa fa-fw ui-c','href','#'),(null as any));
    this._NgClass_0_3 = new import10.Wrapper_NgClass(this.parentView.parentView.parentView.injectorGet(import13.IterableDiffers,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import14.KeyValueDiffers,this.parentView.parentView.parentIndex),new import15.ElementRef(this._el_0),this.renderer);
    this._NgStyle_0_4 = new import11.Wrapper_NgStyle(this.parentView.parentView.parentView.injectorGet(import14.KeyValueDiffers,this.parentView.parentView.parentIndex),new import15.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgClass_0_3.context; }
    if (((token === import17.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgStyle_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'ui-treetable-toggler fa fa-fw ui-c';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_5(this.parentView.parentView.parentView.context.node.expanded,!this.parentView.parentView.parentView.context.node.expanded);
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this._map_6(((this.parentView.parentView.parentView.context.level * 16) + 'px'),(this.parentView.parentView.parentView.context.isLeaf()? 'hidden': 'visible'));
    this._NgStyle_0_4.check_ngStyle(currVal_0_1_0,throwOnChange,false);
    this._NgStyle_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_4:any = (this.parentView.parentView.parentView.context.node.expanded? this.parentView.parentView.parentView.context.labelCollapse: this.parentView.parentView.parentView.context.labelExpand);
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_0,'title',currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.parentView.context.toggle($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_UITreeRow4 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _NgClass_4_3:import10.Wrapper_NgClass;
  _text_5:any;
  _text_6:any;
  _map_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow4,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_8 = import3.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'fa-check': p0,
        'fa-minus': p1
      }
      ;
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','ui-chkbox ui-treetable-checkbox'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','ui-chkbox-box ui-widget ui-corner-all ui-state-default'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'span',new import3.InlineArray2(2,'class','ui-chkbox-icon ui-c fa'),(null as any));
    this._NgClass_4_3 = new import10.Wrapper_NgClass(this.parentView.parentView.parentView.injectorGet(import13.IterableDiffers,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import14.KeyValueDiffers,this.parentView.parentView.parentIndex),new import15.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_2,'\n                    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.NgClass) && (4 === requestNodeIndex))) { return this._NgClass_4_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = 'ui-chkbox-icon ui-c fa';
    this._NgClass_4_3.check_klass(currVal_4_0_0,throwOnChange,false);
    const currVal_4_0_1:any = this._map_8(this.parentView.parentView.parentView.context.isSelected(),this.parentView.parentView.parentView.context.node.partialSelected);
    this._NgClass_4_3.check_ngClass(currVal_4_0_1,throwOnChange,false);
    this._NgClass_4_3.ngDoCheck(this,this._el_4,throwOnChange);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_UITreeRow5 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow5,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.parentView.parentView.context.resolveFieldData(this.parentView.parentView.parentView.context.node.data,this.parentView.context.$implicit.field),'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_UITreeRow6 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import12.ViewContainer;
  compView_0:import2.AppView<import18.ColumnBodyTemplateLoader>;
  _ColumnBodyTemplateLoader_0_5:import19.Wrapper_ColumnBodyTemplateLoader;
  _el_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow6,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ay-columnBodyTemplateLoader',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_0 = new import12.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new import19.View_ColumnBodyTemplateLoader0(this.viewUtils,this,0,this._el_0);
    this._ColumnBodyTemplateLoader_0_5 = new import19.Wrapper_ColumnBodyTemplateLoader(this._vc_0.vcRef);
    this.compView_0.create(this._ColumnBodyTemplateLoader_0_5.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.ColumnBodyTemplateLoader) && (0 === requestNodeIndex))) { return this._ColumnBodyTemplateLoader_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.$implicit;
    this._ColumnBodyTemplateLoader_0_5.check_column(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.parentView.parentView.context.node;
    this._ColumnBodyTemplateLoader_0_5.check_rowData(currVal_0_0_1,throwOnChange,false);
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
class View_UITreeRow2 extends import2.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import11.Wrapper_NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import20.Wrapper_NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import12.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import20.Wrapper_NgIf;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _vc_6:import12.ViewContainer;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import20.Wrapper_NgIf;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import12.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import20.Wrapper_NgIf;
  _text_9:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow2,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_23 = import1.UNINITIALIZED;
    this._expr_24 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgStyle_0_3 = new import11.Wrapper_NgStyle(this.parentView.parentView.injectorGet(import14.KeyValueDiffers,this.parentView.parentIndex),new import15.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import21.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import20.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_4 = new import12.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import21.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import20.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_6 = new import12.ViewContainer(6,0,this,this._anchor_6);
    this._TemplateRef_6_5 = new import21.TemplateRef_(this,6,this._anchor_6);
    this._NgIf_6_6 = new import20.Wrapper_NgIf(this._vc_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_8 = new import12.ViewContainer(8,0,this,this._anchor_8);
    this._TemplateRef_8_5 = new import21.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import20.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(6,'click',(null as any),'touchend',(null as any),'contextmenu',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._anchor_8,
      this._text_9
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import22.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import21.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import22.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import21.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import22.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6.context; }
    if (((token === import21.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import22.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import17.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgStyle_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit.style;
    this._NgStyle_0_3.check_ngStyle(currVal_0_0_0,throwOnChange,false);
    this._NgStyle_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = (this.context.index == 0);
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_4_0_0:any = ((this.parentView.parentView.context.treeTable.selectionMode == 'checkbox') && (this.context.index == 0));
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    const currVal_6_0_0:boolean = !this.context.$implicit.template;
    this._NgIf_6_6.check_ngIf(currVal_6_0_0,throwOnChange,false);
    this._NgIf_6_6.ngDoCheck(this,this._anchor_6,throwOnChange);
    const currVal_8_0_0:any = this.context.$implicit.template;
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    const currVal_23:any = this.context.$implicit.styleClass;
    if (import3.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = (this.context.$implicit.hidden? 'none': 'table-cell');
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementStyle(this._el_0,'display',((this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_24) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_24).toString()));
      this._expr_24 = currVal_24;
    }
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
    this._vc_6.destroyNestedViews();
    this._vc_8.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_UITreeRow3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 4)) { return new View_UITreeRow4(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    if ((nodeIndex == 6)) { return new View_UITreeRow5(this.viewUtils,this,6,this._anchor_6,this._vc_6); }
    if ((nodeIndex == 8)) { return new View_UITreeRow6(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.onRowClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'touchend')) {
      const pd_sub_1:any = ((<any>this.parentView.parentView.context.onRowTouchEnd()) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'contextmenu')) {
      const pd_sub_2:any = ((<any>this.parentView.parentView.context.onRowRightClick($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
class View_UITreeRow1 extends import2.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import10.Wrapper_NgClass;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import12.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import24.Wrapper_NgFor;
  _text_3:any;
  _map_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow1,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_8 = import3.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-state-highlight': p0,
        'ui-treetable-row-selectable': p1
      }
      ;
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','ui-treetable-row'),(null as any));
    this._NgClass_0_3 = new import10.Wrapper_NgClass(this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import14.KeyValueDiffers,this.parentIndex),new import15.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import12.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import21.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import24.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import25.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import16.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'ui-treetable-row';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_8(this.parentView.context.isSelected(),(this.parentView.context.treeTable.selectionMode && (this.parentView.context.node.selectable !== false)));
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.parentView.context.treeTable.columns;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_UITreeRow2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
class View_UITreeRow8 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.UITreeRow>;
  _UITreeRow_0_3:Wrapper_UITreeRow;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow8,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'tbody',new import3.InlineArray2(2,'pTreeRow',''),(null as any));
    this.compView_0 = new View_UITreeRow0(this.viewUtils,this,0,this._el_0);
    this._UITreeRow_0_3 = new Wrapper_UITreeRow(this.parentView.parentView.injectorGet(import9.TreeTable,this.parentView.parentIndex));
    this.compView_0.create(this._UITreeRow_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.UITreeRow) && (0 === requestNodeIndex))) { return this._UITreeRow_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._UITreeRow_0_3.check_node(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.parentView.context.node;
    this._UITreeRow_0_3.check_parentNode(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = (this.parentView.parentView.context.level + 1);
    this._UITreeRow_0_3.check_level(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.parentView.context.labelExpand;
    this._UITreeRow_0_3.check_labelExpand(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.parentView.context.labelCollapse;
    this._UITreeRow_0_3.check_labelCollapse(currVal_0_0_4,throwOnChange,false);
    this._UITreeRow_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_UITreeRow7 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _vc_6:import12.ViewContainer;
  _TemplateRef_6_5:any;
  _NgFor_6_6:import24.Wrapper_NgFor;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_13:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_UITreeRow7,renderType_UITreeRow,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_13 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray4(4,'class','ui-treetable-row','style','display:table-row;white-space: nowrap'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'td',new import3.InlineArray2(2,'class','ui-treetable-child-table-container'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'table',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n                    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._vc_6 = new import12.ViewContainer(6,4,this,this._anchor_6);
    this._TemplateRef_6_5 = new import21.TemplateRef_(this,6,this._anchor_6);
    this._NgFor_6_6 = new import24.Wrapper_NgFor(this._vc_6.vcRef,this._TemplateRef_6_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_7 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._text_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import25.NgFor) && (6 === requestNodeIndex))) { return this._NgFor_6_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6_0_0:any = this.parentView.context.node.children;
    this._NgFor_6_6.check_ngForOf(currVal_6_0_0,throwOnChange,false);
    this._NgFor_6_6.ngDoCheck(this,this._anchor_6,throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
    const currVal_13:any = this.parentView.context.treeTable.shownColumns().length;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_2,'colspan',((currVal_13 == null)? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
  }
  destroyInternal():void {
    this._vc_6.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 6)) { return new View_UITreeRow8(this.viewUtils,this,6,this._anchor_6,this._vc_6); }
    return (null as any);
  }
}
var renderType_UITreeRow:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_UITreeRow,{});
export class View_UITreeRow0 extends import2.AppView<import0.UITreeRow> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import12.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import20.Wrapper_NgIf;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import12.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import20.Wrapper_NgIf;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UITreeRow0,renderType_UITreeRow,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import12.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import21.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import20.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_3 = new import12.ViewContainer(3,(null as any),this,this._anchor_3);
    this._TemplateRef_3_5 = new import21.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import20.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._anchor_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import22.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    if (((token === import21.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import22.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.treeTable.isFiltered(this.context.node);
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    const currVal_3_0_0:any = (this.context.node.children && this.context.node.expanded);
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_3.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_UITreeRow1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    if ((nodeIndex == 3)) { return new View_UITreeRow7(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
}