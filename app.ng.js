if (Meteor.isClient) {
  // This code only run on the client side

  // Create AngularJS module and add angular-meteor dependency
  angular.module('socially', ['angular-meteor']);

  angular.module('socially').controller('PartiesListCtrl', function ($scope, $meteor) {
    $scope.parties = $meteor.collection(Parties);

    $scope.remove = function(party) {
      $scope.parties.splice($scope.parties.indexOf(party), 1);
    }
  });
}