//article表单请求
app.controller("myFormlists",function($scope,$http,$state,$stateParams){
//设置默认条数
$scope.values = [5,6,7,8,9,10];
$scope.selectedSize = $scope.values[$stateParams.size-5];
$scope.page = $stateParams.page;
//接收数据
$http({
	method: "GET",
	url: "/carrots-admin-ajax/a/article/search",
	params: {size:$stateParams.size,
			 page:$stateParams.page,
			 type:$stateParams.type,
			 status:$stateParams.status,
			 startAt:$stateParams.startAt,
             endAt: $stateParams.endAt
			}
}).then(function successCallback(response){
	$scope.lists = response.data.data.articleList;
	//获取总条数
	$scope.total = response.data.data.total
	//获取最后一页
	if(!/^\d+$/.test($scope.total/$scope.selectedSize)===true) {
        $scope.lastPage = parseInt($scope.total/$scope.selectedSize)+1
    }else{
        $scope.lastPage = parseInt($scope.total/$scope.selectedSize)
    }
	//生成转页按钮
	var pageArray = [];
	for(var i = 0;i<$scope.lastPage;i++){
		pageArray[i] = i+1
	}
	$scope.pageArray = pageArray;
});
//根据设置条数显示数据
$scope.changeSize = function(){
	$state.go("bgstage.articleList",{"size":$scope.selectedSize,"page":1});
}
//设置转页按钮
$scope.golist = function(x){
	$state.go("bgstage.articleList",{page:x})
}
//设置首页按钮
$scope.firstPage=function(){
	$state.go("bgstage.articleList",{page:1})
};
//设置末页按钮
$scope.finalPage=function(){
	$state.go("bgstage.articleList",{page:$scope.lastPage})
};
//设置跳转按钮
$scope.jump = function() {
	if ($scope.textPage<=$scope.lastPage){
		$state.go("bgstage.articleList",{"page":$scope.textPage})
	}else{
		alert("请输入正确页数")
	}
}
});