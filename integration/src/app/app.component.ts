import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <input #gb type="text" pInputText size="50" placeholder="Global Search">
    <ay-treeTable [value]="nodes.data" [globalFilter]="gb"
                  selectionMode="single" [(selection)]="selectedRows"
                  (onNodeSelect)="nodeSelect($event)" [tableStyle]="{'table-layout': 'auto'}">
      <ay-column field="name" header="Name">
        <ng-template let-col let-node="rowData" pTemplate="body">
          <span>{{node.data[col.field]}}</span>
        </ng-template>
      </ay-column>

      <ay-column field="size" header="Size"></ay-column>
      <ay-column field="type" header="Type"></ay-column>
    </ay-treeTable>
  `
})
export class AppComponent {
  selectedRows: any[];

  constructor() {
  }

  nodes = {
    "data":
      [
        {
          "data": {
            "name": "Documents",
            "size": "75kb",
            "type": "Folder"
          },
          "children": [
            {
              "data": {
                "name": "Work",
                "size": "55kb",
                "type": "Folder"
              },
              "children": [
                {
                  "data": {
                    "name": "Expenses.doc",
                    "size": "30kb",
                    "type": "Document"
                  }
                },
                {
                  "data": {
                    "name": "Resume.doc",
                    "size": "25kb",
                    "type": "Resume"
                  }
                }
              ]
            },
            {
              "data": {
                "name": "Home",
                "size": "20kb",
                "type": "Folder"
              },
              "children": [
                {
                  "data": {
                    "name": "Invoices",
                    "size": "20kb",
                    "type": "Text"
                  }
                }
              ]
            }
          ]
        },
        {
          "data": {
            "name": "Pictures",
            "size": "150kb",
            "type": "Folder"
          },
          "children": [
            {
              "data": {
                "name": "barcelona.jpg",
                "size": "90kb",
                "type": "Picture"
              }
            },
            {
              "data": {
                "name": "primeui.png",
                "size": "30kb",
                "type": "Picture"
              }
            },
            {
              "data": {
                "name": "optimus.jpg",
                "size": "30kb",
                "type": "Picture"
              }
            }
          ]
        }
      ]
  };

  nodeSelect(event) {
    console.log(event)
  }
}
