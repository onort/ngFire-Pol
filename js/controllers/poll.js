(function() {
  angular.module('pollApp')
    .controller('pollCtrl', PollController);
    PollController.$inject = ['data', 'PollService'];

    function PollController(data, PollService) {
        var vm = this;
        vm.data = data;
        vm.vote = vote;
        console.log(data);
        function vote(option) {
          PollService.vote(vm.data.$id, option);
        }

    };
})()
