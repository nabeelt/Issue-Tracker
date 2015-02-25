appModule
 	.controller('addTotable',['$scope','newService','$localStorage','$state',
 		function($scope,newService,$localStorage,$state){  
			$scope.names = [];
			$scope.item = {};        
			if(!$localStorage.data){					
				newService.getData()
					.success(function(data){
						$scope.names=$localStorage.data=data;
				});	
			}
			else{
				$scope.names=$localStorage.data;
			}

			$scope.insert=function(){
				console.log($scope.item);
				var item={};
				item=$scope.item;
				var doc = {
					assignee: item.assignee,
					subject : item.subject
				};
				var x=$localStorage.data||[];
				x.push(doc);
				console.log(x);
				$localStorage.data=x;
				window.setTimeout(function () {
					$state.go('Issues');
					}, 1500);
			}

 	}]);
appModule.controller('addcount',['$scope','$localStorage',function($scope,$localStorage){
	$scope.addCount=function(index){
		$localStorage.data[index].prioLevel=$scope.key;
	
	}
	// $scope.deleteKey = function(){
		
	// 	 $scope.key ="";
	// }
}]);