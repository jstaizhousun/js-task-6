//搜索框控制
app.controller("searchCtrl",function($scope,$state,$stateParams){
//类型选择框
$scope.types = [{type:null,name:"全部"},
				{type:"0",name:"首页banner"},
				{type:"1",name:"找职位banner"},
				{type:"2",name:"找精英banner"},
				{type:"3",name:"行业大图"},
				]
$scope.typeSelect = $stateParams.type;
//状态选择框
$scope.status = [{status:null,name:"全部"},
				{status:"1",name:"草稿"},
				{status:"2",name:"上线"},
				]
$scope.statusSelect = $stateParams.status;
//日期搜索

//设置时间
$scope.format = "yyyy/MM/dd";
//设置日期是否默认打开
$scope.popup1 = {
    opened: false
};
$scope.popup2 = {
    opened: false
};
//设置日期按钮是否可以点击
$scope.open1 = function () {
    $scope.popup1.opened = true;
};
$scope.open2 = function () {
    $scope.popup2.opened = true;
};
if($stateParams.startAt!== null && $stateParams.endAt !== null){
$scope.startDate = new Date(parseInt($stateParams.startAt)) 
$scope.endDate = new Date(parseInt($stateParams.endAt)) 
}

//搜索按钮
$scope.search = function() {
   if ($scope.startDate == undefined && $scope.endDate == undefined){
    $scope.startAt = null;
    $scope.endAt   = null;
    $state.go("bgstage.articleList",{"type":$scope.typeSelect,
                                 "status":$scope.statusSelect,})
}else if ($scope.startDate !== undefined && $scope.endDate !== undefined){
     var startDate = new Date($scope.startDate);
    $scope.startAt = startDate.getTime()
    var endDate = new Date($scope.endDate)
    endDate.setHours(23,59,59)
    $scope.endAt = endDate.getTime()
    $state.go("bgstage.articleList",{"type":$scope.typeSelect,
                                 "status":$scope.statusSelect,
                                 "startAt":$scope.startAt,
                                 "endAt": $scope.endAt})
}else{ 
    alert("请选择正确日期")
    }

}
//清空按钮
$scope.clear = function(){
    $state.go("bgstage.articleList",{size:5,
                                     page:1,
                                     type:null,
                                     status:null,
                                     startAt:null,
                                     endAt: null
                                     })
}
})
