'use strict';

/* Filters */
angular.module('portfolio.filters', [])
	.filter('filterBy', function() {
		return function(works, filter) {

			// transform the input values ("type":Object) to a simpler version ("type":Array).
			var simplified = [];
			for(var value in filter.values) {
				if(filter.values[value]) {
					simplified.push(value);
				}
			}
			filter.values = simplified;

			return _.filter(works, function(work) {
				return _.contains(filter.values, work[filter.key]);
			});

		};
	});