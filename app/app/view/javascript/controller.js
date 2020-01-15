myApp.controller('autocompCtrl', function($scope, httpClient, $q, $log, $location, $timeout, $attrs){

	var vm = this;
  vm.unFocus = function () {
    document.querySelector('#autocompDivId').style.display = "none";
  }
  getAllIds(); //call query of all devices IDs

	vm.scope = $scope;

	vm.isDisabled = false;
	//vm.noCache = true;

	vm.querySearch   = querySearch;
	vm.selectedItemChange = selectedItemChange;
	vm.searchTextChange   = searchTextChange;
	vm.locationPath = $attrs.locationPath;

	var getAllDevicesId = [];
  

	function querySearch (inputTxt) {//search function
//console.log("QS getAllDevicesId: ", getAllDevicesId["$$state"].value);
    if (getAllDevicesId.length > 0) {
      var results = inputTxt ? getAllDevicesId.filter(createFilterFor(inputTxt)) : getAllDevicesId , deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
      return results;
  	}
	}

  function getAllIds() { //get All devices Id function, set data in getAllDevicesId array
		httpClient.get("app/api/getDeviceIdList", null ).then(
			function(data, response) {
        var newData = data.map(function (repo) {//modifing result to add "value"
          repo.value = repo.name.toLowerCase();//add "value" data for search purpose
          return repo;
        });
        getAllDevicesId = newData;
			},
			function(err) {
				console.log('ERROR', error);
			}
		);
  }

	function createFilterFor(query) {//search function filter on "value" data
		var lowercaseQuery = query.toLowerCase();
		return function filterFn(item) {
			return (item.value.indexOf(lowercaseQuery) === 0);
		};
	}

	function searchTextChange(text) {
    getAllIds();// called to reload all devices if one is added on the fly
//		$log.info('Text changed to ' + text);
	}

	function selectedItemChange(item) {
//		$log.info('Item changed to ' + JSON.stringify(item));
    if( item && item.name!=null && item.name!='') {
    	//$location.path("/dashboard/deviceId/"+item.name);
      $location.path(vm.locationPath+item.name);
    }
	}

});

myApp.controller('myAppCtrl', function($scope, $rootScope, constants, $sce, httpClient, wsClient, headerItemsJson, menuItemsJson, $translate) {

  //Menu
  $translate('MENU.MAP').then(function (headline) { menuItems["menu1"][0]["label"] = headline; });
  $translate('MENU.DASHB').then(function (headline) { menuItems["menu1"][1]["label"] = headline; });
  $translate('MENU.REPORTS').then(function (headline) { menuItems["menu1"][2]["label"] = headline; });
  $translate('MENU.ALERTS').then(function (headline) { menuItems["menu1"][3]["label"] = headline; });
  $translate('MENU.CONTROL').then(function (headline) { menuItems["menu1"][4]["label"] = headline; });
  $translate('MENU.AI').then(function (headline) { menuItems["menu1"][5]["label"] = headline; });
  $translate('MENU.DEVICEMAN').then(function (headline) { menuItems["menu1"][6]["label"] = headline; });
  $translate('MENU.ADDRULE').then(function (headline) { menuItems["menu1"][7]["label"] = headline; });
  $translate('MENU.INFO').then(function (headline) { menuItems["menu1"][8]["label"] = headline; });
  
  $translate('HEADERMENU.NOTIFSETTING').then(function (headline) { headerItems["subitems"][0]["label"] = headline; });
  $translate('HEADERMENU.CHANGEPASS').then(function (headline) { headerItems["subitems"][1]["label"] = headline; });
  $translate('HEADERMENU.LOGOUT').then(function (headline) { headerItems["logout"]["label"] = headline; });

  var vm = this;
  $rootScope.lang = $.cookie('lang');

  vm.scope = $scope;
  if(constants.appTitle){
    vm.appTitle = constants.appTitle;
    headerItemsJson.appname=constants.appTitle;
  }

  vm.user = JSON.parse($.cookie('user'));
  vm.menuItems = menuItemsJson;

  vm.headerItems = headerItemsJson;

  vm.isAdmin=false;
  vm.userGroups=vm.user.groups;
  if(!vm.userGroups) vm.userGroups=[];

  vm.isAdmin=vm.userGroups.includes("admin");
  $rootScope.isAdmin=vm.isAdmin;

  if(vm.isAdmin){
    vm.user.login=JSON.parse($.cookie('user')).name+"(Admin)";
  }

  vm.init = function() {

    $translate.use($rootScope.lang);

    wsClient.onClose.then(function(e) {
      console.log("websocket closed redirect to login", e);
      authorization.validateToken()
      //	if(e.code == "4000" || e.code == "4010") {
      //    authorization.onTokenInvalid() 
      // 	} 
    });
  }

});	


myApp.controller('mapCtrl', function($location, constants, $routeParams, $translate, $rootScope) {
  var vm = this;
  vm.deviceKey = null;

  vm.sources = constants.sources;
  vm.icons = constants.infoWindows.icons;
  vm.defaultCenter=constants.mapDefaultCenter;
  vm.go = function(path) {
    $location.path(path)
  }
    
    vm.init = function() {
      $translate.use($rootScope.lang);
      if($routeParams && $routeParams.deviceId) {
        vm.deviceKey = $routeParams.deviceId;
        vm.params = {"id":  vm.deviceKey }
        vm.tag = "dashboard_" +  vm.deviceKey;
      }
    }

    vm.onSelectAsset = function(data) {
      if(data){
        vm.selectedDevice = data;
        vm.params = {"id": data.assetId} 
      }
      if($routeParams && $routeParams.deviceId != data.assetId )
        $location.path("/map/deviceId/"+data.assetId)
        }

    vm.setMarkerIcon = function(data, marker){
      marker.icon =  constants.sources[marker.source]["mapMarker"]
      return marker
    }
});
    
myApp.controller('menuCtrl', function(headerItemsJson, menuItemsJson) {
    var vm = this;
    vm.headerItems = headerItemsJson;
    vm.user = JSON.parse($.cookie('user'));
    vm.menuItems = menuItemsJson;
});

myApp.controller('notificationCtrl', function(httpClient) {
    var vm = this;
    vm.params = {} 
    httpClient
        .get("app/api/notifications/getSettings", null)
        .then(
        function(data, response) {
            if(data && (data.emails || data.mobiles)){
                vm.emails= [];//data.emails;
                vm.mobiles = []; //data.mobiles;
                for(var i = 0; i < data.emails.length; i++){
                    vm.emails.push({"text":data.emails[i]});
                }
                for(var i = 0; i < data.mobiles.length; i++){
                    vm.mobiles.push({"text":data.mobiles[i]});
                }
            }else{
                vm.emails = [];
                vm.mobiles = [];
            }
        },
        function(err) {
            console.log('ERROR', err);
        });

    vm.buildParams = function(){
        var emailsArray = [];
        var mobilesArray = [];
        for(var i = 0; i < vm.emails.length; i++){
            emailsArray.push(vm.emails[i]["text"]);
        }
        for(var i = 0; i < vm.mobiles.length; i++){
            mobilesArray.push(vm.mobiles[i]["text"]);
        }
        vm.params["emails"] = emailsArray;
        vm.params["mobiles"] = mobilesArray;
    } 

});

myApp.controller('rulesCtrl', function(httpClient, $sce, $timeout,$routeParams) {
    var vm = this;
    var params = {};
    params["scriptName"] = $routeParams.id;
    httpClient
        .get("app/api/rules/getGenericRuleEditor", null)
        .then(
        function(data, response) {
             vm.rulesrc = $sce.trustAsResourceUrl(data);
             $timeout(function() {
               $(".loading-frame").css("display", "none")
               $(".allFrame").css("display","")
            }, 2000);
        },
        function(err) {
            console.log('ERROR');
        });
});
myApp.controller('blocklyCtrl', function(httpClient, $sce, $timeout,$routeParams) {
	var vm = this;
	var params = {};
	params["scriptName"] = $routeParams.id;
	httpClient
		.get("app/api/rules/getGenericBlocklyEditor", null)
		.then(
		function(data, response) {
			vm.rulesrc = $sce.trustAsResourceUrl(data);
			$timeout(function() {
				$(".loading-frame").css("display", "none")
				$(".allFrame").css("display","")
			}, 250);
		},
		function(err) {
			console.log('ERROR');
		});
});

myApp.controller('alertsCtrl', function(httpClient, $routeParams, constants) {
       var vm = this;
       vm.icons = constants.infoWindows.icons;
       vm.deviceKey = null;
     
       vm.init = function(){
            if($routeParams && $routeParams.deviceId) {
                vm.deviceKey = $routeParams.deviceId;
                vm.params = {"id":  vm.deviceKey }
                vm.tag = "dashboard_" +  vm.deviceKey;
                httpClient.get("app/api/getLatestDevice", vm.params).then(
                function(data, response) {
                    vm.summaryData(data)
                },
                function(err) {
                    console.log('ERROR', error);
                });
             }
        }
		
        vm.formatData = function(data){
          console.log(data)
            if(data){
                return {documents: data, count: data.length}  
            }
        }
        
        vm.summaryData = function(data) {
            if(data && data[vm.deviceKey] && data[vm.deviceKey][0] && data[vm.deviceKey][0][0])
                vm.selectedDevice = data[vm.deviceKey][0][0];
                var selectedDeviceSensors = _.keys(vm.selectedDevice);
            	vm.colDef = _.filter(constants.alertsGrid, function(columns) { 
                    return selectedDeviceSensors.indexOf(columns.field) > -1;
                });
            
        }
});
        	

myApp.controller('dashboardCtrl', function($scope,  wsClient, httpClient, $routeParams, constants) {
    var vm = this;
    vm.icons = constants.infoWindows.icons;
    vm.deviceKey = null;
    vm.gridsterOptions = {
        pushing: true,
		floating: true,
        minRows: 1, // the minimum height of the grid, in rows
        maxRows: 100,
        columns: 4, // the width of the grid, in columns
        colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
        rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
        margins: [10, 10], // the pixel distance between each widget
        defaultSizeX: 2, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default height of a gridster item, if not specified
        mobileBreakPoint: 1024, // if the screen is not wider that this, remove the grid layout and stack the items
        minColumns: 1,
        resizable: {
            enabled: true
        },
        draggable: {
            enabled: true
        }
    };

    vm.init = function(){
        if($routeParams && $routeParams.deviceId) {
            vm.deviceKey = $routeParams.deviceId;
            vm.params = {"id":  vm.deviceKey }
            vm.tag = "dashboard_" +  vm.deviceKey;
            wsClient.subscribe(vm.tag, vm.consumeData.bind(vm), $scope.$id);  
            httpClient.get("app/api/getLatestDevice", vm.params).then(
                function(data, response) {
                    vm.consumeData(data)
                },
                function(err) {
                    console.log('ERROR', error);
                });
        }
    }


    vm.consumeData = function(data) {
      
        if(data.latest) {
            data = data.latest
            vm.latest =  data;
        }
        if(data && data[vm.deviceKey] && data[vm.deviceKey][0] && data[vm.deviceKey][0][0]) {
            vm.selectedDevice = data[vm.deviceKey][0][0];
            vm.latest = vm.selectedDevice
		 }
      console.log(vm.selectedDevice)
    }

    vm.historicalFormatData = function(data){
        if(data.historical) 
            return data.historical;
        else
            return data;
    }  

    vm.temperatureFormatData = function(data) {
        return data.latest.temperature;
    }
    
    vm.pressureFormatData = function(data){
        return data.latest.pressure;
    }

    vm.humidityFormatData = function(data){
        return data.latest.humidity;
    }
    
    vm.proximityFormatData = function(data){
        return data.latest.proximity;
    }
    
    vm.accelerometerFormatData= function(data){
        return {"x": data.latest.acc_x, "y": data.latest.acc_y, "z": data.latest.acc_z};
    }
});


myApp.controller('reportsCtrl', function($scope,$rootScope, httpClient, $sce, $timeout,$routeParams) {
  	
  
    var vm = this;
    var params = {};
  console.log($rootScope.isAdmin);
    
});

myApp.controller('controlCtrl', function($scope,$rootScope,httpClient, $sce, $timeout,$routeParams) {
    var vm = this;
    var params = {};
    
});

myApp.controller('aiCtrl', function($scope,$rootScope,httpClient, $sce, $timeout,$routeParams) {
    var vm = this;
    var params = {};
    
});

myApp.controller('addDeviceCtrl', function($scope,$rootScope,httpClient, $sce, $timeout,$routeParams) {
    var vm = this;
    var params = {};
    
});
myApp.controller('infoCtrl', function($scope,$rootScope,httpClient, $sce, $timeout,$routeParams) {
    var vm = this;
    var params = {};
    
});
myApp.controller('dashboardHomeCtrl', function( $location,$scope,$rootScope,httpClient, $sce, $timeout,$routeParams) {
/*    var vm = this;
    var params = {};
  
  	// only for current demo the dashboard home will redirect to the first device dashboard
  	httpClient
        .get("app/api/getDevicesList", null)
        .then(
        function(data, response) {
          console.log(data);
          
          if (data === undefined || data.length == 0) {
    				// array empty or does not exist
          }else{
             var deviceId=data[0].id;
             console.log(deviceId);
             $location.path("/dashboard/deviceId/"+deviceId);
          }
            
        },
        function(err) {
            console.log('ERROR');
        });
  */  
});



myApp.controller('changePasswordCtrl', function ($scope, $rootScope, wsClient, httpClient, $sce, $route, $routeParams, $interval, $filter, $location, $cookies, $timeout, $translate) {
  var vm = this;
  var changePasswordApi = "login/api/changePassword";

  var psw5 = "Password changed successfully.";
  var psw6 = "Invalid current password.";

  var changePasswordForm = 
      {
        "form" : [ {
          "type" : "section",
          "htmlClass" : "row",
          "items" : [   

            {
              "type" : "section",
              "htmlClass" : "col-xs-4",
              "items" : [
                {
                  "key" : "oldPassword",
                  "type": "password"
                },
                {
                  "key" : "newPassword",
                  "type": "password",
                  "ngModelOptions": { allowInvalid: true },
                  "onChange": function(modelValue, form, model, scope) {
                    console.log(model)
                    if(modelValue != model["confirmPassword"])
                      scope.$root.$broadcast('schemaForm.error.newPassword','doNotMatch',false);
                    else {
                      scope.$root.$broadcast('schemaForm.error.newPassword','doNotMatch',true);
                      scope.$root.$broadcast('schemaForm.error.confirmPassword','doNotMatch',true);
                    }
                  }
                },
                {
                  "key" : "confirmPassword",
                  "type": "password",
                  "ngModelOptions": { allowInvalid: true },
                  "onChange": function(modelValue, form, model, scope) {
                    console.log(model)
                    if(modelValue != model["newPassword"])
                      scope.$root.$broadcast('schemaForm.error.confirmPassword','doNotMatch',false);
                    else {
                      scope.$root.$broadcast('schemaForm.error.newPassword','doNotMatch',true);
                      scope.$root.$broadcast('schemaForm.error.confirmPassword','doNotMatch',true);
                    }
                  }
                }
              ]
            }
          ]
        }],
        "schema" : {
          "type" : "object",
          "title" : "Schema",
          "properties" : {
            "oldPassword": {
              "title": "Current Password",
              "type": "string"
            },
            "newPassword": {
              "title": "New Password",
              "type": "string",
              "validationMessage": {
                "doNotMatch": "Passwords do not match."
              }
            },
            "confirmPassword" : {
              "type" : "string",
              "title": "Confirm Password",
              "validationMessage": {
                "doNotMatch": "Passwords do not match."
              }
            }
          },
          "required" : [ "oldPassword", "newPassword", "confirmPassword" ]
        }
      };

  vm.init = function() {

    $translate(['PASSWORD.PSW1','PASSWORD.PSW2','PASSWORD.PSW3','PASSWORD.PSW4','PASSWORD.PSW5','PASSWORD.PSW6']).then(function (translations) {
      changePasswordForm.schema.properties.oldPassword.title = translations['PASSWORD.PSW1'];
      changePasswordForm.schema.properties.newPassword.title = translations['PASSWORD.PSW2'];
      changePasswordForm.schema.properties.confirmPassword.title = translations['PASSWORD.PSW3'];
      changePasswordForm.schema.properties.newPassword.validationMessage.doNotMatch = translations['PASSWORD.PSW4'];
      changePasswordForm.schema.properties.confirmPassword.validationMessage.doNotMatch = translations['PASSWORD.PSW4'];

      psw5 = translations['PASSWORD.PSW5'];
      psw6 = translations['PASSWORD.PSW6'];

      vm.frmGlobalOptions = {
        "destroyStrategy" : "remove",
        "formDefaults": {"feedback": false},
        "validationMessage": { 
          302: "Required field."
        }
      }
      vm.schema =  angular.copy(changePasswordForm.schema);
      vm.form =   angular.copy(changePasswordForm.form);
      vm.model = {}
    });

  }


  vm.changePassword = function(form) {
    $scope.$broadcast('schemaFormValidate');
    // Then we check if the form is valid
    if (form.$valid) {
      var params = {
        "oldPassword": vm.model["oldPassword"],
        "newPassword": vm.model["newPassword"]
      }
      httpClient.get(changePasswordApi, params ).then(
        function(data, response) {
          if(data && data.token) {
            console.log("data: ", data);
            vm.successMsg = psw5;
            //MFE: we cannot use $cookies as ngCookies encodes as uri the cookies
            //$cookies.put('token', data["token"], {'expires': data["expires"], 'path': data["path"]});
            // $cookies.put('user', data["user"]);
            window.document.cookie = "token=" + data["token"] + ";expires=" + data["expires"]+ ";Path=/;Secure";
            window.document.cookie = "user=" + JSON.stringify(data["user"]) + ";expires=" + data["expires"]+ ";Path=/;Secure";
            httpClient.updateToken(data["token"] );
            wsClient.updateTokenAndReconnect();
          }
          console.log("resolve", data)
        },
        function(err) {
          if(err.errorCode == "INVALID_CREDENTIALS")
            vm.errorMsg = psw6;
            else
              vm.errorMsg = err.errorDetail;
          console.log("reject", err);
        }
      )
    } 

  },

    vm.closeMessage = function() {
    vm.successMsg = "";
    vm.errorMsg = "";
  }


});

