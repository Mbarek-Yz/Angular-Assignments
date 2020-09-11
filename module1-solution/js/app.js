'use strict';
(function () {

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController)


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = '';
  $scope.display = 'Please enter data first';

  $scope.checkText = function() {
    if ($scope.items.length == 0) {
      $scope.display = 'Please enter data first';
      return;
    }
    else {
      let listItems = $scope.items.split(',').filter(value => value.trim().length!=0);
      if (listItems.length < 4) {
        $scope.display = 'Enjoy!';
      }
      else {
        $scope.display = 'Too much!';
      }
    }
  }
}

})();
