angular.module('Identity').service(
  "identityService",
  function(httpClient) {

    this.listUsers = function() {
      return httpClient
        .get("identity/api/users/listUsers");
    }
    this.deleteUser = function(id) {
      return httpClient.post(
        "generateToken", {
          "id" : id
        });
    }
    this.getUser = function(id) {
      return httpClient.get(
        "identity/api/users/getUser", {
          id : id
        });
    }
    this.saveUser = function(data) {
      return httpClient.post(
        "identity/api/users/saveUser", data)
    }

    this.listUserTokens = function(id) {
      return httpClient
        .get("identity/api/users/listUserTokens",  {
        id : id
      });
    }

    this.listDevices = function() {
      return httpClient
        .get("identity/api/devices/listDevices");
    }
    this.deleteDevice = function(id) {
      return httpClient.post(
        "identity/api/devices/deleteDevice", {
          "id" : id
        });
    }
    this.getDevice = function(id) {
      return httpClient.get(
        "identity/api/devices/getDevice", {
          id : id
        });
    }
    this.saveDevice = function(data) {
      return httpClient.post(
        "identity/api/devices/saveDevice", data)
    }
    this.generateToken = function(id) {
      return httpClient.post(
        "identity/api/devices/generateToken", {"id": id})
    }

    this.regenerateToken = function(id) {
      return httpClient.post(
        "identity/api/devices/regenerateToken", {"id": id})
    }

    this.renewToken = function(id, token) {
      return httpClient.post(
        "renewToken", {"id": id, "token": token});//"identity/api/users/renewToken"
    }

    this.revokeToken = function(id, token) {
      return httpClient.post(
        "identity/api/users/revokeToken", {"id": id, "token": token})
    }


    this.listGroups = function() {
      return httpClient
        .get("identity/api/groups/listGroups");
    }

    this.deleteGroup = function(id) {
      return httpClient.post(
        "identity/api/groups/deleteGroup", {
          "groupName" : id
        });
    }
    this.getGroup = function(id) {
      return httpClient.get(
        "identity/api/groups/getGroup", {
          id : id
        });
    }
    this.saveGroup = function(data) {
      return httpClient.post(
        "identity/api/groups/saveGroup", data)
    }
  });