// var gjjp_city = {
// 	title:'支持中文/拼音/简拼输入',
// 	tab_head:{'热门','ABCDE','FGHJ','KLMN','PQSTW','XYZ'}
// }
var	tab_list = {
		'国内热门':{
			item:{
				fn:[
				'北京','上海','广州','深圳','成都','杭州','重庆','西安','厦门','昆明','武汉','南京','长沙','青岛','郑州','三亚','天津','大连','沈阳','哈尔滨','济南','福州','澳门','香港'
				]
			}
		},
		'国际热门':{
			item:{
				fn:[
				'香港','澳门','首尔','仁川','台北','东京','新加坡','曼谷','大阪','胡志明市','马尼拉','名古屋','伦敦(英)','吉隆坡','釜山','悉尼(澳)','法兰克福','温哥华','巴黎','纽约','洛杉矶','夏威夷','芝加哥','普吉岛','巴厘岛'
				]
			}
		},
		'亚洲':{
			item:{
				fn:[
				'香港','澳门','台北','首尔','仁川','东京','新加坡','曼谷','大阪','吉隆坡','胡志明市','马尼拉','雅加达','巴厘岛','名古屋','普吉岛','河内','马累','迪拜','釜山','加德满都','高雄','福冈','金边德里','济州岛','札幌','乌兰巴托','孟买','伊斯坦布'
				]
			}
		},
		'欧洲':{
			item:{
				fn:[
				'伦敦(英)','巴黎','法兰克福','莫斯科','罗马','米兰','慕尼黑','柏林','曼彻斯特(英)','马德里','苏黎世','布鲁塞尔','哥本哈根','赫尔辛基','维也纳','巴塞罗那','雅典','爱丁堡','伯明翰纽','卡斯尔(英)','日内瓦','圣彼得堡','格拉斯哥','基辅布达佩','斯汉堡','布拉格','阿姆斯特丹','斯德哥尔摩','杜塞尔多'
				]
			}
		},
		'美洲':{
			item:{
				fn:[
				'纽约','洛杉矶','夏威夷','旧金山','温哥华','芝加哥','多伦多','西雅图','华盛顿','波士顿','底特律','休斯顿','蒙特利尔塞','班达拉斯','费城','圣保罗(巴)','渥太华','墨西哥','城卡尔','加里','迈阿密','丹佛','奥兰多','埃德蒙顿','拉斯维加斯','曼彻斯特'
				]
			}
		},
		'非洲':{
			item:{
				fn:[
				'开罗','开普敦','内罗毕','拉各斯','罗安达','毛里求斯','喀土穆','阿克拉','阿尔及尔','德班','突尼斯','卢萨卡','哈拉雷','雅温得','金沙萨','马普托','杜阿拉','弗里敦','阿比让','卢克索'
				]
			}
		},
		'大洋洲':{
			item:{
				fn:[
				'悉尼(澳)','墨尔本(澳)','布里斯班','奥克兰(新)','阿德莱德','珀斯','惠灵顿','堪培拉','凯恩斯','黄金海岸','霍巴特','达尔文','达尼丁'
				]
			}
		}
	}
	
var gjjp_cityList = document.createElement('div');

var gjjp_cityList_content = document.createElement('div');
	// for(var key in gjjp_city){
	// 	if(key == 'title'){
	// 		gjjp_cityList_title.innerHTML = gjjp_city[key];
	// 	}else if(key == 'tab_head'){
	// 		for(var i=0;i<gjjp_city[key].length;i++){
	// 			var L = document.createElement('li');
	// 			L.innerHTML = gjjp_city[key][i];
	// 			gjjp_cityList_header.appendChild(L);
	// 		}
	// 	}else if(key == 'tab_content'){
	// 		for(var i =0;i<gjjp_city[key].length;i++){
	// 			var tab_content_item = document.createElement('div');
	// 			var div = document.createElement('div');

	// 		}
	// 	}
	// }
	// 
	var html = '<div class="gnjp_cityList_title">支持中文/拼音/简拼输入</div>'+
		'<ul class="gnjp_cityList_head">'+
			'<li data-index="0">国内热门</li>'+
			'<li data-index="1">国际热门</li>'+
			'<li data-index="2">亚洲</li>'+
			'<li data-index="3">欧洲</li>'+
			'<li data-index="4">美洲</li>'+
			'<li data-index="5">非洲</li>'+
			'<li data-index="5">大洋洲</li>'+
		'</ul>'+
		'<div class="gnjp_cityList_content">'

		for(var key in tab_list){
			html += '<div class="tab_list">'
			for(var key1 in  tab_list[key]){
				html += '<div class="item">'
				// if(tab_list[key][key1].fl){
				// 	html += '<div class="fl">'+ tab_list[key][key1].fl+ '</div>'		
				// }
					html +=	'<div class="fn">'
				for(var i = 0;i<tab_list[key][key1].fn.length;i++){
					html += '<a href="javascript:;">'+tab_list[key][key1].fn[i]+'</a>'
				}
				html +=	'</div>'+
					'</div>'

			}
			html +=	'</div>'			
		}
		
		gjjp_cityList_content.innerHTML = html;
		var gjjp_cityList_picker = document.createElement('div');
		gjjp_cityList_picker.className = 'gjjp_cityList-picker';
		gjjp_cityList_picker.appendChild(gjjp_cityList_content);
		document.body.appendChild(gjjp_cityList_picker);

		var gjjp_cityList_head = gjjp_cityList_picker.getElementsByClassName('gnjp_cityList_head')[0];
		var gjjp_head_list = gjjp_cityList_head.getElementsByTagName('li');
		var gjjp_items = gjjp_cityList_content.getElementsByClassName('tab_list');
		gjjp_cityList_head.addEventListener('click',function(e){
			var e = e || window.event;
			var target = e.target;
			if(target.nodeName.toLowerCase() == 'li'){
				var index = target.dataset.index;
				gjjp_cityPicker.target.index = index;
				
				var L = this.getElementsByTagName('li');
				for(var i = 0;i<gjjp_items.length;i++){
					gjjp_items[i].style.display = 'none';
					if(L[i].classList.contains('cur')){
						L[i].classList.remove('cur');
					}
					if(i == index){
						gjjp_items[i].style.display = 'block';
					}
					target.classList.add('cur');
				}
			}
		},false);

		var gjjp_cityPicker = {};

		var gjjp_city_picker = document.getElementsByClassName('gjjp_city_picker');
		for(var i =0;i<gjjp_city_picker.length;i++){
			gjjp_city_picker[i].addEventListener('focus',function(e){
				var e = e || window.event;
				var target = e.target;

				gjjp_cityPicker.target = target;

				if(gjjp_cityPicker.target.index == undefined){
					gjjp_cityPicker.target.index = 0;
				}

				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var top = target.getBoundingClientRect().top + scrollTop;
				var left = target.getBoundingClientRect().left;

				var H = target.offsetHeight;
				var W = target.offsetWidth;

				gjjp_cityList_picker.style.left = left + W/2 + 'px';
				gjjp_cityList_picker.style.top = top + H -1 + 'px';
				gjjp_cityList_picker.style.display = 'block';

				for(var i = 0;i<gjjp_items.length;i++){
					gjjp_items[i].style.display = 'none';
					if(gjjp_head_list[i].classList.contains('cur')){
						gjjp_head_list[i].classList.remove('cur');
					}
					if(i == gjjp_cityPicker.target.index){
						//console.log(gjjp_cityPicker.target.index)
						gjjp_items[i].style.display = 'block';
						gjjp_head_list[i].classList.add('cur');
					}
					
				}
			},false);

			gjjp_city_picker[i].addEventListener('mouseleave',function(e){
				var e = e || window.event;
				var target = e.target;

				// var gjjp_cityList_picker = document.getElementsByClassName('gjjp_cityList-picker')[0];
				// console.log(gjjp_cityList_picker)
				// if(gjjp_cityList_picker.style.display == 'none'){
				// 	return;
				// }

				// console.log(e.relatedTarget.nodeName);
				// if(e.relatedTarget.nodeName.toLowerCase() == 'body' || e.relatedTarget.nodeName.toLowerCase() == 'html'){
				// 	// if()
				// 	gjjp_cityList_picker.style.display = 'none';
				// 	console.log(1212);
				// }else 
				//console.log(e.relatedTarget);
				if(e.relatedTarget.classList.contains('gjjp_cityList-picker') || e.relatedTarget.parentNode.classList.contains('gjjp_cityList-picker')){
					// console.log(2323);
					return;
				}else{
					gjjp_cityList_picker.style.display = 'none';
					this.blur();
				}

			},false);
		}

		gjjp_cityList_picker.addEventListener('click',function(e){
			var e = e || window.event;
			var target = e.target;

			if(target.nodeName.toLowerCase() == 'a' && target.parentNode.classList.contains('fn')){
				gjjp_cityPicker.target.value = target.innerHTML;
				gjjp_cityList_picker.style.display = 'none';
				if(gjjp_cityPicker.target.dataset.next){
					var next = document.getElementById(gjjp_cityPicker.target.dataset.next);
					next.focus();
				}
				
			}
		},false);

		gjjp_cityList_picker.addEventListener('mouseleave',function(e){
			var e = e || window.event;
			var target = e.target;

			if(e.relatedTarget.classList.contains('gjjp_city_picker')){
				return;
			}else{
				gjjp_cityPicker.target.blur();
				this.style.display = 'none';
			}
		},false);




