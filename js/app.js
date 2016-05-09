(function() {

angular.module('pollApp', ['ngRoute', 'firebase'])
.constant('POLLURL', 'https://pollon.firebaseio.com/polls/')

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'mainCtrl as main',
      templateUrl: 'views/main.html'
    })
    .when('/poll/:pollID', {
      controller: 'pollCtrl as poll',
      templateUrl: 'views/poll.html',
      resolve: {
        data: function(getPoll, $route) {
          return getPoll($route.current.params.pollID).$loaded();
        }
      }
    })
    .when('/results/:pollID', {
      controller: 'pollCtrl as results',
      templateUrl: 'views/result.html',
      resolve: {
        data: function(getPoll, $route) {
          return getPoll($route.current.params.pollID).$loaded();
        }
      }
    })
    .when('/add', {
      controller: 'addCtrl as add',
      templateUrl: 'views/add.html'
    })
});
})()
