(function() {
  angular.module('pollApp')
    .factory('AddPoll', AddPoll);
    AddPoll.$inject = ['POLLURL', '$firebaseArray']

    function AddPoll(POLLURL, $firebaseArray) {
      var ref = new Firebase(POLLURL);
      var pollsRef = $firebaseArray(ref);
      var AddPoll = {
        addPollToPolls: function(poll) {
          pollsRef.$add(poll);
          console.log('Added to DB', poll);
        }
      }
      return AddPoll;
    }
})();
