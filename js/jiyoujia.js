$.ajax({
	url:"http://ikindness.cn/api/test/getProduct",
	type:"get",
	dataType:"json",
}).done(function(data){
	var _data=data.data;
	pageTuring();

	function priceFrom(){
		var __data=_data;
		var from = $(".from").val();
		var untill = $(".untill").val();
		for(var i =0;i<__data.length;i++){
			if(parseFloat(__data[i].price)<parseFloat(from)||parseFloat(__data[i].price)>parseFloat(untill)){
				__data.splice(i,1);
			}
		}
		_data=__data
		console.log(_data.length)
		pageTuring(_data);
	}
	$(".btn").click(function(){
		priceFrom(_data);
	});
	function priceup(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].price)>parseFloat(__data[i+1].price)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		pageTuring(_data);
	}
	function pricedown(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].price)<parseFloat(__data[i+1].price)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		pageTuring(_data);
	}
	function soldup(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].sold)>parseFloat(__data[i+1].sold)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		pageTuring(_data);
	}
	function solddowm(_data){
		var __data=_data
		for(var j=0;j<=__data.length;j++){
			for(var i=0;i<__data.length-1;i++){
				if(parseFloat(__data[i].sold)<parseFloat(__data[i+1].sold)){
					var parm=__data[i];
					__data[i]=__data[i+1];
					__data[i+1]=parm;
				}
			}
		}
		_data=__data;
		pageTuring(_data);
	}
	$(".tradeDown").click(function(){
		solddowm(_data);
	});
	$(".tradeUp").click(function(){
		soldup(_data);
	});
	$(".priceUp").click(function(){
		priceup(_data);
	});
	$(".priceDown").click(function(){
		pricedown(_data);
	});

	$(".allPage").html("/"+Math.ceil(_data.length/10))

	function pageTuring(){
		var p=0;
		$(".nextPage").click(pages=function(){
			p=p+1;

			if(p>=1&&p<=6){
				$(".nowPage").html(p);
			}else{
				$(".nowPage").html("6");
			}

			if(p==1){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=0;i<(p*10);i++){
					add();
				}
			}else if(p==2){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=10;i<(p*10);i++){
					add();
				}
			}else if(p==3){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=20;i<(p*10);i++){
					add();
				}
			}else if(p==4){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=30;i<(p*10);i++){
					add();
				}
			}else if(p==5){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=40;i<(p*10);i++){
					add();
				}
			}else if(p==6){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=50;i<(p*10);i++){
					add();
				}
			}else{
				p=6
			}
			addContent();
			function add(){
				$(".box").append(
				"<div class=\"link"+i+"\">"
				+"<a></a>"
				+"<span class=\"price\"></span>"
				+"<span class=\"baoyou\">包邮</span>"
				+"<span class=\"name\"></span>"
				+"<span class=\"sold\"></span>"
				+"<span class=\"owner\"></span>"
				+"<span class=\"location\"></span>"
				+"<div class=\"pic\">"
				+	"<img class=\"jin\" src=\"image/1.png\">"
				+	"<img class=\"wang\" src=\"image/2.png\">"
				+"</div>"
				)
			}
		});	
		pages();
		$(".prePage").click(pages=function(){
			p=p-1;
			if(p>=1&&p<=6){
				$(".nowPage").html(p);
			}else{
				$(".nowPage").html("1");
			}
		
			if(p==1){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=0;i<(p*10);i++){
					add();
				}
			}else if(p==2){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=10;i<(p*10);i++){
					add();
				}
			}else if(p==3){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=20;i<(p*10);i++){
					add();
				}
			}else if(p==4){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=30;i<(p*10);i++){
					add();
				}
			}else if(p==5){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=40;i<(p*10);i++){
					add();
				}
			}else if(p==6){
				for (var i =0;i<_data.length;i++) {
					$(".link"+i).remove()
				}
				for(var i=50;i<(p*10);i++){
					add();
				}
			}else{
				p=1
			}
			addContent();
			function add(){
					$(".box").append(
					"<div class=\"link"+i+"\">"
					+"<a></a>"
					+"<span class=\"price\"></span>"
					+"<span class=\"baoyou\">包邮</span>"
					+"<span class=\"name\"></span>"
					+"<span class=\"sold\"></span>"
					+"<span class=\"owner\"></span>"
					+"<span class=\"location\"></span>"
					+"<div class=\"pic\">"
					+	"<img class=\"jin\" src=\"image/1.png\">"
					+	"<img class=\"wang\" src=\"image/2.png\">"
					+"</div>"
					)
			}
		})	
	}
	

		function addContent(){
			for(var j=0;j<_data.length;j++){
			$(".link"+j+" a").css("background-image","url(http:"+_data[j].image+")");
			$(".link"+j+" a").attr("href","http:"+_data[j].href);
			$(".link"+j+" .price").text("￥"+_data[j].price);
			$(".link"+j+" .name").text(_data[j].name);
			$(".link"+j+" .sold").text("已售"+_data[j].sold+"件");
			$(".link"+j+" .owner").text(_data[j].owner);
			$(".link"+j+" .location").text(_data[j].location);
			}
		}
		// //添加标签
		// function add(){
		// 	for(var i=0;i<_data.length;i++){
		// 		$(".box").append(
		// 		"<div class=\"link"+i+"\">"
		// 		+"<a></a>"
		// 		+"<span class=\"price\"></span>"
		// 		+"<span class=\"baoyou\">包邮</span>"
		// 		+"<span class=\"name\"></span>"
		// 		+"<span class=\"sold\"></span>"
		// 		+"<span class=\"owner\"></span>"
		// 		+"<span class=\"location\"></span>"
		// 		+"<div class=\"pic\">"
		// 		+	"<img class=\"jin\" src=\"image/1.png\">"
		// 		+	"<img class=\"wang\" src=\"image/2.png\">"
		// 		+"</div>"
		// 		)
		// 	}
		// }


});

