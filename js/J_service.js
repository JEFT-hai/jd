// window.onload = function(){
	var service_list_data = {
		o1:['huafei','话费',' tab_head_item',0,' service_on'],
		o2:['jipiao','机票',' tab_head_item',1],
		o3:['jiudian','酒店',' tab_head_item',2],
		o4:['youxi','游戏',' tab_head_item',3],
		o5:['qiyegou','企业购'],
		o6:['jiayouka','加油卡'],
		o7:['dianyingpaio','电影票'],
		o8:['huochepaio','火车票'],
		o9:['zhongchou','众筹'],
		o10:['licai','理财'],
		o11:['lipinka','礼品卡'],
		o12:['baitiao','白条']
	}

	var J_service = document.getElementsByClassName('J_service')[0];
	var service_entry = J_service.getElementsByClassName('service_entry')[0];
	var service_list = service_entry.getElementsByClassName('service_list')[0];
	
	for(var key in service_list_data){
		var L = document.createElement('li');
		L.className = 'service_item';
		var a = document.createElement('a');
		var i = document.createElement('i');
		var span = document.createElement('span');

		i.className = 'service_ico service_ico_'+service_list_data[key][0];
		span.innerHTML = service_list_data[key][1];

		span.className = 'service_txt';

		a.appendChild(i);
		a.appendChild(span);
		a.href = '#';
		a.className = 'service_lk';

		if(service_list_data[key][2]){
			L.className += service_list_data[key][2];
		}
		if(service_list_data[key][3] != undefined){
			a.setAttribute('data-index',service_list_data[key][3]);
		}
		if(service_list_data[key][4]){
			L.className += service_list_data[key][4];
		}
		
		L.appendChild(a);

		service_list.appendChild(L);
	}

	// function show_expand(){
	// 	J_service.className += ' service_expand';
	// }
	// show_expand();
	// 
	
	var hf_content_list = document.getElementById('hf_content_list');
	var hf_dis_tab_list = document.getElementById('hf_dis_tab_list');
	hf_dis_tab_list.onmouseover = function(e){
		var e = e||window.event;
		var target = e.target;

		if(target.nodeName.toLowerCase() == 'a'){
			var index = target.getAttribute('data-index');

			subClass_R_and_A(this,'li','current',index);
			tab_sub_H_and_S(hf_content_list,'hf-content-item',index);
		}
	}

	var jp_trans_tab_list = document.getElementById('jp_trans_tab_list');
	

	// jp_trans_tab_list.onmouseover = function(e){
	// 	var e = e||window.event;
	// 	var target = e.target;

	// 	if(target.nodeName.toLowerCase() == 'a'){
	// 		var index = target.getAttribute('data-index');

	// 		subClass_R_and_A(this,'li',' current',index);
	// 		var content_item = jp_content_list.getElementsByClassName('content-item')[0];
	// 		var X = content_item.offsetWidth*index;

	// 		jp_content_list.style.transform = 'translate3d('+ (-X + 'px')+ ',0,0)';
	// 		console.log(X);

	// 	}
	// }

	var service_pop = document.getElementById('service_pop');
	var trans_tab_list = service_pop.getElementsByClassName('trans_tab_list');
	var tab_timer;
	for(var i=0;i<trans_tab_list.length;i++){
		trans_tab_list[i].index = i;
		trans_tab_list[i].onmouseover = function(e){

			var e = e||window.event;
			var target = e.target;
			var that = this;

			
				var trans_content_list = document.getElementsByClassName('trans_content_list')[this.index];

				if(target.nodeName.toLowerCase() == 'a'){
						var index = target.getAttribute('data-index');

						
					tab_timer = setTimeout(function(){
						subClass_R_and_A(that,'li','current',index);
						var content_item = trans_content_list.getElementsByClassName('content-item')[0];
						var X = content_item.offsetWidth*index;
						trans_content_list.style.transform = 'translate3d('+ (-X + 'px')+ ',0,0)';
						trans_content_list.style.msTransform = 'translate('+ (-X + 'px')+ ',0)';
					},300);
				}

		}
		trans_tab_list[i].onmouseout = function(e){
			clearTimeout(tab_timer);
		}
 	}

	// huafei
	var hf_tip = document.getElementsByClassName('hf_tip');
	// var hf_phoneNum = document.getElementById('hf_phoneNum');
	var hf_phoneNum = document.getElementsByClassName('hf_phoneNum');
	// var hf_fast_recharge = document.getElementById('hf_fast_recharge');
	var hf_fast_recharge = document.getElementsByClassName('btn-wrapper-one');

	for(var i=0;i<hf_fast_recharge.length;i++){
		hf_fast_recharge[i].index = i;
		hf_phoneNum[i].index = i;
		hf_fast_recharge[i].onclick = function(e){
			// console.log(this.index);
			hf_tip[this.index].style.display = 'block';
			hf_phoneNum[this.index].focus();
		}

		hf_phoneNum[i].onfocus = function(e){
			this.placeholder = '';
		}

		hf_phoneNum[i].onblur = function(e){
			hf_tip[this.index].style.display = 'none';
			this.placeholder = '请输入手机号';
		}

	}

	
// }
