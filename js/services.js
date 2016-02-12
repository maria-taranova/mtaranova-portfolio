'use strict';

/* Services */
angular.module('portfolio.services', ['ngResource']).
	factory('Development', function($resource){
		return $resource('development.json', {}, {
			query: {method:'GET', isArray:true}
		})
	});

