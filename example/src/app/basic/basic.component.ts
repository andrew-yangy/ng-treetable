/**
 * Created by andrew.yang on 3/28/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-basic',
    template: `
    <input #gb type="text" pInputText size="50" placeholder="Global Search">
    <ay-treeTable [value]="nodes.data" [globalFilter]="gb">
        <ay-column field="name" header="Name"></ay-column>
        <ay-column field="size" header="Size"></ay-column>
        <ay-column field="type" header="Type"></ay-column>
    </ay-treeTable>
  `,
})
export class BasicTreeComponent {
    nodes = {
        "data":
            [
                {
                    "data":{
                        "name":"Documents",
                        "size":"75kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "data":{
                                "name":"Work",
                                "size":"55kb",
                                "type":"Folder"
                            },
                            "children":[
                                {
                                    "data":{
                                        "name":"Expenses.doc",
                                        "size":"30kb",
                                        "type":"Document"
                                    }
                                },
                                {
                                    "data":{
                                        "name":"Resume.doc",
                                        "size":"25kb",
                                        "type":"Resume"
                                    }
                                }
                            ]
                        },
                        {
                            "data":{
                                "name":"Home",
                                "size":"20kb",
                                "type":"Folder"
                            },
                            "children":[
                                {
                                    "data":{
                                        "name":"Invoices",
                                        "size":"20kb",
                                        "type":"Text"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "data":{
                        "name":"Pictures",
                        "size":"150kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "data":{
                                "name":"barcelona.jpg",
                                "size":"90kb",
                                "type":"Picture"
                            }
                        },
                        {
                            "data":{
                                "name":"primeui.png",
                                "size":"30kb",
                                "type":"Picture"
                            }
                        },
                        {
                            "data":{
                                "name":"optimus.jpg",
                                "size":"30kb",
                                "type":"Picture"
                            }
                        }
                    ]
                }
            ]
    };
}
