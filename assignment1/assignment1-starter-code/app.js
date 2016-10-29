(function () {
'use strict'

angular.module('Assignment1', [])

.controller('LunchController', function ($scope) {
//  $scope.name = "Yaakov";
  $scope.sayHello = function () {
      var modal = document.getElementsByClassName('message');
      //modal.find('.message').html($scope.lunchlist);
      //return modal.html($scope.lunchlist);
      var llist = $scope.lunchlist.split(",");
      if(llist.length <= 3 && llist.length >= 0)
      {
        $scope.msg = "Enjoy!"
      }
      else if (llist.length > 3 ){
        $scope.msg = "Too much!"
      }
    //  $scope.msg = llist.length;

  };
});

})();
