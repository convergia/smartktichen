

//menu items user
var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
//    { "id": "1", "iconClass": "fa fa-fw fa-map", "label": "Map", "route": "#/map", "active": "true" },
    { "id": "2", "iconClass": "fa fa-fw fa-sliders", "label": "Dashboard", "route": "#/dashboard-home", "active": "false" },
/*    { "id": "2", "iconClass": "fa fa-fw fa-file", "label": "Reports", "route": "#/reports", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-warning", "label": "Alerts", "route": "#/alerts", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-gear", "label": "Control", "route": "#/control", "active": "false", "roles":["admin"] },
    { "id": "2", "iconClass": "fa fa-fw fa-info", "label": "A.I", "route": "#/ai", "active": "false", "roles":["admin"] },*/
    { "id": "2", "iconClass": "fa fa-fw fa-user-plus", "label": "Manage Devices", "route": "#/list-devices", "active": "false", "roles":["admin"] },
    { "id": "3", "iconClass": "fa fa-fw fa-list-alt", "label": "Add Rule", "route": "#/rules", "active": "false", "roles":["admin"] },
/*    { "id": "3", "iconClass": "fa fa-fw fa-list-alt", "label": "Add Blockly Rule", "route": "#/blockly", "active": "false", "roles":["admin"] },
    { "id": "2", "iconClass": "fa fa-fw fa-info-circle", "label": "Info", "route": "#/info", "active": "false" },*/
  ]
};


var headerItems = {
    "logo": "https://i.ibb.co/TmfS643/logo-450.png",
    "items": [],
    "subitems": [
        {"id":"1", "iconClass":"fa fa-bell", "label": "Notification Settings", "route":"#/notifications", "active":"false","roles":["admin"]},
        {"id":"2", "iconClass":"fa fa-bell", "label": "Change Password", "route":"#/changePassword", "active":"false"} 
    ], 
    "logout": {"icon": "fa fa-sign-out", "label": "Logout", "route":"#/logout"},
  "appname":"CxC App Factory"
};


var routingItems = {
  "params": [
    {"route": "map", "template": "/app/view/html/views/map/map.html", "controller": "mapCtrl as vm"},
    {"route": "map/deviceId/:deviceId*", "template": "/app/view/html/views/map/map.html", "controller": "mapCtrl as vm"},
    {"route": "dashboard/deviceId/:deviceId*", "template": "/app/view/html/views/dashboard/dashboard.html","controller": "dashboardCtrl as vm"},
    {"route": "alerts/deviceId/:deviceId*", "template": "/app/view/html/views/logs/alerts.html","controller": "alertsCtrl as vm"},
    {"route": "alerts", "template": "/app/view/html/views/alerts/alerts.html" },
    {"route": "notifications", "template": "/app/view/html/views/notifications/notifications.html", controller: "notificationCtrl as vm"},
    {"route": "rules", "template": "/app/view/html/views/genericRules/genericAllRule.html", controller: "rulesCtrl as vm"},

    {"route": "blockly", "template": "/app/view/html/views/genericRules/genericBlockly.html", controller: "blocklyCtrl as vm"},

    {"route": "logout", "template": "/login/view/logout.html"},  
    { "route": "dashboard-home", "template": "/app/view/html/views/dashboard/dashboard-home.html", controller: "dashboardHomeCtrl as vm" },
    { "route": "reports", "template": "/app/view/html/views/reports/reports.html", controller: "reportsCtrl as vm" },
    { "route": "control", "template": "/app/view/html/views/control/control.html", controller: "controlCtrl as vm" },
    { "route": "ai", "template": "/app/view/html/views/ai/ai.html", controller: "aiCtrl as vm" },
    { "route": "add-device", "template": "/app/view/html/views/devices/add-device.html", controller: "addDeviceCtrl as vm" },
    { "route": "info", "template": "/app/view/html/views/info/info.html", controller: "infoCtrl as vm" },
    { "route": "404", "template": "/app/view/html/views/404/404.html" },
     {"route": "changePassword", "template": "/app/view/html/views/identity/changePassword.html", "controller": "changePasswordCtrl"}
  ]
};
//admin routes
var adminRoutes=["/control","/ai","/add-device","/rules"];
