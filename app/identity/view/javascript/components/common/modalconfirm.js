angular
  .module('Generic')
  .component('confirmationModal', 
  {
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    templateUrl: '/identity/view/javascript/components/common/confirmation.html',
    controller: function ($scope) {
      this.$onInit = function () {
        this.data = this.resolve.data;
      };

      this.onSubmit = function() {
          this.close({$value: true});
      };
      this.onCancel = function () {
        this.dismiss({$value: false});
      };

    }
});
