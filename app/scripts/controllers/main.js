angular.module('ourAppApp')
.controller('MainCtrl', function($scope,apiFac) {

    $scope.displayCity = false;
    $scope.displayWeather = false;
    $scope.today = new Date();
    $scope.searchCity = function(){

        if($scope.cityInput != ""){ 
          apiFac.searchCity($scope.cityInput).then(function(response){
            $scope.searchResponse = response;
            $scope.displayCity = true;
          })
        }   
    }

    $scope.getcitydetails = function(item){
      $scope.cityInput = "";
      $scope.displayCity = false;
      $scope.selectedCity = item;

      apiFac.weatherReport(item.woeid).then(function(response){
        $scope.weatherResponse = response;
        $scope.displayCity = false;
        $scope.displayWeather = true;
      })
    }


})
