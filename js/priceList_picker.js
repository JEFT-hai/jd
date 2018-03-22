var priceListdata = ['20元','60元','120元','240元'];

var gameListdata = [
	'Q币','QQ会员','QQ超级会员','QQ钻皇','QQ黑钻','QQ红钻','QQ绿钻豪华版','QQ黄钻','QQ黄钻豪华版','QQ蓝钻','QQ蓝钻豪华版','QQ飞车紫钻','QQ堂紫钻','QQ炫舞紫钻','腾讯视频VIP会员','腾讯体育会'
]

var priceList_picker = document.getElementsByClassName('priceList_picker');
var priceListPicker = {};

for(var i =0;i<priceList_picker.length;i++){
	priceList_picker[i].addEventListener('focus',function(e){
		var e = e || window.event;
		var target = e.target;

		priceListPicker.target = target;

		priceListPicker.init(this);

		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var top = target.getBoundingClientRect().top + scrollTop;
		var left = target.getBoundingClientRect().left;

		var H = target.offsetHeight;
		var W = target.offsetWidth;

		var ui_priceList_picker_wrapper = document.getElementsByClassName('ui_priceList_picker_wrapper')[0];

		ui_priceList_picker_wrapper.style.left = left + W/2 + 'px';
		ui_priceList_picker_wrapper.style.top = top + H + 0 + 'px';
		ui_priceList_picker_wrapper.style.display = 'block';
	},false);

	priceList_picker[i].addEventListener('mouseleave',function(e){
		var e = e || window.event;
		var target = e.target;

		var ui_priceList_picker_wrapper = document.getElementsByClassName('ui_priceList_picker_wrapper')[0];
		if(!ui_priceList_picker_wrapper){
			return;
		}
		if(ui_priceList_picker_wrapper.style.display == 'none'){
			return;
		}

		if(e.relatedTarget.classList.contains('ui_priceList_picker_wrapper') || e.relatedTarget.parentNode.classList.contains('ui_priceList_picker_wrapper')){
			return;
		}else{
			ui_priceList_picker_wrapper.style.display = 'none';
			this.blur();
		}

	},false);
}

priceListPicker.init = function(elem){
	var ui_priceList_picker_wrapper = document.getElementsByClassName('ui_priceList_picker_wrapper')[0];
	if(!ui_priceList_picker_wrapper){
		var ui_priceList_picker_wrapper = document.createElement('div');
		ui_priceList_picker_wrapper.className = 'ui_priceList_picker_wrapper';
		var ui_priceList_picker_ul = document.createElement('ul');
		ui_priceList_picker_ul.className = 'ui_priceList_picker_ul';
		ui_priceList_picker_wrapper.appendChild(ui_priceList_picker_ul);
		document.body.appendChild(ui_priceList_picker_wrapper);
	}
	var ui_priceList_picker_wrapper = document.getElementsByClassName('ui_priceList_picker_wrapper')[0];
	var ui_priceList_picker_ul = document.getElementsByClassName('ui_priceList_picker_ul')[0];

	priceListPicker.data = priceListdata;
	if(elem.classList.contains('gameList')){
		priceListPicker.data = gameListdata;
	}
	ui_priceList_picker_ul.innerHTML = priceListPicker.render(priceListPicker.data);

	ui_priceList_picker_ul.addEventListener('click',function(e){
		var e = e || window.event;
		var target = e.target;

		if(target.nodeName.toLowerCase() == 'li'){
			priceListPicker.target.value = target.innerHTML;
			ui_priceList_picker_wrapper.style.display = 'none';
		}
	},false);

	ui_priceList_picker_wrapper.addEventListener('mouseleave',function(e){
		var e = e || window.event;
		elem.blur();
		if(e.relatedTarget.classList.contains('priceList_picker')){
			return;
		}else{
			ui_priceList_picker_wrapper.style.display = 'none';
		}
			
	},false);


}

priceListPicker.render = function(dataList){
	var html = '';
	for(var i=0;i<dataList.length;i++){
		html += '<li>'+ dataList[i] +'</li>';
	}

	return html;
}