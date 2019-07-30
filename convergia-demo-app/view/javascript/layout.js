//layout params

//menu items
var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
    { "id": "1", "iconClass": "fa fa-fw fa-map", "label": "Map", "route": "#/main", "active": "true" },
    { "id": "2", "iconClass": "fa fa-fw fa-sliders", "label": "Dashboard", "route": "#/dashboard", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-file", "label": "Reports", "route": "#/reports", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-warning", "label": "Alerts", "route": "#/alerts", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-gear", "label": "Control", "route": "#/control", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-info", "label": "A.I", "route": "#/ai", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-user-plus", "label": "Add Device", "route": "#/add-device", "active": "false" },
    { "id": "3", "iconClass": "fa fa-fw fa-list-alt", "label": "Add Rule", "route": "#/rules", "active": "false" },
    { "id": "2", "iconClass": "fa fa-fw fa-info-circle", "label": "Info", "route": "#/info", "active": "false" },
  ]
};

//header items
var headerItems = {
  "logo": "https://i.ibb.co/gMTVwVK/logo-160-croped.png",
  "items": [],
  "logout": { "icon": "fa fa-sign-out", "label": "Logout", "route": "#/logout" },
  "appname":"CxC Smart Agriculture"
};

//angular js routs
var routingItems = {
  "params": [
    { "route": "/", "template": "/convergia-demo-app/view/html/views/main/main.html", "controller": "mapCtrl as vm" },
    { "route": "main", "template": "/convergia-demo-app/view/html/views/main/main.html", "controller": "mapCtrl as vm" },
    { "route": "dashboard/deviceId/:deviceId*", "template": "/convergia-demo-app/view/html/views/main/dashboard.html", "controller": "dashboardCtrl as vm" },
    { "route": "alerts", "template": "/convergia-demo-app/view/html/views/alerts/alerts.html" },
    { "route": "rules", "template": "/convergia-demo-app/view/html/views/genericRules/genericAllRule.html", controller: "rulesCtrl as vm" },
    
    { "route": "reports", "template": "/convergia-demo-app/view/html/views/reports/reports.html", controller: "reportsCtrl as vm" },
    { "route": "control", "template": "/convergia-demo-app/view/html/views/control/control.html", controller: "controlCtrl as vm" },
    { "route": "ai", "template": "/convergia-demo-app/view/html/views/ai/ai.html", controller: "aiCtrl as vm" },
    { "route": "add-device", "template": "/convergia-demo-app/view/html/views/devices/add-device.html", controller: "addDeviceCtrl as vm" },
    { "route": "info", "template": "/convergia-demo-app/view/html/views/info/info.html", controller: "infoCtrl as vm" },
    
    { "route": "logout", "template": "/convergia-demo-app/view/html/logout.html" }
  ]
};
