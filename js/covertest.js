(function(){
    angular.module('angular-cardflow-example', ['angular-cardflow'])
        .controller('example-controller', function($scope){
            // generate 40 cards
            $scope.cards =[];
            var types = ['cats','fashion','nature','food','abstract','nightlife'];
            for (var i=0; i<40; i++){
                var t = types[i % types.length];
                $scope.cards.push({image:'http://lorempixel.com/200/200/' + t + '/'+((i%10)+1), title: t});
            }

            //  models for various cardflows
            $scope.cardflowNone = {};
            $scope.cardflowSnapOne = {};
            $scope.cardflowSnap = {};
            $scope.cardflowSnapPage = {};
            $scope.cardflowSnapKinetic = {};
            $scope.cardflowNonePage = {};
            $scope.cardflowSwipe = {};


        });
		})();