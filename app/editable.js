angular.module('editableApp', [])
	.directive('makeEditable', function() {
		return {
			restrict: 'A',
			transclude: true,
			templateUrl: 'make-editable.html',
			scope: true,
		}
	});
