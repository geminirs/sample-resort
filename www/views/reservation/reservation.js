angular.module('App')
.controller('ReservationController', function($scope){
	$scope.reservation = {
		checkin: new Date(),
		checkout: new Date(Date.now() + 7*24*60*60*1000),
		room: 156,
		rate: 121,
		wifi: 'resortwifi'
	};
});