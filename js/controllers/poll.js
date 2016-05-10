(function() {
  angular.module('pollApp')
    .controller('pollCtrl', PollController);
    PollController.$inject = ['$location', 'data', 'PollService'];

    function PollController($location, data, PollService) {
        var vm = this;
        vm.data = data;
        vm.vote = vote;


        function vote(option) {
          PollService.vote(vm.data.$id, option);
          $location.path('/results/' + vm.data.$id);
        }

    };
})()
