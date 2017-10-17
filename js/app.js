var app = angular.module("myApp",["ngRoute"])
app.config(["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl:"article-welcome.html"
		})
		.when("/u/list",{
			templateUrl:"article-list.html"
		})
		.when("/u/deal",{
			templateUrl:"article-deal.html"
		})

}])
//article表单请求
app.controller("myFormlists",function($scope,$http){
	$http({
		method: "GET",
		url: "/carrots-admin-ajax/a/article/search",
	}).then(function successCallback(response){
		$scope.lists = response.data.data.articleList;
	});
});
app.filter("typeCtrl",function(){
	return function(x){
		if(x===0){
			x = "首页banner";
			return x;
		}
		if (x===1){
			x = "找职位banner";
			return x;
		}
		if (x===2){
			x = "找精英banner";
			return x;
		}
		if (x===3){
			x = "行业大图";
			return x;
		}	
	}
});
app.filter("statusCtrl",function(){
	return function(x){
		if (x===1){
			x = "草稿";
			return x;
		}
		if (x===2){
			x = "上线";
			return x;
		}
	}
});