//Define the app
var app = angular.module('serviceModule',[]);

var myController = app.controller('MyController',['$scope','notify',function($scope,notify){
	//When call notify is called for this controller, take IN a msg
	$scope.callNotify = function(msg){
		//Then invoke the internal notify function.
		notify(msg);
	}
}])

//Creating the actual notify function for myController
myController.factory('notify',['$window', function(win){
	var msgs =[];

	return function(msg){
		msgs.push(msg);
		if (msgs.length == 3){
			win.alert(msgs.join("\n"));
			msgs = [];
		}
	}
}])


