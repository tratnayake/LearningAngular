var myApp = angular.module('app', []);

myApp.controller('SpicyController', ['$scope', function($scope){
	$scope.spice = 'very';
	//My default, the value of {{spice }} will be 'very'

	$scope.chiliSpicy = function(){
		// Invoked when the button 'Chili' is clicked.
		$scope.spice = 'chili';
	}

	$scope.jalaepenoSpicy =function(){
		// Invoked when the button 'Jalapeno' is clicked.
		$scope.spice = 'jalapeno'
	}
}])