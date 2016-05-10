(function() {
  angular.module('pollApp')
    .controller('addCtrl', AddController);
    AddController.$inject = ['$location', 'AddPoll'];

    function AddController($location, AddPoll) {
        var vm = this;
        vm.addPollToPolls = addPollToPolls;
        vm.categories = ['Spor', 'Siyaset', 'Diğer'];
        vm.addOption = addOption;
        vm.removeOption = removeOption
        vm.poll = {
          question: vm.question,
          tag: vm.tag,
          votes: 0,
          isPrivate: vm.isPrivate,
          options: []
        };

        function addPollToPolls() {
          if (vm.poll.question && vm.poll.tag !== undefined && vm.poll.options.length > 1) {
            AddPoll.addPollToPolls(vm.poll);
            vm.poll.question = "", vm.poll.options = [], vm.poll.tag = "", vm.poll.isPrivate = false;
            alert('Oylama başarıyla eklendi!')
          } else if (vm.poll.tag == undefined){
            alert('Lütfen bir kategori seçin');
          } else if (vm.poll.options.length <= 1) {
            alert('Lütfen en az iki seçenek ekleyin')
          } else if (vm.poll.question == undefined) {
            alert('Lütfen bir soru ekleyin')
          }

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
