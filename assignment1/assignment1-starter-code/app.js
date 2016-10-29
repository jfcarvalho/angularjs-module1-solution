(function () {
'use strict'

angular.module('Assignment1', [])

.controller('LunchController', function ($scope) {
  $scope.sayHello = function () {
      if($scope.lunchlist) {
        var llist = $scope.lunchlist.split(",");
        if(llist.length <= 3 && llist.length > 0)
        {
          $scope.msg = "Enjoy!";
        }
        else if (llist.length > 3 ){
          $scope.msg = "Too much!";
        }
    }
      else
      {
          $scope.msg = "Please enter data first";
      }
  };
});

})();
