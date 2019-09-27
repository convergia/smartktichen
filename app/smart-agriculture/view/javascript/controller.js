
myApp.controller('swDashboardCtrl', function($scope,  wsClient, httpClient, $routeParams, constants, _, $routeParams) {
    var vm = this;
  
	  // list of all charts accessible through the select box
  	// array of objects consisting of a name and an url of the file that will be included by ng-include
  	// "code" has been added to support external call to chart from gauge
  
    vm.graph = [
      { code:"temperature", name: 'Temperature', url: '/smart-agriculture/view/views/dashboard/graph_temp.html'},
      { code:"battery", name: 'Battery', url: '/smart-agriculture/view/views/dashboard/graph_bat.html'},
      { code:"anemometer", name: 'Wind speed', url: '/smart-agriculture/view/views/dashboard/graph_anemo.html'},
/*      { code:"winddir",name: 'Wind direction', url: '/smart-agriculture/view/views/dashboard/graph_wind.html'},*/
      { code:"pressure", name: 'Pressure', url: '/smart-agriculture/view/views/dashboard/graph_press.html'},
      { code:"humidity", name: 'Humidity', url: '/smart-agriculture/view/views/dashboard/graph_humid.html'},
      { code:"soil",name: 'Soil moisture', url: '/smart-agriculture/view/views/dashboard/graph_soil.html'}
    ];
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
        if(data.historical) 
            return data.historical;
        else
            return data;
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


});

myApp.controller('saReportsCtrl', function($scope, $log, wsClient, httpClient, $routeParams, constants, _, $filter, $timeout) {

  var vm = this;
  vm.deviceKey = null;

  vm.init = function(){
    if($routeParams && $routeParams.deviceId) {
      vm.deviceKey = $routeParams.deviceId;
      vm.params = {"id":  vm.deviceKey }

      httpClient.get("app/api/getDeviceHistory", vm.params).then(
        function(data, response) {

          vm.subjects = data;
        },
        function(err) {
          console.log('ERROR', error);
        });
    }
  }

  vm.item_date = new Date();
  var fileDate = $filter('date')(vm.item_date, "yyyy-MM-dd");
  var filePrefix = "cxc-sa-";
    
  vm.ExcelfileExport = function(){
	
    var fileName = filePrefix+vm.deviceKey+"_export_"+fileDate+".xlsx";

    var wb = XLSX.utils.table_to_book(document.getElementById('sjs-table'));
    XLSX.writeFile(wb, fileName);
  }

vm.savePDF = function() {
    var quotes = document.getElementById('chartsContainer');
    html2canvas(quotes, {
      onrendered: function(canvas) {
        //! MAKE YOUR PDF
        var pdf = new jsPDF('p', 'pt', 'a4');

        for (var i = 0; i <= quotes.clientHeight/980; i++) {//980
          //! This is all just html2canvas stuff
          var srcImg  = canvas;
          var sX	  = 0;
          var sY	  = 930*i;
          var sWidth  = 778;
          var sHeight = 930;
          var dX	  = 0;
          var dY	  = 0;
          var dWidth  = 778;
          var dHeight = 930;

          window.onePageCanvas = document.createElement("canvas");
          onePageCanvas.setAttribute('width', 778);
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
          pdf.addImage(canvasDataURL, 'PNG', 0, 0, (width*.72), (height*.71));

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

    var DOMURL = self.URL || self.webkitURL || self;
    var svgObj = document.getElementsByTagName('svg');
    
    nbrCharts = svgObj.length;

    angular.forEach(svgObj, function (value, key) {

      var svgElem = value;
      var svgString = new XMLSerializer().serializeToString(svgElem);


      //var canvas = document.getElementById("canvaselm");
      var canvas = document.createElement("canvas");
      canvas.width = 760;
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

    if(nbrCharts >= nrDiv.length ) $('#exportPdfButton').show();

    if(data.historical) {
      return data.historical;
    } else {
      return data;
  	}
  }  

});
