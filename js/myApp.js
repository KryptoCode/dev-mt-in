angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: '<div>Home Test</div>'
		})
		.state('inital', {
			url: '/inital',
			template: '<div>Initial View</div>',
			controller: 'initCtrl'
		})
		.state('view-friends', {
			url: '/view-friends',
			template: '<div>view Friends</div>',
			controller: 'vFriendsCtrl'
		})
		.state('find-friends', {
			url: '/find-friends',
			template: '<div>Find Friends</div>',
			controller: 'fFriendsCtrl'
		})
		.state('update-profile', {
			url: '/update-profile',
			template: '<div>update profile</div>',
			controller: 'updateCtrl'
		})
})