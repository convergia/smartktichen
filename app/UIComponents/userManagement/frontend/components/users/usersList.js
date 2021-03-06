angular.module('Management')
  .component('usersList', {
  bindings: {
    title: '<title',
    users: '<users',
    message: '@message',
    onDelete: '&',
    onUpdate: '&'
  },
  templateUrl: '/UIComponents/userManagement/frontend/components/users/usersList.html',
  controller: function($scope, _ , managementService){
    var self = this;
    self.isLoading = true;
      
    this.$onInit = function() {
        $scope.$on("reloadUsersList", function(event, data) {
            self.listUsers()
        })
    }
    this.listUsers = function() {
      managementService.listUsers().then(
        function(data, response) {
            console.log(data)
          self.isLoading = false;
          if(data.status == "failure") {
             self.setAlert(data.errorDetail, "danger")
          } else {
            self.users = _.flatten(_.pluck(data, "id"));
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
    this.deleteUser = function(id) {
      var self = this;
      var userId = id;
      managementService.deleteUser(id).then(
        function(data, response) {
          self.isLoading = false;
          if(data && data.status == "failure") {
             self.setAlert(data.errorDetail, "danger")
          } else {
            if(data.status == "success") {
              self.users = angular.copy(_.reject(self.users, function(user){ return user == userId; }));
              self.setAlert("User deleted successfully", "success")
              console.log(self.users);
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
    
    this.editUser = function(id) {
      $scope.$emit('editUser', {
        "id": id 
      });
    },
      
    this.addUser =  function() {
       $scope.$emit('addUser');
    }
    
    this.setAlert = function(message, type) {
        self.message = {"content": message, "type": type};
    }
    this.closeAlert = function() {
        self.message = null;
    }
    
    
  }
});
