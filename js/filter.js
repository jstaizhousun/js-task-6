//自定义过滤器
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
		if (x===4){
			x = "全部"
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