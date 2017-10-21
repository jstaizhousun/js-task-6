//配置ui-Router路由
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/login")
	$stateProvider
	.state("login",{
		url:"/login",
		templateUrl: "pages/login.html"
	})
	.state("bgstage",{
		url:"/bgstage",
		templateUrl: "pages/bgstage.html"
	})
	.state("bgstage.articleList",{
		params: {page: null,size: null,type: null,status: null,startAt: null,endAt: null},
		url:"/articleList?size&page&type&status&startAt&endAt",
		templateUrl: "pages/article-list.html"
	})
	.state("bgstage.articleList.articleDeal",{
		url:"/articleDeal",
		templateUrl: "pages/article-deal.html"
	})
})


