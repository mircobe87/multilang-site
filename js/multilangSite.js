var app = angular.module("multilangSite", ['ngSanitize']);

app.controller("getStrings",function ($scope, $http){
	$http.get(
		"strings/" + navigator.language + "-strings.json"
	).success(
		function(data){
			$scope.strings = data;
		}
	).error(
		function(data){
			alert("Impossibile recuperare i dati per la lingua '"+navigator.language+"'");
			window.open(data);
		}
	);
});
