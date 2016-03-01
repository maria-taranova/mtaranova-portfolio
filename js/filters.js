'use strict';

/* Filters */
var portfolioFilter = angular.module('portfolio.filters', []);
	portfolioFilter.filter('filterBy', function() {
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

portfolioFilter.filter('strLimit', ['$filter', function($filter) {
   return function(input, limit) {
     if (! input) return;
     if (input.length <= limit) {
          return input;
      }
    
      return $filter('limitTo')(input, limit) + '...';
   };
}]);