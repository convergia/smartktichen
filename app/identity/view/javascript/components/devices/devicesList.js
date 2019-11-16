angular.module('Identity')
  .component('devicesList', {
  bindings: {
    title: '<title',
    devices: '<devices',
    message: '@message',
    onDelete: '&',
    onUpdate: '&'
  },
  templateUrl: '/identity/view/javascript/components/devices/devicesList.html',
  controller: function($scope, _ , identityService, $uibModal){
    var self = this;
    self.isLoading = true;

    this.$onInit = function() {
      $scope.$on("reloadDevicesList", function(event, data) {
        self.listDevices()
      })
    }

    this.listDevices = function() {
      identityService.listDevices().then(
        function(data, response) {
          self.isLoading = false;
          self.devices = [];
          if(data.status == "failure") {
            self.setAlert(data.errorDetail, "danger")
          } else {
//            self.devices = _.flatten(_.pluck(data, "id"));
//            self.lastModifiedDates = _.flatten(_.pluck(data, "lastModifiedDate"));
  					self.devices = data;

console.debug("info 1", data);
//console.debug("info 2", self.devices);
          }
          console.debug("resolve", data)
        },
        function(err) {
          self.isLoading = false;
          if(err.data && err.data.response && err.data.response.metadata.status == "failure") {
            self.setAlert(err.data.response.metadata.errorDetail, "danger")
          } else {
            self.setAlert(JSON.stringify(err), "danger")
          }
          console.error("reject", err);
        }
      );
    }
    this.deleteDevice = function(id) {
      var self = this;
      var deviceId = id;
var modalInstance = $uibModal.open({
        animation: true,
        component: 'confirmationModal',
        size: 'md',
        scope: $scope,
        resolve: {
          data: function () {
            return {"title": "Delete Device", "body": "Are you sure you want to delete this device?"};
          }
        }
      });
      modalInstance.result.then(function (wdgModel) {
        if(wdgModel) {
          //self.clearWidgets();
          identityService.deleteDevice(id).then(
            function(data, response) {
              self.isLoading = false;
              if(data && data.status == "failure") {
                self.setAlert(data.errorDetail, "danger")
              } else {
                if(data.status == "success") {
                  self.devices = angular.copy(_.reject(self.devices, function(device){ return device == deviceId; }));
                  console.log(self.devices);
                  $scope.$emit('deviceAdded');//same as deviceAdded
                  self.setAlert("Device deleted successfully", "success");
                }
              }
              console.log("resolve", data)
            },
            function(err) {
              self.isLoading = false;
              self.setAlert(JSON.stringify(err), "danger")
              console.log("reject", err);
            }
          );
        }
      }, function () {
        console.info('modal-component for deleting device dismissed at: ' + new Date());
      });

    }

    this.editDevice = function(id) {
      $scope.$emit('editDevice', {
        "id": id 
      });
    }

    this.addDevice =  function() {
      $scope.$emit('addDevice');
    }

    this.setAlert = function(message, type) {
      self.message = {"content": message, "type": type};
    }

    this.closeAlert = function() {
      self.message = null;
    }

  }
}); 