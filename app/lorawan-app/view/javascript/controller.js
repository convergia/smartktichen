myApp.controller('swDashboardCtrl', function($scope,  wsClient, httpClient, $routeParams, constants, _, $routeParams, $translate, $rootScope) {
    var vm = this;
  
	  // list of all charts accessible through the select box
  	// array of objects consisting of a name and an url of the file that will be included by ng-include
  	// "code" has been added to support external call to chart from gauge
  
    vm.graph = [
      { code:"temperature", name: 'Temperature', url: '/lorawan-app/view/views/dashboard/graph_temp.html'},
      { code:"battery", name: 'Battery', url: '/lorawan-app/view/views/dashboard/graph_bat.html'},
      { code:"probe_temperature", name: 'Probe Temperature', url: '/lorawan-app/view/views/dashboard/graph_anemo.html'},
      { code:"rssi", name: 'rssi', url: '/lorawan-app/view/views/dashboard/graph_rssi.html'},
      { code:"humidity", name: 'Humidity', url: '/lorawan-app/view/views/dashboard/graph_humid.html'},
      { code:"snr", name: 'snr', url: '/lorawan-app/view/views/dashboard/graph_snr.html'}
    ];

  $translate('TEMP').then(function (headline) { vm.graph[0].name = headline; });
  $translate('BATTERY').then(function (headline) { vm.graph[1].name = headline; });
  $translate('PROBE_TEMP').then(function (headline) { vm.graph[2].name = headline; });
  $translate('HUMID').then(function (headline) { vm.graph[4].name = headline; });
  $translate('RSSI').then(function (headline) { vm.graph[3].name = headline; });
  $translate('SNR').then(function (headline) { vm.graph[5].name = headline; });


    vm.selectedGraphLeft = vm.graph[0];//default selection of first chart/left
  	vm.selectedGraphRight = vm.graph[1];//default selection of second chart/right
  
/* form url param to select chert */
  	if($routeParams.chart){
      var selected=_.where(vm.graph, {code: $routeParams.chart})[0];
      vm.selectedGraphLeft=selected;
    }
/* \ */

    vm.icons = constants.infoWindows.icons;
    vm.deviceKey = null;
  vm.gridsterOptionsMB = {
    pushing: false,
    floating: false,
    minRows: 1, // the minimum height of the grid, in rows
    maxRows: 2,
    columns: 5, // the width of the grid, in columns
    colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
    rowHeight: '150', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
    margins: [10, 10], // the pixel distance between each widget
    defaultSizeX: 1, // the default width of a gridster item, if not specifed
    defaultSizeY: 1, // the default height of a gridster item, if not specified
    mobileBreakPoint: 1024, // if the screen is not wider that this, remove the grid layout and stack the items

    resizable: {
      enabled: false
    },
    draggable: {
      enabled: false
    }
  };
    vm.gridsterOptions = {
        pushing: false,
				floating: false,
        minRows: 1, // the minimum height of the grid, in rows
        maxRows: 100,
        columns: 6, // the width of the grid, in columns
        colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
        rowHeight: '150', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
        margins: [10, 10], // the pixel distance between each widget
        defaultSizeX: 2, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default height of a gridster item, if not specified
        mobileBreakPoint: 1024, // if the screen is not wider that this, remove the grid layout and stack the items
        minColumns: 1,
        resizable: {
            enabled: false
        },
        draggable: {
            enabled: false
        }
    };

  vm.metricBoxClicked=function(tag){
    var selected=_.where(vm.graph, {code: tag})[0];
    console.log(selected)
    vm.selectedGraphLeft=selected;
  }

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
          console.log(vm.latest)
        }
        if(data && data[vm.deviceKey] && data[vm.deviceKey][0] && data[vm.deviceKey][0][0]) {
            vm.selectedDevice = data[vm.deviceKey][0][0];
            vm.latest = vm.selectedDevice
            console.log(vm.selectedDevice)
		 }
      
    }

    vm.historicalFormatData = function(data){
      if(data.historical) {
        return data.historical;
      } else {
        for(var i=0; i<data.length; i++){
          var d = new Date(data[i].creationDate);

          var date_format = d.getFullYear().toString()
          +"-"+(('0'+(d.getMonth()+1)).slice(-2))
          +"-"+(('0'+d.getDate()).slice(-2))
          +" "+(('0'+d.getHours()).slice(-2))
          +":"+(('0'+d.getMinutes()).slice(-2))
          +":"+(('0'+d.getSeconds()).slice(-2));

          data[i].creationDate = date_format;//mDate.toLocaleDateString( undefined, options);
        }
        return data;
      }
    }

    vm.batteryFormatData = function(data) {
        return data.latest.battery;
    }
    vm.temperatureFormatData = function(data) {
        return data.latest.temperature;
    }
    
    vm.pressureFormatData = function(data){
        return data.latest.pressure;
    }

    vm.phFormatData = function(data){
        return data.latest.ph;
    }
    vm.anemometerFormatData = function(data){
        return data.latest.anemometer;
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


    vm.pluviometer1FormatData = function(data){
      return data.latest.pluviometer_1;
    }
    vm.pluviometer2FormatData = function(data){
      return data.latest.pluviometer_2;
    }
    vm.pluviometer3FormatData = function(data){
      return data.latest.pluviometer_3;
    }
    vm.soilMoistureFormatData = function(data){
      return data.latest.soil_moisture;
    }
    vm.windDirFormatData = function(data){
      return data.latest.wind_direction;
    }

  vm.setFocus = function() {
		document.querySelector('#autocompDivId').style.display = "block";
    setTimeout(function() {
      document.querySelector('#autoCompleteId').focus();
    }, 0);
  }
});

myApp.controller('saReportsCtrl', function($scope, $log, wsClient, httpClient, $routeParams, constants, _, $filter, $timeout, $translate) {

  var vm = this;
  vm.deviceKey = null;

  /* search */
  vm.icons = constants.infoWindows.icons;
  vm.setFocus = function() {
		document.querySelector('#autocompDivId').style.display = "block";
    setTimeout(function() {
      document.querySelector('#autoCompleteId').focus();
    }, 0);
  }
  /* \ */

  if($.cookie('lang')=='es') {
    var monthNames = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  } else if($.cookie('lang')=='fr') {
    var monthNames = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
  } else {
    var monthNames = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  var vFor = "For";
  var vFrom ="From";
  var vTo ="To";

  $translate('REPORTS.FOR').then(function (headline) { vFor = headline; });
  $translate('REPORTS.FROM').then(function (headline) { vFrom = headline; });
  $translate('REPORTS.TO').then(function (headline) { vTo = headline; });

  vm.includes =  {
    battery: '/lorawan-app/view/views/dashboard/graph_bat.html?',
    temperature : '/lorawan-app/view/views/dashboard/graph_temp.html?',
    soil: '/lorawan-app/view/views/dashboard/graph_soil.html?',
    anemo: '/lorawan-app/view/views/dashboard/graph_anemo.html?',
    press: '/lorawan-app/view/views/dashboard/graph_press.html?',
    humid: '/lorawan-app/view/views/dashboard/graph_humid.html?'
  };

  vm.startDate = null;
  vm.endDate = null;
  vm.getDateRangeStart = "";
  vm.getDateRangeEnd = "";

  vm.setoutput = {
    name: 'fifty'
  };

  vm.onSetTime = function(date){
		var ts = Date.parse(date);
    var topLimitTs = ts+(86400000-1)//+23h59:59.999

    vm.params = {
      "id":  vm.deviceKey,
      "timeStart": ts,
      "timeEnd": topLimitTs
    }
    var showDate = new Date(ts);
		vm.getDateRangeStart = vFor+" "+monthNames[showDate.getMonth()]+" "+showDate.getDate()+" "+showDate.getFullYear();
    vm.getDateRangeEnd ="";
    
    vm.loadRecords();
  }

  vm.startDateOnSetTime = function(date){
    vm.startDate = Date.parse(date);
    vm.params = {
      "id":  vm.deviceKey,
      "timeStart": vm.startDate,
      "timeEnd": vm.endDate
    }
    var showDate = new Date(vm.startDate);
		vm.getDateRangeStart = vFrom+" "+monthNames[showDate.getMonth()]+" "+showDate.getDate()+" "+showDate.getFullYear();

    if(vm.endDate!=null) vm.loadRecords();
  }

	vm.endDateOnSetTime = function(date){
    vm.endDate = Date.parse(date)+(86400000-1);//+23h59:59.999;
    vm.params = {
      "id":  vm.deviceKey,
      "timeStart": vm.startDate,
      "timeEnd": vm.endDate
    }
    var showDate = new Date(vm.endDate);
    vm.getDateRangeEnd = " "+vTo+" "+monthNames[showDate.getMonth()]+" "+showDate.getDate()+" "+showDate.getFullYear();

    if(vm.startDate!=null) vm.loadRecords();
  }

  vm.init = function(){
    if($routeParams && $routeParams.deviceId) {
      vm.deviceKey = $routeParams.deviceId;
			vm.fiftyRecords();
    }
  }

  vm.fiftyRecords = function(){
    vm.params = {"id":  vm.deviceKey }
    $translate('REPORTS.LAST50').then(function (headline) {
      vm.getDateRangeStart = headline;
    });
    vm.getDateRangeEnd ="";
    vm.loadRecords();
  }

  vm.loadRecords = function(){
    $('#exportPdfButton').hide();

    httpClient.get("app/api/getDeviceHistory", vm.params).then(
      function(data, response) {
        vm.subjects = data;
      },
      function(err) {
        console.log('ERROR', err);
      });

    httpClient.get("app/api/getDeviceDataSummary", vm.params).then(
      function(data, response) {
        vm.summaries = data[0];

        $scope.vm.sumMax0 = vm.summaries.batteryMax;
        $scope.vm.sumMax1 = vm.summaries.tempMax;
        $scope.vm.sumMax2 = vm.summaries.smMax;
        $scope.vm.sumMax3 = vm.summaries.aneMax;
        $scope.vm.sumMax4 = vm.summaries.pressMax;
        $scope.vm.sumMax5 = vm.summaries.humMax;

        $scope.vm.sumMin0 = vm.summaries.batteryMin;
        $scope.vm.sumMin1 = vm.summaries.tempMin;
        $scope.vm.sumMin2 = vm.summaries.smMin;
        $scope.vm.sumMin3 = vm.summaries.aneMin;
        $scope.vm.sumMin4 = vm.summaries.pressMin;
        $scope.vm.sumMin5 = vm.summaries.humMin;

        $scope.vm.sumAvg0 = ((vm.summaries.batteryMax+vm.summaries.batteryMin)/2).toFixed(2);
        $scope.vm.sumAvg1 = ((vm.summaries.tempMax+vm.summaries.tempMin)/2).toFixed(2);
        $scope.vm.sumAvg2 = ((vm.summaries.smMax+vm.summaries.smMin)/2).toFixed(2);
        $scope.vm.sumAvg3 = ((vm.summaries.aneMax+vm.summaries.aneMin)/2).toFixed(2);
        $scope.vm.sumAvg4 = ((vm.summaries.pressMax+vm.summaries.pressMin)/2).toFixed(2);
        $scope.vm.sumAvg5 = ((vm.summaries.humMax+vm.summaries.humMin)/2).toFixed(2);
      },
      function(err) {
        console.log('ERROR', err);
      });
    
		var refresh = Date.now();
    $scope.vm.includeBat = vm.includes.battery+refresh;
    $scope.vm.includeTemp = vm.includes.temperature+refresh;
    $scope.vm.includeSoil = vm.includes.soil+refresh;
    $scope.vm.includeAnemo = vm.includes.anemo+refresh;
    $scope.vm.includePress = vm.includes.press+refresh;
    $scope.vm.includeHumid = vm.includes.humid+refresh;

    vm.startDate = null;
    vm.endDate = null;

    $('#exportPdfButton').prop( "disabled", false );
    for(key=0;key<nrDiv.length;key++) {
    	document.querySelector('#png-container'+key).innerHTML = '';
    }

  }


	/* documents export */
  vm.item_date = new Date();
  var fileDate = $filter('date')(vm.item_date, "yyyy-MM-dd");
  var filePrefix = "cxc-sw-";

  vm.ExcelfileExport = function(){
	  var fileName = filePrefix+vm.deviceKey+"_export_"+fileDate+".xlsx";

    var wb = XLSX.utils.table_to_book(document.getElementById('report-table'));
    XLSX.writeFile(wb, fileName);
  }

  vm.savePDF = function() {
    var quotes = document.getElementById('chartsContainer');
    html2canvas(quotes, {
      onrendered: function(canvas) {
        //! MAKE YOUR PDF
        var pdf = new jsPDF('p', 'pt', 'a4');

        for (var i = 0; i <= quotes.clientHeight/980; i++) {//980
          var srcImg  = canvas;
          var sX	  = 0;
          var sY	  = 930*i;
          var sWidth  = 758;
          var sHeight = 930;
          var dX	  = 0;
          var dY	  = 0;
          var dWidth  = 758;
          var dHeight = 930;

          window.onePageCanvas = document.createElement("canvas");
          onePageCanvas.setAttribute('width', 758);
          onePageCanvas.setAttribute('height', 930);//1120
          var ctx = onePageCanvas.getContext('2d');

          ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

          var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

          var width		 = onePageCanvas.width;
          var height		= onePageCanvas.clientHeight;

          if (i > 0) {
            pdf.addPage(595, 842);
          }
          pdf.setPage(i+1);
          pdf.addImage(canvasDataURL, 'PNG', 0, 0, (width*.70), (height*.70));

        }
        var fileName = filePrefix+vm.deviceKey+"_export_"+fileDate+".pdf";
        pdf.save(fileName);
      }
    });
  }


  var nbrImage = 0;
  var nbrCharts = 0;
  var nrDiv = document.getElementsByClassName('png-container');
  
  vm.convertTopng = function(event) {
		event.target.disabled = true;
    nbrImage = 0;

    var DOMURL = self.URL || self.webkitURL || self;
    var svgObj = document.getElementsByTagName('svg');
    
    nbrCharts = svgObj.length;

    angular.forEach(svgObj, function (value, key) {

      var svgElem = value;
      var svgString = new XMLSerializer().serializeToString(svgElem);


      //var canvas = document.getElementById("canvaselm");
      var canvas = document.createElement("canvas");
      canvas.width = 580;
      canvas.height = 400;

      var ctx = canvas.getContext("2d");
      var DOMURL = self.URL || self.webkitURL || self;
      var img = new Image();
      var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});

      var url = DOMURL.createObjectURL(svg);

      img.onload = function() {
        ctx.drawImage(img, 0, 0);
        var png = canvas.toDataURL("image/png");
        document.querySelector('#png-container'+key).innerHTML = '<img src="'+png+'"/>';
        DOMURL.revokeObjectURL(png);
        nbrImage++;
        if(nbrImage>=nbrCharts) {
          $timeout(vm.savePDF() , Math.random() * 1000, false);
        }
      };
      img.src = url;
      svgElem.style.display = 'none';


    });

  }

  vm.historicalFormatData = function(data){
    nbrCharts++;
console.log("nbrCharts: "+nbrCharts+" "+nrDiv.length);
    if(nbrCharts >= nrDiv.length ) $('#exportPdfButton').show();

    if(data.historical) {
      return data.historical;
    } else {
      for(var i=0; i<data.length; i++){
        var d = new Date(data[i].creationDate);

        var date_format = d.getFullYear().toString()
        +"-"+(('0'+(d.getMonth()+1)).slice(-2))
        +"-"+(('0'+d.getDate()).slice(-2))
        +" "+(('0'+d.getHours()).slice(-2))
        +":"+(('0'+d.getMinutes()).slice(-2))
        +":"+(('0'+d.getSeconds()).slice(-2));

        data[i].creationDate = date_format;//mDate.toLocaleDateString( undefined, options);
      }
      return data;
    }
  }  

});
