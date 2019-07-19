//layout params

//menu items
var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
    {"id":"1", "iconClass":"fa fa-map", "label": "Map", "route":"#/main", "active":"true"},
    {"id":"2", "iconClass":"fa fa-warning", "label": "Alerts", "route":"#/alerts", "active":"false"},
      {"id":"3", "iconClass":"fa fa-list-alt", "label": "Rules Designer", "route":"#/rules", "active":"false"}
  ]
}; 

//header items
var headerItems = {
    "logo": "https://i.ibb.co/gMTVwVK/logo-160-croped.png",
    "items": [],
    "logout": {"icon": "fa fa-sign-out", "label": "Logout", "route":"#/logout"}
};

//angular js routs
var routingItems = {
  "params": [
    {"route": "/", "template": "/convergia-demo-app/view/html/views/main/main.html", "controller": "mapCtrl as vm"},
    {"route": "main", "template": "/convergia-demo-app/view/html/views/main/main.html", "controller": "mapCtrl as vm"},
    {"route": "dashboard/deviceId/:deviceId*", "template": "/convergia-demo-app/view/html/views/main/dashboard.html","controller": "dashboardCtrl as vm"},
    {"route": "alerts", "template": "/convergia-demo-app/view/html/views/alerts/alerts.html"},
      {"route": "rules", "template": "/convergia-demo-app/view/html/views/genericRules/genericAllRule.html", controller: "rulesCtrl as vm"},
    {"route": "logout", "template": "/convergia-demo-app/view/html/logout.html"}
  ]
};
