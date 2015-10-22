// Define the parties collection
Parties = new Mongo.Collection('parties');

if (Meteor.isClient) {
  // This code only run on the client side

  // Create AngularJS module and add angular-meteor dependency
  angular.module('socially', ['angular-meteor']);

  angular.module('socially').controller('PartiesListCtrl', function ($scope) {
    $scope.parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.'       
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'
      }
    ];
  });
}