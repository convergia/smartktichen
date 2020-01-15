angular
  .module('Identity')
  .component(
  'deviceDetails',
  {
    bindings : {
      device : '<device',
      groups : '<groups',
      message : '@message',
      title : '<title'
    },
    templateUrl : '/identity/view/javascript/components/devices/deviceDetails.html',

    controller : function($scope, _, identityService, $timeout, $translate) {
      var message1 = "Device updated successfully.";
      $translate('IDENTITY.MESSAGE').then(function (headline) { message1 = headline; });

      var self = this;
      self.token = null;

      self.isLoading = true;
      self.originalDevice = angular.copy(this.device);

      this.$onInit = function() {
        self.isUpdate = true;
        if (self.device != null) {
          self.isUpdate = true;
          this.loadDevice(self.device);
        } else {

          self.isUpdate = false;
          self.device = {};
        }

        $scope.$on("loadDeviceDetails", function(event, data) {
          if (data.id) {
            self.loadDevice(data.id);
          } else {
            self.device = {};
            self.update = false;
self.isUpdate = false;
            self.originalDevice = angular.copy(this.device);
          }

        })
      };

      this.closeDetailWindow = function(){
        document.querySelector('#detailwindow').style.display = "none";
      }

      this.generateToken = function(id) {
        identityService.generateToken(id).then(
          function(data, response) {
            self.isLoading = false;
            if (data.status == "failure") {
              self.setAlert(data.errorDetail, "danger")
            } else {
              self.token = data;
            }
            console.log("resolve", data)
          }, function(err) {
            self.isLoading = false;
            self.setAlert(JSON.stringify(err), "danger")
            console.log("reject", err);
          });
      }

      this.renewToken = function(id, token) {
//        identityService.renewToken(id, token).then(
        identityService.regenerateToken(id, token).then(
          function(data, response) {
            self.isLoading = false;
            if (data.status == "failure") {
              self.setAlert(data.errorDetail, "danger")
            } else {
              self.token = data.token;
            }
            console.log("resolve", data)
          }, function(err) {
            self.isLoading = false;
            if(err.data && err.data.response && err.data.response.metadata.status == "failure") {
              self.setAlert(err.data.response.metadata.errorDetail, "danger")
            } else {
              self.setAlert(JSON.stringify(err), "danger")
            }
            console.log("reject", err);
          });
      }
      this.loadDevice = function(id) {
        if (id) {
          identityService
            .getDevice(id)
            .then(
            function(data, response) {
              self.isLoading = false;
              if (data.status == "failure") {
                self.setAlert(data.errorDetail, "danger")
              } else {
                if (data.auth_token) {
                  self.token = data["auth_token"]
                  delete data["auth_token"];
                }
                if(data.groups) {
                  if(_.isArray(data.groups)) {
                    data.groups = _.map(data.groups, function(group){ return {"name": group} })
                  } else {
                    data.groups = [{"name": data.groups}];
                  }
                }
//14/11/2019 for ID field readonly when edit
self.isUpdate = true;
                self.device = data
                self.originalDevice = angular
                  .copy(self.device);
              }
              console.log("resolve", data)
            }, function(err) {
              self.isLoading = false;
              self.setAlert(JSON.stringify(err), "danger")
              console.log("reject", err);
            });
        } else {
          this.reset();
        }

      }

      this.submit = function() {
        var self = this;
        var data = angular.copy(self.device);
//        data["apsdb.update"] = self.isUpdate;
        var groups = _.pluck(data.groups, "name");
        data["groups"] = groups;
        identityService.saveDevice(data).then(
          function(data, response) {
            self.isLoading = false;
            if (data.status == "failure") {

              var message2 = data.errorDetail;
              $translate('IDENTITY.ERRORPARAM', { paramid: data.errorDetail }).then(function (headline) {
                message2 = headline;
                self.setAlert(message2, "danger");
              });

            } else {
              self.setAlert(message1, "success");
              $scope.$emit('deviceAdded');
              $timeout(function () { document.querySelector('#detailwindow').style.display = "none"; }, 5000, false);
            }
            console.log("resolve", data)
          }, function(err) {
            self.isLoading = false;
            self.setAlert(JSON.stringify(err), "danger")
            console.log("reject", err);
          });
      }

      this.reset = function() {
        this.device = angular.copy(self.originalDevice);
      }

      this.filterGroups = function($query) {
        return _.filter(self.groups, function(group) {
          if (group.name.toLowerCase().indexOf(
            $query.toLowerCase()) != -1) {
            return group;
          }
        });
      };

      this.listGroups = function() {
        identityService.listGroups().then(
          function(data, response) {
            if (data.status == "failure") {
              self.setAlert(data.errorDetail, "danger")
            } else {
              self.groups = data;
            }
            console.log("resolve", data)
          }, function(err) {
            self.isLoading = false;
            self.setAlert(JSON.stringify(err), "danger")
            console.log("reject", err);
          });
      }

      this.isDeviceChanged = function() {
        return !angular.equals(this.device, self.originalDevice);
      }

      this.setAlert = function(message, type) {
        self.message = {"content": message, "type": type};
      }
      this.closeAlert = function() {
        self.message = null;
      }


    }
  });
function copyTokenFunction() {
  /* Get the text field */
  var copyToken = document.getElementById("copyTokenText");
  /* Select the text field */
  copyToken.select();
  copyToken.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
}