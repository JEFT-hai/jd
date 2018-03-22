// 滚动条到达floors 出现search条
bind(window,'scroll',function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var floors = document.getElementById('floors');
	var search = document.getElementById('search');
	var floors_Otop = floors.getBoundingClientRect().top;
	if(floors_Otop <= 0){
		search.classList.add('search-fixed');
	}else{
		search.classList.remove('search-fixed');
	}
	
});
var toTop = document.getElementsByClassName('toTop')[0];
toTop.onclick=function(){
	console.log(111);
	document.documentElement.scrollTop=document.body.scrollTop=0;
}
// bind(toTop,'click',function(e){
// 	var osTop=document.documentElement.scrollTop||document.body.scrollTop;
// 	osTop = 0;
// })

// 交换城市
var change_city = document.getElementsByClassName('change-city');
for(var i = 0;i<change_city.length;i++){
	change_city[i].addEventListener('click',function(e){
		var parentNode = this.parentNode;
		var start_city = parentNode.getElementsByTagName('input')[0];
		var arrive_city = parentNode.getElementsByTagName('input')[1];
		var start_city_name = start_city.value;
		start_city.value = arrive_city.value;
		arrive_city.value = start_city_name;
	},false);
}

var gnjp_single_trip = document.getElementById('gnjp_single_trip');
var gnjp_round_trip = document.getElementById('gnjp_round_trip');
var gn_jp = document.getElementsByClassName('gn-jp')[0];
var gn_jp_selectType = gn_jp.getElementsByClassName('select-type')[0];

var gjjp_single_trip = document.getElementById('gjjp_single_trip');
var gjjp_round_trip = document.getElementById('gjjp_round_trip');
var gj_jp = document.getElementsByClassName('gj-jp')[0];
var gj_jp_selectType = gj_jp.getElementsByClassName('select-type')[0];

gn_jp_selectType.addEventListener('click',function(e){
	if(gnjp_round_trip.checked){
		gn_jp.classList.add('jp_round');
	}else{
		if(gn_jp.classList.contains('jp_round')){
			gn_jp.classList.remove('jp_round');
		}
	}
},false);

gj_jp_selectType.addEventListener('click',function(e){
	if(gjjp_round_trip.checked){
		gj_jp.classList.add('jp_round');
	}else{
		if(gj_jp.classList.contains('jp_round')){
			gj_jp.classList.remove('jp_round');
		}
	}
},false);


// 获取hotelTime

var nowTime = new Date();
var nowYear = nowTime.getFullYear();
var nowMonth = nowTime.getMonth() +1;
var nowDate = nowTime.getDate();

var tomorrow = new Date(nowYear,nowMonth,nowDate+1);
var TDate = tomorrow.getDate();

var startHotelTime = document.getElementById('startHotelTime');
var leaveHotelTime = document.getElementById('leaveHotelTime');
var sHT = nowYear + '-' + nowMonth + '-' + nowDate;
var lHT = nowYear + '-' + nowMonth + '-' + TDate;
startHotelTime.placeholder = sHT;
leaveHotelTime.placeholder = lHT;

// serviceTab_close
var J_event = document.getElementsByClassName('J_event')[0];
var J_event_close = document.getElementsByClassName('J_event_close')[0];
if(J_event_close){
	J_event_close.onclick = function(e){
		// e.stopProgatation();
		// console.log();
		J_event.style.opacity = 1;
		var timer1 = setInterval(function(){
			J_event.style.opacity -= 0.1333;
			if(J_event.style.opacity <= 0.1333){
				clearInterval(timer1);
				J_event.style.opacity = '';
				J_event.style.display = 'none';
			}
		},40)
		
	}
}


var J_fs_act = document.getElementsByClassName('J_fs_act')[0];
if(J_fs_act){
	J_fs_act.onmouseenter = function(e){
		this.className += ' J_fs_act_active';
	}
	J_fs_act.onmouseleave = function(e){
		this.className = this.className.replace(' J_fs_act_active','');
	}
}


