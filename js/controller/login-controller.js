//登录页发起登录请求
app.controller("validateCtrl",function($scope,$http,$state){
var warm = document.getElementById("warm");
	$scope.put = function(){
            $http({
            method: 'POST',
            url: "/carrots-admin-ajax/a/login",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            params: {name:$scope.name,pwd:$scope.pwd},
        }).then(function successCallback(response) {
        		$scope.warm = response.data.message
                if (response.data.message === "success"){
                		$scope.warm = "登陆成功";
                		warm.className = "hint-true";
                		$state.go("bgstage");
                }else{
                		$scope.warm = response.data.message;
                		warm.className = "hint";
                }
            }, function errorCallback(response) {
            	$scope.warm = response.data.message
                warm.className = "hint";
        });
    }
})