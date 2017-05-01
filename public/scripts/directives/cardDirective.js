angular.module('CardsAgainstAssembly')
	.directive('wdiCard', wdiCard);

function wdiCard() {
	var directive = {
		restrict: 'E',
		replace: true,
		templateUrl: "templates/cardDirective.html",
		controller: 'CardsController',
		controllerAs: 'cardsController',
		scope: {
		       question: '@',
		       id: '@'
		}
	};
	return directive;
}