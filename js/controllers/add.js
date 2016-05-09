(function() {
  angular.module('pollApp')
    .controller('addCtrl', AddController);
    AddController.$inject = ['$location', 'AddPoll'];

    function AddController($location, AddPoll) {
        var vm = this;
        vm.addPollToPolls = addPollToPolls;
        vm.categories = ['spor', 'siyaset'];
        vm.addOption = addOption;
        vm.removeOption = removeOption
        vm.poll = {
          question: vm.question,
          tag: vm.tag,
          votes: 0,
          isPublic: !vm.isPublic,
          options: []
        };

        function addPollToPolls() {
          AddPoll.addPollToPolls(vm.poll);
          vm.question = "", vm.options = [], vm.tag = "", vm.isPublic = false;
        }

        function addOption() {
            var options = vm.poll.options;
            var lastOption = options.length > 0 ? options[options.length-1].id : 0;
            var optionID = lastOption + 1;
            vm.poll.options.push({
                id: optionID,
                text: "",
                count: 0
            });
        }

        function removeOption(option) {
          var options = vm.poll.options;
          for (var i = 0; i < options.length; i++) {
              if (options[i].id == option) {
                  options.splice(i, 1);
                  break;
              }
          }
        }

    };
})()
