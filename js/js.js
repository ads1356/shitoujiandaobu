var win=0;
var times=document.getElementById('times');
var bu=document.getElementById('bu');

bu.onclick=function(){
	document.getElementById('my_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
	var com_result=Math.random();	
	if (com_result<0.33) {
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true"	
	}
	else if(com_result>0.66){
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true"
		win=win+1;
	}
	else{
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true"	
	}
	times.innerHTML=win;
};
var jiandao=document.getElementById('jiandao');
jiandao.onclick=function(){
	document.getElementById('my_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
	var com_result=Math.random();	
	if (com_result<0.33) {
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true"	
		win=win+1;

	}
	else if(com_result>0.66){
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true"
	}
	else{
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true"	
	}
	times.innerHTML=win;
};
var shitou=document.getElementById('shitou');
shitou.onclick=function(){
	document.getElementById('my_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true";
	var com_result=Math.random();	
	if (com_result<0.33) {
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true"	
	}
	else if(com_result>0.66){
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true"
	}
	else{
		document.getElementById('com_result').src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true"
		win=win+1;	
	}
	times.innerHTML=win;
};
