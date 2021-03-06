var app= angular.module("myApp",["ngMessages"]);
var warm = document.getElementById("warm");
app.controller("validateCtrl",function($scope,$http){
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
                        location.href = "pages/bgstage.html#/u"		
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
