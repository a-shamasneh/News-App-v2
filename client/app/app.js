angular.module("news",[])
.controller("lastnews",function($scope,$http){
	$scope.lastest=[];

	$scope.get=function(api){
		api=api || "cnn"
		 $http.get("https://newsapi.org/v1/articles?source="+api+"&sortBy=top&apiKey=5ccf40a4e56140f494c0a43ab7e5fd12")
    .then(function(response,err) {
    	if(err){
    		throw err 
    	}else{
    		$scope.lastest =response.data['articles'];
       // console.log(response.data['articles']);
    	}
        
    });
	}
	$scope.get();
})

