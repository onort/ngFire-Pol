(function() {
  angular.module('pollApp')
    .factory('getPoll', getPoll);
    getPoll.$inject = ['$firebaseObject', 'POLLURL']

    function getPoll($firebaseObject, POLLURL) {
      var fireroot = new Firebase(POLLURL);
      return function(id) {
        var ref = fireroot.child(id);
        return $firebaseObject(ref);
      }
    }
})();

// Belki fonkisyon olarak tanımlamalıyım, böylece her seferinde tekrar routeParams'dan pollID alabilir

/* Çözüm için. http://stackoverflow.com/questions/34812889/angularfire-change-reference-in-factory-when-routeparameter-changes
angular.module('app', ['ngRoute', 'firebase'])
   .factory('coreData', CoreDataFactory)
   .controller('MyCtrl', MyController)
   .config(ApplicationConfig);

function CoreDataFactory($firebaseObject, fireroot) {
  return function(id) {
    var ref = fireroot.child("elements").child(id).child("core-data");
    return $firebaseObject(ref);
  }
}

function ApplicationConfig($routeProvider) {
  $routeProvider.when('/path/:element_id', {
    controller: 'MyCtrl as ctrl',
    view: 'view.html',
    resolve: {
      data: function(coreData, $route) {
         return coreData($route.current.params.element_id).$loaded();
      }
    }
  });
}

function MyController(data) {
  this.coreData = data;
}


Note that the $routeParams are only updated after a route change completes successfully. This means that you cannot rely on $routeParams being correct in route resolve functions. Instead you can use $route.current.params to access the new route's parameters.
*/
