'use strict';

/* Controllers */


myApp.controller('DevelopmentCtrl',['$scope', '$http', '$location', function($scope, $http, $location) {
    $http.get("development.json")
    .then(function(response) {
        $scope.works = response.data;
    });
$scope.limit= 5;
	$scope.orderProp = 'date';
	$scope.type = {'wordpress': true, 'htmlcssjs':true, 'angular':true, 'php': true};
	$scope.participation = {'team':true, 'individual':true ,'contract':true,};
	$scope.seriousness = {'serious':true, 'notsoserious':true};
    
}]);

myApp.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});
myApp.controller('DesignCtrl',['$scope', '$http', '$location', function($scope,  $http, $location) {
    $http.get("design.json")
    .then(function(response) {
        $scope.works = response.data;
    });
	$scope.orderProp = 'date';
	$scope.type = {'code': true, 'graphic':true, 'event':true};
	$scope.participation = {'lead':true, 'contribution':true};
	$scope.seriousness = {'serious':true, 'notsoserious':true};
}]);


myApp.controller('FeaturedCtrl',['$scope', '$http', '$location', function($scope, $http, $location) {
    
}]);


myApp.controller('ProjectCtrl',['$http','$routeParams','$scope','$location', function( $http,  $routeParams, $scope,$location) {
    $scope.result = 1;
    $scope.tabs = function(num){
        $scope.result=num;
    }
    
    $http.get('./projects/' + $routeParams.id + '.json').success(function(data) {
        $scope.project = data[0];
   
      $scope.step = function(obj){
          
        if($scope.project.steps){
            return true;
        }
    }
         $scope.feedback = function(obj){

        if($scope.project.feedback){
            return true;
        }
    }
    $scope.git = function(obj){

        if($scope.project.github){
            return true;
        }
    }
   
         
        
    });
    

 
    

    
      
    $scope.video = function(obj){
        console.log(obj);
        if(this.step.video){
            return true;
        }
    }
    $scope.img = function(obj){
        console.log(obj);
        if(this.step.img){
            return true;
        }
    }
}]);


myApp.controller('AboutCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    $scope.hello = 'hello';
	//document.querySelector('.mdl-layout__tab').onclick(function());
    $scope.toggleMe = function(id){
        var id = document.getElementById(id);
        if($location.path('/about/me')){

            document.getElementById("tab-1").classList.add("is-active");
            document.getElementById("tab-2").classList.remove("is-active");

        }
        else if($location.path('/about/contacts')){
                    console.log($location.path());

            document.getElementById("tab-1").classList.remove("is-active");
            document.getElementById("tab-2").classList.add("is-active");
        }
    }
}]);
