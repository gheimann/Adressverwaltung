addressApp.controller('AddressEditCtrl', function($scope, $routeParams,
		$location, AddressDataService) {
	$scope.isEditMode = true;
	$scope.submitBtnLabel = 'Adresse editieren';

	var addressId = $routeParams.addressID;

	AddressDataService.getAddressByAddressId(addressId).then(function(res) {
		$scope.address = res.data;
	}, function(error) {
		console.log('Lesen der Adresse fehlerhaft.' + error);
	});

	$scope.submitAction = function() {
		$scope.jsonObj = angular.toJson($scope.address, false);
		var id = $scope.address.id;
		AddressDataService.updateAddress(addressId, $scope.jsonObj);
		goToListView();
	};
	
	$scope.cancelAction = function() {
		goToListView();
	};
	
	var goToListView = function() {
		$location.path('/address');  
	};

});