(function() {
  angular.module('pollApp')
    .controller('mainCtrl', MainController);
    MainController.$inject = ['PollService'];

    function MainController(PollService) {
        var vm = this;
        vm.selectedPoll = undefined;
        vm.test = "Main Controller reporting!";
        vm.polls = PollService.polls;
    };
})()
