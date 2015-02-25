// module_name
// 	.controller('addTotable',[$scope,function($scope){ 
// 		$scope.first={
// 			firstname :"john",
// 			lastname :  "kuriakose"
// 		}
// 		$scope.second={
// 			firstname:"tom",
// 			lastname:"joseph"
// 		}	
// 		$scope.fullName = $scope.user.firstname + '.' +$scope.user.lastname;
// 	}])
// 	.directive('dir',function(){
// 	var directive={};
// 	directive.restrict = 'A';
// 	directive.template = '<p1>{{fullName}}</p1> <br> <input type="text" class="form" ng-model="user.firstname">';
// 	directive.scope = {
// 		user:"="
// 	}
	
// 	// directive.compile=function(attribute,element){
// 	// 	attribute.css('border','1px solid');
// 	// 	var linkFunction=function($scope,element,attribute){
// 	// 		element.html('<input type="text" ng-model="user.firstname">');
// 	// 		element.css('background-color','yellow');
// 	// 	}
// 	// 	return linkFunction;
// 	// }
// 	return directive;
	
// });
// module_name.controller('addTotable',['$scope',function($scope){
// 	$scope.first={};
// 	$scope.first.firstname = "john";
// 	$scope.first.lastname =  "kuriakose";

// $scope.second={};
// 	$scope.second.firstname="tom";
// 	$scope.second.lastname="joseph";
// }]);