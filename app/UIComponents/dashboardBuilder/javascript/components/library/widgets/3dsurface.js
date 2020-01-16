const __onColorScaleChange__ = function (modelValue, form, model) {
    var arr = [];
    model["color-scale-wrapper"].forEach(function (element) {
        var inArr = [];
        inArr[0] = element.priority;
        inArr[1] = element.color;
        arr.push(inArr);
    });
    model["color-scale"] = arr;
};
const __onModeBarButtonsChange__ = function (modelValue, form, model) {
    var arr = [];
    var buttons=[
        'zoom3d',
        'pan3d',
        'hoverClosest3d',
        'resetCameraLastSave3d',
        'resetCameraDefault3d',
        'orbitRotation',
        'tableRotation',
        'toImage'
      ];
    var obj = model["mode-bar-buttons-to-remove-wrapper"];
    buttons.forEach(function (element) {
        if (obj.hasOwnProperty(element)) {
            if (!obj[element]) {
                arr.push(element);
            }
        }else{
            arr.push(element);
        }
    });
    model["mode-bar-buttons-to-remove"] = arr;
};

const __3DSURFACE__ = {
    "name": "d3surface",
    "label": "3D Surface",
    "class": "scriptr-three-d-surface",
    "commonData": true,
    "show": true,
    "defaults": {
        "transport": "https",
        "api": "UIComponents/dashboard/frontend/examples/plotly/get3dSurfaceData",
        "data": '{"x":[5,8,9,11,17,18,22,25,29,40,45],"y":[1,4,19,20,22,29,34,50,55,60,70],"z":[[94406,102226,100476,104180,95610,101533,102925,101269,99009,92350,104448],[93445,104218,103759,96438,97964,92475,98259,95060,96552,91771,100263],[92525,103953,103434,100673,92664,92543,90106,90020,91159,92297,98877],[104631,94803,97843,100977,90526,102190,101738,101019,95238,99732,93036],[94836,93296,90879,94323,94635,91338,93995,94928,90520,99140,98669],[103672,103768,102159,102392,99864,93895,95896,97644,93341,96207,98995],[91065,103743,101070,92035,102096,104144,103583,98755,101781,100802,98260],[96269,94443,93042,98596,94341,94682,90108,92787,103789,96213,100077],[92990,90872,103253,92603,92238,100841,99683,90743,97936,103678,102659],[95751,100822,92947,91383,92458,103821,97929,94826,90563,94954,100669],[90740,102921,97082,95820,91951,100666,99549,90632,103519,91803,99903]]}',
        "title": "3D",
        "xaxis": "Temperature",
        "yaxis": "Humidity",
        "zaxis": "Pressure",
        "show-bar": "true",
        "bar-title": "Pressure",
        "bar-thickness": 20,
        "color-scale-wrapper": [{"priority":0,"color":"#c64dff"},{"priority":1,"color":"#1dbc68"}],
        "color-scale": [[0,"#c64dff"],[1,"#1dbc68"]],
        "contours": {
            z: {
                show: true,
                usecolormap: true,
                highlightcolor: "#38b9d6",
                project: { z: true }
            },
            x: {
                show: false,
                usecolormap: true,
                highlightcolor: "#c64dff",
                project: { x: false }
            },
            y: {
                show: false,
                usecolormap: true,
                highlightcolor: "#e90088",
                project: { y: false }
            }
        },
        "mode-bar-buttons-to-remove-wrapper": {
            "toImage": true,
            "tableRotation": true,
            "orbitRotation": true,
            "resetCameraDefault3d": true,
            "resetCameraLastSave3d": true,
            "hoverClosest3d": true,
            "pan3d": true,
            "zoom3d": true
        },
        "show-mode-bar":false,
        "displaylogo":false,
    },
    "box": {
        sizeX: 5,
        sizeY: 10,
        minSizeX: 4,
        minSizeY: 4
    },
    "imgCls": "",
    "imgSrc": "//scriptr-cdn.s3.amazonaws.com/uicomponents/dashboard-builder/images/3dSurface.png",
    "form": [
        {
            type: "tabs",
            tabs: [
                {
                    title: "Layout",
                    items: [
                        {
                            "type": "section",
                            "htmlClass": "row",
                            "items": [
                                {
                                    "type": "section",
                                    "htmlClass": "col-xs-12 col-sm-4",
                                    "items": [
                                        "title",

                                    ]
                                },
                                {
                                    "type": "section",
                                    "htmlClass": "col-xs-12 col-sm-4",
                                    "items": [
                                        "xaxis",
                                        "yaxis",
                                        "zaxis"
                                    ]
                                },
                                {
                                    "type": "section",
                                    "htmlClass": "col-xs-12 col-sm-4",
                                    "items": [
                                        {
                                            "key": "show-bar",
                                            
                                        },
                                        "bar-title",
                                        "bar-thickness"
                                    ]
                                },

                            ]
                        }
                    ]
                },
                {
                    title: "Format",
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
                                            "key": "color-scale-wrapper",
                                            "title": "Color scale",
                                            "items": [{
                                                "type": "section",
                                                "htmlClass": "row",
                                                "items": [
                                                    {
                                                        "type": "section",
                                                        "htmlClass": "col-xs-6 ",
                                                        "items": [{
                                                            "key": "color-scale-wrapper[].priority",
                                                            onChange: __onColorScaleChange__,
                                                        }]
                                                    },

                                                    {
                                                        "type": "section",
                                                        "htmlClass": "col-xs-6 ",
                                                        "items": [{
                                                            "key": "color-scale-wrapper[].color",
                                                            onChange: __onColorScaleChange__,
                                                            "colorFormat": "hex3",
                                                            "spectrumOptions": {
                                                                showInput: true,
                                                                showAlpha: false,
                                                                allowEmpty: true,
                                                                showPalette: true,
                                                                preferredFormat: 'hex3',
                                                                palette: [['#fce94f', '#fcaf3e', '#e9b96e'],
                                                                ['#8ae234', '#729fcf', '#ad7fa8'],
                                                                ['#ef2929', '#888a85', '#deface']]
                                                            }

                                                        }]
                                                    }


                                                ]
                                            }]
                                        }

                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    title: "Contours",
                    items: [
                        {
                            "type": "section",
                            "htmlClass": "row",
                            "items": [
                                {
                                    "type": "section",
                                    "title": "X Axis",
                                    "htmlClass": "col-xs-4",
                                    "items": [
                                        "contours.x.show",
                                        "contours.x.usecolormap",
                                        {
                                            "key": "contours.x.highlightcolor",
                                            "colorFormat": "hex3",
                                            "spectrumOptions": {
                                                showInput: true,
                                                showAlpha: false,
                                                allowEmpty: true,
                                                showPalette: true,
                                                preferredFormat: 'hex3',
                                                palette: [['#fce94f', '#fcaf3e', '#e9b96e'],
                                                ['#8ae234', '#729fcf', '#ad7fa8'],
                                                ['#ef2929', '#888a85', '#deface']]
                                            }
                                        }
                                        ,
                                        "contours.x.project.x",
                                    ]
                                },
                                {
                                    "type": "section",
                                    "htmlClass": "col-xs-4",
                                    "items": [
                                        "contours.y.show",
                                        "contours.y.usecolormap",
                                        {
                                            "key": "contours.y.highlightcolor",
                                            "colorFormat": "hex3",
                                            "spectrumOptions": {
                                                showInput: true,
                                                showAlpha: false,
                                                allowEmpty: true,
                                                showPalette: true,
                                                preferredFormat: 'hex3',
                                                palette: [['#fce94f', '#fcaf3e', '#e9b96e'],
                                                ['#8ae234', '#729fcf', '#ad7fa8'],
                                                ['#ef2929', '#888a85', '#deface']]
                                            }
                                        }
                                        ,
                                        "contours.y.project.y",
                                    ]
                                },
                                {
                                    "type": "section",
                                    "htmlClass": "col-xs-4",
                                    "items": [
                                        "contours.z.show",
                                        "contours.z.usecolormap",
                                        {
                                            "key": "contours.z.highlightcolor",
                                            "colorFormat": "hex3",
                                            "spectrumOptions": {
                                                showInput: true,
                                                showAlpha: false,
                                                allowEmpty: true,
                                                showPalette: true,
                                                preferredFormat: 'hex3',
                                                palette: [['#fce94f', '#fcaf3e', '#e9b96e'],
                                                ['#8ae234', '#729fcf', '#ad7fa8'],
                                                ['#ef2929', '#888a85', '#deface']]
                                            }
                                        }
                                        ,
                                        "contours.z.project.z",
                                    ]
                                }

                            ]
                        }
                    ]
                },
                {
                    title: "Mode Bar",
                    items: [
                        {
                            "type": "section",
                            "htmlClass": "row",
                            "items": [
                                {
                                    "type": "section",
                                    "htmlClass": "col-xs-12 col-sm-6",
                                    "items": [
                                        {
                                            "key": "show-mode-bar"
                                        },
                                        {
                                            "key": "displaylogo",
                                            "condition": "model['show-mode-bar']"
                                        }

                                    ]
                                },
                                {
                                    "type": "section",
                                    "htmlClass": "col-xs-12 col-sm-6",
                                    "items": [
                                        {
                                            "key": "mode-bar-buttons-to-remove-wrapper",
                                            "condition": "model['show-mode-bar']",
                                            "items": [
                                                {
                                                    key:"mode-bar-buttons-to-remove-wrapper.toImage",
                                                    onChange: __onModeBarButtonsChange__
                                                },{
                                                    key:"mode-bar-buttons-to-remove-wrapper.tableRotation",
                                                    onChange: __onModeBarButtonsChange__
                                                },{
                                                    key:"mode-bar-buttons-to-remove-wrapper.orbitRotation",
                                                    onChange: __onModeBarButtonsChange__
                                                },{
                                                    key:"mode-bar-buttons-to-remove-wrapper.resetCameraDefault3d",
                                                    onChange: __onModeBarButtonsChange__
                                                },{
                                                    key:"mode-bar-buttons-to-remove-wrapper.resetCameraLastSave3d",
                                                    onChange: __onModeBarButtonsChange__
                                                },{
                                                    key:"mode-bar-buttons-to-remove-wrapper.hoverClosest3d",
                                                    onChange: __onModeBarButtonsChange__
                                                },{
                                                    key:"mode-bar-buttons-to-remove-wrapper.pan3d",
                                                    onChange: __onModeBarButtonsChange__
                                                },{
                                                    key:"mode-bar-buttons-to-remove-wrapper.zoom3d",
                                                    onChange: __onModeBarButtonsChange__
                                                },
                                            ]
                                            
                                        }

                                    ]
                                },
                            ]
                        },

                    ]
                }

            ]
        }
    ],
    "schema": {
        "type": "object",
        "title": "Schema",
        "properties": {
            "title": {
                "title": "Title",
                "type": "string",
                "description": "Title shown above the chart",
                "placeholder": " "
            },
            "width": {
                "title": "Width",
                "type": "number",
                "description": "",
                "placeholder": " "
            },
            "height": {
                "title": "Height",
                "type": "number",
                "description": "",
                "placeholder": " "
            },
            "xaxis": {
                "title": "X AXIS Label",
                "type": "string",
                "description": "",
                "placeholder": " "
            },
            "yaxis": {
                "title": "Y AXIS Label",
                "type": "string",
                "description": "",
                "placeholder": " "
            },
            "zaxis": {
                "title": "Z AXIS Label",
                "type": "string",
                "description": "",
                "placeholder": " "
            },
            "show-bar": {
                "title": "Show Values Bar",
                "type": "boolean",
                "description": "",
                "placeholder": " "
            },
            "bar-title": {
                "title": "Bar Title",
                "type": "string",
                "description": "",
                "placeholder": " "
            },
            "bar-thickness": {
                "title": "Bar Thickness",
                "type": "number",
                "description": "Number between 1 and 30.",
                "placeholder": " "
            }, "color-scale": {
                "title": "Color Scale",
                "type": "string",
                "description": "Array of colors and order, Ex [[0, 'rgb(0,0,255)'], [1, 'rgb(255,0,0)']] . ",
                "placeholder": "[[0, 'rgb(0,0,255)'], [1, 'rgb(255,0,0)']]"
            }, "color-scale-wrapper": {
                "type": "array",
                "default": [],
                "items": {
                    "type": "object",
                    "properties": {
                        "priority": {
                            "title": "Priority",
                            "type": "number"
                        },
                        "color": {
                            "title": "Color",
                            "type": "string",
                            "format": "color",
                        }
                    }
                }
            }, "contours": {
                type: "object",
                "title": "Contours",
                "properties": {
                    "z": {
                        "title": "Z",
                        "type": "object",
                        "properties": {
                            "show": {
                                "title": "Show Z Axis Contours",
                                "type": "boolean",
                            },
                            "usecolormap": {
                                "title": "Use Color Map",
                                "type": "boolean",
                            },
                            "highlightcolor": {
                                "title": "Highlight Color",
                                "type": "string",
                                "format": "color",
                            },
                            "project": {
                                "title": "Project",
                                "type": "object",
                                "properties": {
                                    "z": {
                                        "title": "Show Z Axis Projection",
                                        "type": "boolean",
                                    }
                                }
                            },
                        }
                    },
                    "y": {
                        "title": "Y",
                        "type": "object",
                        "properties": {
                            "show": {
                                "title": "Show Y Axis Contours",
                                "type": "boolean",
                            },
                            "usecolormap": {
                                "title": "Use Color Map",
                                "type": "boolean",
                            },
                            "highlightcolor": {
                                "title": "Highlight Color",
                                "type": "string",
                                "format": "color",
                            },
                            "project": {
                                "title": "Project",
                                "type": "object",
                                "properties": {
                                    "y": {
                                        "title": "Show Y Axis Projection",
                                        "type": "boolean",
                                    }
                                }
                            },
                        }
                    },
                    "x": {
                        "title": "X",
                        "type": "object",
                        "properties": {
                            "show": {
                                "title": "Show X Axis Contours",
                                "type": "boolean",
                            },
                            "usecolormap": {
                                "title": "Use Color Map",
                                "type": "boolean",
                            },
                            "highlightcolor": {
                                "title": "Highlight Color",
                                "type": "string",
                                "format": "color",
                            },
                            "project": {
                                "title": "Project",
                                "type": "object",
                                "properties": {
                                    "x": {
                                        "title": "Show X Axis Projection",
                                        "type": "boolean",
                                    }
                                }
                            },
                        }
                    },
                }
            },
            "show-mode-bar": {
                "title": "Show Mode Bar",
                "type": "boolean",
                "description": "Mode Bar is the set of functional icons shown at the top of the chart.",
                "placeholder": " "
            },
            "displaylogo": {
                "title": "Display Plotly Logo",
                "type": "boolean",
                "description": "",
                "placeholder": " "
            }, "mode-bar-buttons-to-remove": {
                "type": "array",
                "default": [],
                "items": {
                    "type": "string",
                }
            }, "mode-bar-buttons-to-remove-wrapper": {
                "title": "Buttons To show on the mode bar",
                "type": "object",
                "default": {},
                "properties": {
                    "toImage": {
                        "title": "To Image",
                        "type": "boolean",
                    },
                    "tableRotation": {
                        "title": "Table Rotation",
                        "type": "boolean",
                    },
                    "orbitRotation": {
                        "title": "Orbit Rotation",
                        "type": "boolean",
                    },
                    "resetCameraDefault3d": {
                        "title": "Reset Camera Default 3d",
                        "type": "boolean",
                    },
                    "resetCameraLastSave3d": {
                        "title": "Reset Camera Last Saved 3d",
                        "type": "boolean",
                    },
                    "hoverClosest3d": {
                        "title": "Hover Closest 3d",
                        "type": "boolean",
                    },
                    "pan3d": {
                        "title": "Pan 3d",
                        "type": "boolean",
                    },
                    "zoom3d": {
                        "title": "Zoom 3d",
                        "type": "boolean",
                        
                    },
                }
            }


        },
        "required": []
    }
};