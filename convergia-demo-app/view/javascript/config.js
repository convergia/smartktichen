//configuration constants


//login apis and expiry value
var login = {
   redirectTarget: "/convergia-demo-app/view/html/index.html#/main",
   expiry:6,
   loginTarget: "/convergia-demo-app/view/html/login.html",
   loginApi: "/convergia-demo-app/api/login/login",
   validateTokenApi: "/convergia-demo-app/api/login/validateToken"
};

//web sockets 
var wssConfig = ["wsClientProvider",function (wsClientProvider) {
    wsClientProvider.setPublishChannel("requestChannel");
    wsClientProvider.setSubscribeChannel("responseChannel");
}];

//https provider
var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
}]

var mapDefaultCenter="-26.9491,-71.7117";
