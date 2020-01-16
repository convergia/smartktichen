const __onBarArraysChanged__ = function (modelValue, form, model) {
    //if yconfig streatch it to individuals 
    if (model.yconfig) {
        var ykeys = [];
        var ylabels = [];
        var ycolors = [];
        model.yconfig.forEach(function (e) {
            ykeys.push(e.key);
            ylabels.push(e.label);
            ycolors.push(e.color);
        });
        model.ykeys = ykeys;
        model.labels = ylabels;
        model.colors = ycolors;
    }

    //if eventConfig streatch it to individuals 
    if (model.goalsconfig) {
        var goals = [];
        var gColors = [];
        model.goalsconfig.forEach(function (e) {
            goals.push(e.goal);
            gColors.push(e.lineColor);
        });
        model.goals = goals;
        model['goal-line-colors'] = gColors;
    }
    //if goalsConfig streatch it to individuals 
    // if (model.eventsconfig) {
    //     var events = [];
    //     var eColors = [];
    //     model.eventsconfig.forEach(function (e) {
    //         events.push(e.event);
    //         eColors.push(e.lineColor);
    //     });
    //     model.events = events;
    //     model['event-line-colors'] = eColors;
    // }
}

const __BAR__ = {
    "name": "bar",
    "label": "Bar Chart",
    "class": "scriptr-chart",
    "commonData": true,
    "show": true,
    "defaults": {
        "type": "bar",
        "boxLabel": "Bar Chart",
        "stacked": true,
        "xkey": "y",
        "ykeys": "[\"a\", \"b\"]",
        "labels": "[\"Serie A\", \"Serie B\"]",
        "colors": ["#7ed38c", "#dd7ca7"],
        "transport": "wss",
        "on-format-data": "return data;",
        //    "api" : "UIComponents/dashboard/frontend/examples/chart/getChartData",
        "msg-tag": "chart",
        "data": '[{"y":"2006","a":88,"b":20},{"y":"2007","a":30,"b":34},{"y":"2008","a":90,"b":42},{"y":"2009","a":89,"b":59},{"y":"2010","a":43,"b":61},{"y":"2011","a":85,"b":69},{"y":"2012","a":29,"b":65}]',
        "grid-text-family": "Source Sans Pro"
    },
    "box": {
        sizeX: 4,
        sizeY: 5,
        minSizeX: 2,
        minSizeY: 3
    },
    "imgSrc": "//scriptr-cdn.s3.amazonaws.com/uicomponents/dashboard-builder/images/bar-chart.png",
    "form": [{
        type: "tabs",
        tabs: [
            {
                title: "X",
                items: [{
                    "type": "section",
                    "htmlClass": "row",
                    "items": [{
                        "type": "section",
                        "htmlClass": "col-xs-12",
                        "items": [
                            
                            "xkey", "xlabel-angle", {
                            key: "parse-time",
                           
                        },
                        {
                            key: "_dummy",
                            "htmlClass": "hidden",
                            onFieldLoad: function (modelValue, form, model) {
                                //build yconfig
                                if (!model.yconfig || !model.yconfig.length) {
                                    var ykeys = JSON.parse(model.ykeys);
                                    var ylabels = JSON.parse(model.labels);
                                    var ycolors = model.colors;
                                    if(ykeys == null){
                                            ykeys=[];
                                        }
                                    var keysNum = ykeys.length;
                                    // clean the array
                                    model.yconfig = [];
                                    for (var i = 0; i < keysNum; i++) {
                                        var e = {
                                            key: ykeys[i],
                                            color: ycolors[i],
                                            label: ylabels[i],
                                        };
                                        model.yconfig.push(e);
                                    }
                                }


                                //build goals
                                if (!model.goalsconfig || !model.goalsconfig.length) {
                                    if(model.goals == null){
                                            model.goals=[];
                                        }
                                    var goalsNum = model.goals.length;
                                    // clean the array
                                    model.goals = [];
                                    for (var i = 0; i < goalsNum; i++) {
                                        if (model.goals[i]) {
                                            var e = {
                                                goal: model.goals[i],
                                                //storkeWidth: model['goal-stroke-width'],
                                                lineColor: model['goal-line-colors'][i],
                                            };
                                            model.goalsconfig.push(e);
                                        }

                                    }
                                }
                            }
                        }
                    
                    ]
                    }]
                }]
            },
            {
                title: "Y",
                items: [

                    {
                        "type": "section",
                        "htmlClass": "row",
                        "items": [
                            {
                                "type": "section",
                                "htmlClass": "col-xs-12",
                                "items": [
                                    {
                                        key: "yconfig",
                                        title: "Y Configuration",
                                        startEmpty: true,
                                        onChange: __onBarArraysChanged__,
                                        items: [{
                                            "type": "section",
                                            "htmlClass": "row",
                                            "items": [
                                                {
                                                    "type": "section",
                                                    "htmlClass": "col-sm-4",
                                                    "items": [{
                                                        key: "yconfig[].key",
                                                        onChange: __onBarArraysChanged__
                                                    }]
                                                },
                                                {
                                                    "type": "section",
                                                    "htmlClass": "col-sm-4",
                                                    "items": [{
                                                        key: "yconfig[].label",
                                                        onChange: __onBarArraysChanged__
                                                    }]
                                                },
                                                {
                                                    "type": "section",
                                                    "htmlClass": "col-sm-4",
                                                    "items": [{
                                                        key: "yconfig[].color",
                                                        "colorFormat": "hex",
                                                        onChange: __onBarArraysChanged__
                                                    }]
                                                }]
                                        }
                                        ],

                                    },
                                ]
                            },
                            {
                                "type": "section",
                                "htmlClass": "col-xs-6",
                                "items": [
                                    "pre-units",
                                    "ymin",
                                    {
                                        "key": "stacked"
                                      
                                    },
                                    {
                                        key: "show-legend"
                                    },
                                    {
                                        type: "radios-inline",
                                        key: "legend-type",
                                        condition: "model['show-legend'] == true",
                                        titleMap: [{
                                            value: "hover",
                                            name: "Hover"
                                        }, {
                                            value: "right",
                                            name: "Right"
                                        }]
                                    },
                                    {
                                        type: "radios-inline",
                                        key: "hide-hover",
                                        condition: "model['show-legend'] ==true && model['legend-type'] =='hover'",
                                        titleMap: [{
                                            value: "auto",
                                            name: "Auto"
                                        }, {
                                            value: "never",
                                            name: "Always"
                                        }]
                                    }]
                            },
                            {
                                "type": "section",
                                "htmlClass": "col-xs-6",
                                "items": [
                                    "post-units",
                                    "ymax",
                                     // ,"ylabel-format"
                                ]
                            }]
                    }]
            },
            {
                title: "Grid",
                items: [{
                    "type": "section",
                    "htmlClass": "row",
                    "items": [
                        {
                            "type": "section",
                            "htmlClass": "col-xs-6",
                            "items": [{
                               
                                key: "grid",
                                
                            }, {
                                
                                key: "axes",
                                
                            }, {
                                "key": "grid-text-color",
                                "colorFormat": "hex3"
                            }]
                        },
                        {
                            "type": "section",
                            "htmlClass": "col-xs-6",
                            "items": [{
                                "key":"grid-text-family",
                                "type": 'strapselect',
                                "titleMap": [{
                                    "value": "Arial",
                                    "name": "Arial"
                                }, {
                                    "value": "Helvetica",
                                    "name": "Helvetica"
                                }, {
                                    "value": "Times New Roman",
                                    "name": "Times New Roman"
                                }, {
                                    "value": "Courier New",
                                    "name": "Courier New"
                                }, {
                                    "value": "Courier",
                                    "name": "Courier"
                                }, {
                                    "value": "Verdana",
                                    "name": "Verdana"
                                }, {
                                    "value": "Georgia",
                                    "name": "Georgia"
                                }, {
                                    "value": "Palatino",
                                    "name": "Palatino"
                                }, {
                                    "value": "Garamond",
                                    "name": "Garamond"
                                }, {
                                    "value": "Bookman",
                                    "name": "Bookman"
                                }, {
                                    "value": "Comic Sans MS",
                                    "name": "Comic Sans MS"
                                }, {
                                    "value": "Trebuchet MS",
                                    "name": "Trebuchet MS"
                                }, {
                                    "value": "Arial Black",
                                    "name": "Arial Black"
                                }, {
                                    "value": "Impact",
                                    "name": "Impact"
                                }, {
                                    "value": "Sans-Serif",
                                    "name": "Sans-Serif"
                                }, {
                                    "value": "Source Sans Pro",
                                    "name": "Source Sans Pro"
                                }]
                            }
                                ,
                            {
                                "key":"grid-text-weight",
                                "type": 'strapselect',
                                "titleMap": [{
                                    "value": "normal",
                                    "name": "Normal"
                                }, {
                                    "value": "bold",
                                    "name": "Bold"
                                }]
                        },
                            "grid-text-size"]
                        }]
                }]
            },
            {
                title: "Goals",
                items: [{
                    "type": "section",
                    "htmlClass": "row",
                    "items": [
                        {
                            "type": "section",
                            "htmlClass": "col-xs-3",
                            "items": [
                                "goal-stroke-width"]
                        },
                        {
                            "type": "section",
                            "htmlClass": "col-xs-9",
                            "items": [
                                {
                                    key: "goalsconfig",
                                    title: "Goals Configuration",
                                    startEmpty: true,
                                    onChange: __onBarArraysChanged__,
                                    items: [{
                                        "type": "section",
                                        "htmlClass": "row",
                                        "items": [
                                            {
                                                "type": "section",
                                                "htmlClass": "col-sm-4",
                                                "items": [{
                                                    key: "goalsconfig[].goal",
                                                    onChange: __onBarArraysChanged__
                                                }]
                                            },
                                            {
                                                "type": "section",
                                                "htmlClass": "col-sm-4",
                                                "items": [{
                                                    key: "goalsconfig[].lineColor",
                                                    "colorFormat": "hex",
                                                    onChange: __onBarArraysChanged__
                                                }]
                                            }]
                                    }
                                    ],

                                },
                            ]
                        },]
                }]
            }]
    }],
    "schema": {
        "type": "object",
        "title": "Schema",
        "properties": {
            "data": {
                "title": "Data",
                "type": "string",
                "description": "Data to plot in case of static data.This is an array of objects, containing x and y attributes as described by the xkey and ykeys options. The order in which you provide the data is the order in which the bars are displayed.",
                "x-schema-form": {
                    "type": "textarea",
                    "placeholder": "[{ y: '2006', a: 100, b: 90 },{ y: '2007', a: 75,  b: 65 }, { y: '2008', a: 50,  b: 40 }]"
                }
            },
            "xkey": {
                "title": "X key",
                "type": "string",
                "description": "A string containing the name of the attribute that contains X labels."
            },
            "ykeys": {
                "title": "Y keys",
                "type": "string",
                "description": "A list of strings containing names of attributes that contain Y values (one for each series of data to be plotted)."
            },
            "labels": {
                "title": "Labels",
                "type": "string",
                "description": "A list of strings containing labels for the data series to be plotted (corresponding to the values in the ykeys option)."
            },
            "colors": {
                "title": "Colors",
                "type": "array",
                "default": ["#CC5464", "#FCC717", "#38B9D6",
                    "#1DBC68", "#E90088"],
                "description": "Array containing colors for the series bars.",
                "items": {
                    "type": "string",
                    "format": "color"
                }

            },
            "stacked": {
                "title": "Stacked",
                "type": "boolean",
                "default": false,
                "description": "Set to true to draw bars stacked vertically."
            },
            "show-legend": {
                "title": "Show Legend",
                "type": "boolean",
                "default": "true",
            },
            "legend-type": {
                "title": "Legend type",
                "type": "string",
                "default": "hover",
            },
            "hide-hover": {
                "title": "Hover style",
                "default": "auto",
                "type": "string",
                "description": "Set to 'Always' to always show a hover legend. Set to 'Auto' to only show the hover legend when the mouse cursor is over the chart."
            },
            "hover-callback": {
                "title": "Hover callback",
                "type": "string",
                "description": "Provide a function on this option to generate custom hover legends. The function will be called with the index of the row under the hover legend, the options object passed to the constructor as arguments, a string containing the default generated hover legend content HTML, and an object containing the original data for the row as passed in the data option. hoverCallback: function (index, options, content, row) {return 'sin(' + row.x + ')='+ row.y}"
            },
            "axes": {
                "title": "Axes",
                "type": "boolean",
                "description": "Set to false to disable drawing the x and y axes.",
                "default": "true"
            },
            "grid": {
                "title": "Grid",
                "type": "boolean",
                "description": "Set to false to disable drawing the horizontal grid lines.",
                "default": true
            },
            "grid-text-color": {
                "title": "Grid text color",
                "type": "string",
                "description": "Set the color of the axis labels (default: #888).",
                "format": "color",
                "default": "#888"
            },
            "grid-text-size": {
                "title": "Grid text size",
                "type": "number",
                "description": "Set the point size of the axis labels (default: 12).",
                "default": 12
            },
            "grid-text-family": {
                "title": "Grid text family",
                "type": "string",
                "description": "Set the font family of the axis labels (default: sans-serif).",
                "default": "Source Sans Pro",
                "placeholder": " ",
               
            },
            "grid-text-weight": {
                "title": "Grid text weight",
                "type": "string",
                "description": "Set the font weight of the axis labels (default: normal).",
                "default": "normal",
                
                "placeholder": " ",
                
            },
            "parse-time": {
                "title": "Parse time",
                "type": "boolean",
                "default": "true",
                "description": "Set to false to skip time/date parsing for X values, instead treating them as an equally-spaced series."
            },
            "ymax": {
                "title": "Y maximum value",
                "type": "string",
                "default": 'auto',
                "description": "Max. bound for Y-values. Alternatively, set this to 'auto' to compute automatically, or 'auto [num]' to automatically compute and ensure that the max y-value is at least [num]."
            },
            "ymin": {
                "title": "Y minimum value",
                "type": "string",
                "default": "auto 0",
                "description": "Min. bound for Y-values. Alternatively, set this to 'auto' to compute automatically, or 'auto [num]' to automatically compute and ensure that the min y-value is at most [num]. You can use this to create graphs with false origins."
            },
            "post-units": {
                "title": "Post units",
                "type": "string",
                "description": "Set to a string value (eg: '%') to add a label suffix all y-labels."
            },
            "pre-units": {
                "title": "Pre units",
                "type": "string",
                "description": "Set to a string value (eg: '$') to add a label prefix all y-labels."
            },
            "xlabel-angle": {
                "title": "X label angle",
                "type": "number",
                "default": 0,
                "description": "The angle in degrees from horizontal to draw x-axis labels."
            },
            "ylabel-format": {
                "title": "Y label Format",
                "type": "string",
                "description": "A function that accepts y-values and formats them for display as y-axis labels. function (y) { return y.toString() + 'km'; }"
            },
            "goals": {
                "title": "Goals",
                "type": "array",
                "description": "A list of y-values to draw as horizontal 'goal' lines on the chart. goals: [1.0, -1.0]",
                "items": {
                    "type": "number"
                }

            },
            "goal-stroke-width": {
                "title": "Goal stroke width",
                "type": "number",
                "default": 1.0,
                "description": "Width, in pixels, of the goal lines."
            },
            "goal-line-colors": {
                "title": "Goal line colors",
                "type": "array",
                "default": ['#666633', '#999966', '#cc6666',
                    '#663333'],
                "description": "Array of color values to use for the goal line colors.",
                "items": {
                    "format": "color",
                    "type": "string"
                }
            }, "yconfig": {
                "type": "array",
                "default": [],
                "items": {
                    "type": "object",
                    "properties": {
                        "key": {
                            "title": "Key",
                            "type": "string"
                        },
                        "label": {
                            "title": "Label",
                            "type": "string"
                        },
                        "color": {
                            "title": "Color",
                            "type": "string",
                            "format": "color",
                        }
                    }
                }
            }, "goalsconfig": {
                "type": "array",
                "default": [],
                "items": {
                    "type": "object",
                    "properties": {
                        "goal": {
                            "title": "goal",
                            "type": "string"
                        },

                        "lineColor": {
                            "title": "Line Color",
                            "type": "string",
                            "format": "color",
                        }
                    }
                }
            }, 
            // "eventsconfig": {
            //     "type": "array",
            //     "default": [],
            //     "items": {
            //         "type": "object",
            //         "properties": {
            //             "event": {
            //                 "title": "event",
            //                 "type": "string"
            //             },

            //             "lineColor": {
            //                 "title": "Line Color",
            //                 "type": "string",
            //                 "format": "color",
            //             }
            //         }
            //     }
            // }, 
            "_dummy": {
                "title": "Dummy not used Value",
                "type": "string",
            }
        },
        "required": ["xkey", "ykeys", "labels"]
    }
};