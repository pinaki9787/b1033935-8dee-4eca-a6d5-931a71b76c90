angular.module('ourAppApp')
  .factory('apiFac',function($http) {
    var apiFac ={};

	   /**
	  * Method for fetching list of cities
	  */
    apiFac.searchCity = function(city){
      console.log("inside get city API  ",city);
      return $http.get("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="+city).then(function(response){
        this.cityResponse = response.data;
        return this.cityResponse;
      });
    };

     /**
    * Method for fetching weather details of the city
    */
    apiFac.weatherReport = function(cityid){
      console.log("inside weatherReport API  ",cityid);
      return $http.get("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"+cityid).then(function(response){
        this.weatherResponse = response.data;
        console.log(this.weatherResponse,'this.weatherResponse');
        return this.weatherResponse;
      });
    };

    return apiFac;
  });
