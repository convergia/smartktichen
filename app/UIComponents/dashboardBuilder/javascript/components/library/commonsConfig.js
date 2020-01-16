angular
    .module('DashboardBuilder')
    .constant(
        "common",
        {
            "formTab": {
                title: "Data",
                items: [
                    {
                        "type": "section",
                        "htmlClass": "row",
                        "condition": "model['isDashboard'] == false",
                        "items": [{
                            "type": "section",
                            "htmlClass": "col-xs-7",
                            "items": [{
                                "key": "dashboard-data-handler"
                            }]
                        },
                        {
                            "type": "section",
                            "htmlClass": "col-xs-5",
                            "condition": "model['dashboard-data-handler'] === true", //Condition on section and not on key because of a bug in the destroy in schemaForm, needs to be here to remove fields from model
                            "items": [{
                                "key": "service-tag"
                            }]
                        }    
						]
                    },
                    {
                        "type": "section",
             			"condition": "model['dashboard-data-handler'] === false",
                        "htmlClass": "row",
                        "items": [{
                            "type": "section",
                            "htmlClass": "col-xs-6",
                            "items": [{
                                "key": "transport",
                                "placeholder": " ",
                                "type": 'strapselect',
                                "titleMap": [{
                                    "value": "wss",
                                    "name": "wss"
                                }, {
                                    "value": "https",
                                    "name": "https"
                                }]
                            }]
                        }, {
                            "type": "section",
                            "htmlClass": "col-xs-6",
                            "items": [{
                                "condition": "model.transport=='wss'",
                                "key": "msg-tag",
                            }, {
                                "key": "http-method",
                                "type": 'strapselect',
                                "condition": "model.transport=='https'",
                                "placeholder": " ",
                                "titleMap": [{
                                    "value": "GET",
                                    "name": "GET"
                                }]
                            },{
                                "condition": "model.transport=='https'",
                                "key":"fetch-data-interval",
                            }]
                        }]
                    },
                    {
                        "type": "section",
                        "htmlClass": "row",
     					"condition": "model['dashboard-data-handler'] === false",
                        "items": [{
                            "type": "section",
                            "htmlClass": "col-xs-6",
                            "items": [
                                { 
                                    "key":"api"
                                }
                            ]
                        }, {
                            "type": "section",
                            "htmlClass": "col-xs-6",
                            "items": [
                                {
                                    "key": "api-params" 
                                }, {
                                    "key": "use-window-params" 
                                }]
                        }]
                    },
                     
                    {
                        "type": "section",
                        "htmlClass": "row",
                        "items": [{
                            "type": "section",
                            "condition": "model['isDashboard'] == false",
                            "htmlClass": "col-xs-12 codemirror-small",
                            "items": [
                                {
                                    "key": "data",
                                    "type": "codemirror",
                                    "codemirrorOptions": {
                                        "value": "",
                                        "styleActiveLine": true,
                                        "lineNumbers": true,
                                        "lineWrapping": true,
                                        "autoCloseBrackets": true,
                                        "matchBrackets": true,
                                        "theme": "neo",
                                        "mode": "javascript",
                                        "readOnly": false,
                                        "autoRefresh": true
                                    }
                                },
                                {
                                    "key": "on-format-data",
                                    "type": "codemirror",
                                    "codemirrorOptions": {
                                        "value": "return;",
                                        "styleActiveLine": true,
                                        "lineNumbers": true,
                                        "lineWrapping": true,
                                        "autoCloseBrackets": true,
                                        "matchBrackets": true,
                                        "theme": "neo",
                                        "mode": "javascript",
                                        "readOnly": false,
                                        "autoRefresh": true
                                    }
                                }
                            ]
                        }]
                    },
                    {
                        "type": "section",
                        "htmlClass": "row",
                        "items": [{
                            "type": "section",
                            "htmlClass": "col-xs-12",
                            "items": [{
                                "type": "help",
                                "helpvalue": "<hr>"
                            }]
                        }]
                    },
                    {
                        "type": "section",
                        "htmlClass": "row",
                        "items": [{
                            "type": "section",
                            "htmlClass": "col-xs-12",
                            "items": [{
                                "type": "help",
                                "helpvalue": "<div class=\"alert alert-info\"><ul><li>Messages published over the subscibe channel need to have the following format in order to be consumed by a widget:<ul><li>{“id”: “&lt;message tag value&gt;”, “result”: “&lt;static data structure&gt;”}</li></ul></li><li>A script would publish a message  over the subscribe channel as follow:<ul><li>publish(“responseChannel”, {“id”: “&lt;message tag value&gt;”, “result”: “&lt;static data structure&gt;”});</li></ul></li><li>Whether https or wss transport is used, Sciptr API should return the static data structure for widget initial load:<ul><li>return &lt;static data structure&gt;;</li></ul></li></ul></div>"
                            }]
                        }]
                    }

                ]
            },
            "schemaFields": {
                "dashboard-data-handler": {
                    "title": "The dashboard will handle data sourcing for widget",
                    "type": "boolean",
                    "default": false,
                    "description": "Dashboard will use the properties in its settings tab to fetch data and will relay it to the widget."
                },
                "service-tag": {
                    "title": "Data tag",
                    "type": "string",
                    "description": "The dashboard data source will fetch data for multiple widgets. Set a data tag for the dashboard to propagate to your widget the data object with the data tag as its key. If not set all the data fetched by the dashboard will be relayed to the widget"
                },
                "api": {
                    "title": "Api",
                    "type": "string",
                    "description": "Name of the scriptr api (script name) responsible for publishing or returning the widget data."
                },
                "api-params": {
                    "title": "Api params",
                    "type": "string",
                    "description": "A JSON formatted object containing the parameters to be sent to the scriptr api.",
                    "x-schema-form": {
                        "type": "textarea",
                        "placeholder": "Ex: {'id' : '599865'}"
                    }
                },
                "http-method": {
                    "title": "Http method",
                    "type": "string",
                    "description": "Method to be used when calling the scriptr api over https. Default: GET.",
                    "default": "GET",
                },
                "transport": {
                    "title": "Transport",
                    "type": "string",
                    "description": "Protocol used to call the  scriptr api. Use wss for real time communication whenever your widget needs to update its data live by consuming messages published from scriptr over the subscribe channel defined in settings."
                },
                "msg-tag": {
                    "title": "Message tag",
                    "type": "string",
                    "description": "The dashboard widgets consume messages published over the subscribe channel defined in dashboard settings. Message tag is an identifier sent as part of the published message. The widget uses it to know which messages to consume or ignore."
                },
                "on-format-data": {
                    "title": "Format data",
                    "default": "return data;",
                    "type": "string",
                    "description": "Callback function to be called after data is returned from data source."
                },"use-window-params": {
                    "title": "Merge Window Params",
                    "type": "boolean",
                    "default": false,
                    "description": "Merge URL query params with the widget api params."
                },
                "fetch-data-interval": {
                    "title": "Fetch Interval",
                    "type": "number",
                    "description": "Data update interval value."
                },
                "isDashboard": {
                    "title": "Is dashboard?",
                    "type": "hidden",
                    "default": false
                }
                
            }

        }
);