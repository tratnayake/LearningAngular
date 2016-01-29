var app = angular.module('app',[]);
// Param 1 defines name of module, param2 [] is the list of dependancies.

app.controller('MainController', function($scope){
//Pass in the $scope because this is what gets passed to the view

	$scope.message = 'hello';

	//FUNCTION to update the value of message.
	//Parameters: Message(String)
	$scope.updateMessage = function(message){
		$scope.message = message;
	}
});