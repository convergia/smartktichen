//angular js initilaizer
var myApp = angular.module('myApp', ["Layout",  "WsClient", "HttpClient", "Map", "Chart",  "gridster", "Grid",  "Gauge", 'Odometer']);

myApp
    .constant("menuItemsJson",  menuItems)
		.constant("menuItemsAdminJson",  menuItemsAdmin)
    .constant("headerItemsJson", headerItems)
    .constant("routingJson", routingItems)
		.constant("adminRoutesJson",adminRoutes)
    .config(httpsConfig)
    .config(wssConfig)
    .config(function($routeProvider, routingJson){
    	for(var i = 0; i < routingJson.params.length; i++){
            $routeProvider.when("/" + routingJson.params[i].route, {
                templateUrl: routingJson.params[i].template,
                controller: routingJson.params[i].controller
            })
        }
    	$routeProvider.otherwise("#/");
	})
    
    myApp.run(function($rootScope, $location,adminRoutesJson) {
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
