var myApp = angular.module('myApp', ["DateTimePicker","Layout", "schemaForm", "WsClient", "HttpClient", "DataService", "MetricBox", "Map", "Chart", "Grid", "Gauge", "ngTagsInput", "gridster", "Button", "Accelerometer", "ui.bootstrap", "ngRoute", "pascalprecht.translate", "ui.select", "ui.codemirror", 'schemaForm-datepicker', 'schemaForm-timepicker', 'schemaForm-datetimepicker', 'ngMaterial', "ngAnimate", "Identity", "pascalprecht.translate", "tmh.dynamicLocale", "ngCookies"]);

myApp
  .constant("menuItemsJson",  menuItems)
  .constant("adminRoutesJson",adminRoutes)
  .constant("headerItemsJson", headerItems)
  .constant("routingJson", routingItems)
  .config(httpsConfig)
  .config(wssConfig)
  .config(function($routeProvider, routingJson, $sceProvider){
    for(var i = 0; i < routingJson.params.length; i++){
      $routeProvider
        .when("/" + routingJson.params[i].route, {
        templateUrl: routingJson.params[i].template,
        controller: routingJson.params[i].controller,
        reloadOnSearch: false
      }).otherwise("/map")
    }
  // $routeProvider.otherwise("/map")
});
//i18n
myApp.config(function ($translateProvider) {
    $translateProvider
    .useStaticFilesLoader({
        prefix: '/i18n/local-',
        suffix: '.json'
    }) 
    // remove the warning from console log by putting the sanitize strategy
    .useSanitizeValueStrategy('sanitizeParameters')    
    .preferredLanguage($.cookie('lang'));
});
// \
myApp.run(function($rootScope, $location,adminRoutesJson) {
  $rootScope.lang = 'en';
  // register listener to watch route changes
  $rootScope.$on( "$routeChangeStart", function(event, next, current) {

    //choose main path if now path passed, apply admin pages guard not to allow access from direct url for non admin user
    if($location.$$path == ""
       || (adminRoutesJson.includes($location.$$path) && ! $rootScope.isAdmin)
      ){
      $location.path("/main")
    }

  })     
});
