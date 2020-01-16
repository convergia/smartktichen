const __ACCELEROMETER__ = {
    "name": "accelerometer",
    "label": "Accelerometer",
    "class": "scriptr-accelerometer",
    "commonData": true,
    "show": true,
    "defaults": {
        "transport": "wss",
        "msg-tag": "accelerometer",
        "on-format-data": "return data;",
        "boxLabel": "Accelerometer",
        //     ,"api" : "UIComponents/dashboard/frontend/examples/accelerometer/getAccelerometerData"
    },
    "box": {
        sizeX: 4,
        sizeY: 6,
        minSizeX: 3,
        minSizeY: 6,
    },
    "imgCls": "",
    "imgSrc": "//scriptr-cdn.s3.amazonaws.com/uicomponents/dashboard-builder/images/accelerometer.png",
    "form": [{
        type: "tabs",
        tabs: [
            {
                title: "Data",
                items: ["transport", "msg-tag", "api",
                    "api-params", "data",
                    // "on-format-data"
                ]
            }]
    }],
    "schema": {
        "type": "object",
        "title": "Schema",
        "properties": {
            "data": {
                "title": "Data",
                "type": "string",
                "description": "X,Y,Z Value"
            }
        },
        "required": []
    }
};