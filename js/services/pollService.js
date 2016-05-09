(function() {
  angular.module('pollApp')
    .factory('PollService', PollService);
    PollService.$inject = ['POLLURL', '$firebaseArray', '$firebaseObject']

    function PollService(POLLURL, $firebaseArray, $firebaseObject) {
      var ref = new Firebase(POLLURL);
      function vote(poll, option) {
        var pollRef = POLLURL + poll + "/options/" + option + "/count";
        var votes = POLLURL + poll + "/votes";
        var votesRef = new Firebase(votes);
        var voteRef = new Firebase(pollRef);
        voteRef.transaction(function(count) {
          return count+1;
        });
        votesRef.transaction(function(votes) {
          return votes+1;
        })
        console.log('Added one vote to poll and option', poll, option)
      }

      var PollServiceObj = {
        polls: $firebaseArray(ref),
        vote: vote
      }
      return PollServiceObj;
    }

})();
