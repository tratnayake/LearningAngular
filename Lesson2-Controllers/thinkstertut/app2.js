var app = angular.module('app',[]);
// Param 1 defines name of module, param2 [] is the list of dependancies.

app.controller('MainController', function(){

	var self = this;
	//Make a reference to this,therefore no need for $scope

	self.message = 'hello';

	//FUNCTION to update the value of message.
	//Parameters: Message(String)
	self.updateMessage = function(message){
		self.message = message;
	}
});