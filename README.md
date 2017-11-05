[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Tree Table component for Angular
A tree table component for Angular, based on [Primeng treetable](https://github.com/primefaces/primeng/tree/master/components/treetable).

## Getting Started
```bash
npm install --save ng-treetable
```
## Demo
[Live Demo](https://ddvkid.github.io/ng-treetable/)
## Configuration
##### Angular cli

After installation, no additional configuration is needed. Import the `TreeTableModule` and define it as one of the imports of your application module:

```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TreeTableModule} from "ng-treetable";

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TreeTableModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
```
## Data type

````json
{
    "data":
    [  
        {  
            "data":{  
                "name":"Andrew",
                "gender":"Male"
            },
            "children":[
                {  
                    "data":{  
                        "name":"Andrewson",
                        "gender":"Male"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Eric",
                                "gender":"Male"
                            }
                        }                       
                    ]
                }
            ]
        }
    ]
}
````

## Examples

### Basic
```html
<ay-treeTable [value]="data">
    <ay-column field="name" header="Name"></ay-column>
    <ay-column field="gender" header="Gender"></ay-column>
</ay-treeTable>
```
### Paginator

```html
<ay-treeTable [value]="data" [rows]="10" [paginator]="true" [pageLinks]="3" [rowsPerPageOptions]="[5,10,20]">
    <ay-column field="name" header="Name"></ay-column>
    <ay-column field="gender" header="Gender"></ay-column>
</ay-treeTable>
```
### Filter
```html
<input #gb type="text" pInputText size="50" placeholder="Global Filter">
<ay-treeTable [value]="data" [globalFilter]="gb" [rows]="10" [paginator]="true" [pageLinks]="3" [rowsPerPageOptions]="[5,10,20]">
    <ay-column field="name" header="Name"></ay-column>
    <ay-column field="gender" header="Gender"></ay-column>
</ay-treeTable>
```


## Input properties
| Name               	| Type    	| Default  	| Description                                                                                                                                                                                                                                                       	|
|--------------------	|---------	|----------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| value              	| array   	| null     	| An array of treenodes.                                                                                                                                                                                                                                            	|
| rows               	| number  	| null     	| Number of rows to display per page.                                                                                                                                                                                                                               	|
| paginator          	| boolean 	| false    	| When specified as true, enables the pagination.                                                                                                                                                                                                                   	|
| totalRecords       	| number  	| null     	| Number of total records, defaults to length of value when not defined.                                                                                                                                                                                            	|
| pageLinks          	| number  	| 5        	| Number of page links to display in paginator.                                                                                                                                                                                                                     	|
| rowsPerPageOptions 	| array   	| null     	| Array of integer values to display inside rows per page dropdown of paginator                                                                                                                                                                                     	|
| immutable          	| boolean 	| false    	| Improves performance by avoiding diff checking, changes to value should be done in an immutable way on application side when immutable property is enabled.                                                                                                       	|
| globalFilter       	| any     	| null     	| Reference of an input field to use as a global filter.                                                                                                                                                                                                            	|
| filterDelay        	| number  	| 300      	| Delay in milliseconds before filtering the data.                                                                                                                                                                                                                  	|
| labelExpand        	| string  	| Expand   	| Tooltip and screenreader text for expand icon.                                                                                                                                                                                                                    	|
| labelCollapse      	| string  	| Collapse 	| Tooltip and screenreader text for collapse icon.                                                                                                                                                                                                                  	|
| selectionMode      	| string  	| null     	| Defines the selection mode, valid values "single" and "multiple".                                                                                                                                                                                                 	|
| selection          	| any     	| null     	| A single treenode instance or an array to refer to the selections.                                                                                                                                                                                                	|
| style              	| string  	| null     	| Inline style of the component.                                                                                                                                                                                                                                    	|
| styleClass         	| string  	| null     	| Style class of the component.                                                                                                                                                                                                                                     	|
| metaKeySelection   	| boolean 	| true     	| Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. 	|


## Events
| Name                | Parameters                                                                | Description                                                  |
|---------------------|---------------------------------------------------------------------------|--------------------------------------------------------------|
| onNodeSelect        | event.originalEvent: browser event  event.node: Selected node instance.   | Callback to invoke when a node is selected.                  |
| onNodeUnselect      | event.originalEvent: browser event  event.node: Unselected node instance. | Callback to invoke when a node is unselected.                |
| onNodeExpand        | event.originalEvent: browser event event.node: Expanded node instance.    | Callback to invoke when a node is expanded.                  |
| onNodeCollapse      | event.originalEvent: browser event  event.node: Collapsed node instance.  | Callback to invoke when a node is collapsed.                 |
| onContextMenuSelect | event.originalEvent: browser event  event.node: Selected node instance.   | Callback to invoke when a node is selected with right click. |
