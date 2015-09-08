addressApp.controller("AddressListCtrl", function($scope, $http, $location, $route, AddressDataService) {
	    
         AddressDataService.getAddress().then(function(res) {
        	 $scope.address = res.data;   
		});
         
        $scope.deleteAddress = function(addressId) {
        	AddressDataService.deleteAddress(addressId);
        	goToListView();
    	};
    	
    	var goToListView = function() {
    		$route.reload();
    		$location.path('/address');  
    	};
			
    });