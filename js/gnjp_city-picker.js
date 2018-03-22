// var gnjp_city = {
// 	title:'支持中文/拼音/简拼输入',
// 	tab_head:{'热门','ABCDE','FGHJ','KLMN','PQSTW','XYZ'}
// }
var	tab_list1 = {
		'热门':{
			item:{
				fn:[
				'北京','上海','深圳','杭州','广州','成都','南京','武汉','长沙','昆明','西安','青岛','厦门','天津','大连','重庆','三亚','福州','郑州','呼和浩特','宁波','太原','乌鲁木齐','沈阳'
				]
			}
		},
		abcde:{
			item1:{
				fl:'A',
				fn:[
					'阿尔山','安康','阿克苏','阿里','阿勒泰','安庆','鞍山','安顺','安阳'
				]
			},
			item2:{
				fl:'B',
				fn:[
					'博鳌','蚌埠','北海','北京','毕节','博乐','百色','保山','包头','巴彦淖尔'
				]
			},
			item3:{
				fl:'C',
				fn:['长白山','长春','常德','昌都','成都','赤峰','长海','重庆','长沙','朝阳','长治','常州','池州']
			},
			item4:{
				fl:'D',
				fn:['稻城','丹东','敦煌','大理','大连','大庆','迪庆','大同','东营','达州']
			},
			item5:{
				fl:'E',
				fn:['鄂尔多斯','额济纳旗','二连浩特','恩施']
			}
		},
		FGHJ:{
			item1:{
				fl:'F',
				fn:[
					'佛山','阜阳','富蕴','福州'
				]
			},
			item2:{
				fl:'G',
				fn:[
					'格尔木','广汉','桂林','广元','贵阳','固原','赣州','广州'
				]
			},
			item3:{
				fl:'H',
				fn:[
					'淮安','邯郸','哈尔滨','合肥','黑河','怀化','呼和浩特','海口','海拉尔','哈密','黄山','和田','衡阳','黄岩','杭州','汉中','惠州'
				]
			},
			item4:{
				fl:'J',
				fn:[
					'吉安','金昌','景德镇','加格达奇','井冈山','晋江','九江','吉林','佳木斯','济南','济宁','酒泉','鸡西','揭阳','嘉峪关','荆州','锦州','九寨沟'
				]
			}
		},
		KLMN:{
			item1:{
				fl:'K',
				fn:[
					'库车','康定','库尔勒','凯里','克拉玛依','昆明','喀纳斯','喀什'
				]
			},
			item2:{
				fl:'L',
				fn:[
					'荔波','连城','临沧','丽江','吕梁','梁平','黎平','六盘水','拉萨','临沂','洛阳','连云港','兰州','林芝','柳州','泸州'
				]
			},
			item3:{
				fl:'M',
				fn:[
					'牡丹江','漠河','芒市','绵阳','梅州','满洲里'
				]
			},
			item4:{
				fl:'N',
				fn:[
					'宁波','南昌','南充','南京','那拉提','南宁','南通','南阳'
				]
			}
		},
		PQSTW:{
			item1:{
				fl:'P',
				fn:[
					'攀枝花'
				]
			},
			item2:{
				fl:'Q',
				fn:[
					'且末','青岛','秦皇岛','黔江','齐齐哈尔','庆阳','衢州'
				]
			},
			item3:{
				fl:'S',
				fn:[
					'上海','山海关','石家庄','思茅','三亚','沈阳','深圳','苏州'
				]
			},
			item4:{
				fl:'T',
				fn:[
					'塔城','腾冲','通化','天津','通辽','吐鲁番','铜仁','唐山','天水','太原'
				]
			},
			item5:{
				fl:'W',
				fn:[
					'五台山','潍坊','威海','乌海','武汉','乌兰浩特','乌鲁木齐','文山','万县','无锡','武夷山','温州','梧州'
				]
			}
		},
		XYZ:{
			item1:{
				fl:'X',
				fn:[
					'西安','西昌','锡林浩特','厦门','西宁','西双版纳','襄阳','兴义','徐州'
				]
			},
			item2:{
				fl:'Y',
				fn:[
					'延安','宜宾','盐城','宜昌','宜春','伊春','银川','运城','延吉','榆林','伊宁','玉树','烟台','义乌','扬州','永州'
				]
			},
			item3:{
				fl:'Z',
				fn:[
					'珠海','湛江','张家界','张家口','舟山','昭通','中卫','张掖','遵义','郑州'
				]
			}
		},
	}
	
// for(var key in tab_list){
// 	console.log(key);
// }
	// for(var key in gnjp_city){
	// 	if(key == 'title'){
	// 		gnjp_cityList_title.innerHTML = gnjp_city[key];
	// 	}else if(key == 'tab_head'){
	// 		for(var i=0;i<gnjp_city[key].length;i++){
	// 			var L = document.createElement('li');
	// 			L.innerHTML = gnjp_city[key][i];
	// 			gnjp_cityList_header.appendChild(L);
	// 		}
	// 	}else if(key == 'tab_content'){
	// 		for(var i =0;i<gnjp_city[key].length;i++){
	// 			var tab_content_item = document.createElement('div');
	// 			var div = document.createElement('div');

	// 		}
	// 	}
	// }
	var dataList = tab_list;
	var selectPicker = {};
	
	
	var select_picker = document.getElementsByClassName('select_picker');

	selectPicker.init = function(elem){
		var ui_selcetPicker_wrapper = document.getElementsByClassName('ui_selcetPicker_wrapper')[0];
		if(!ui_selcetPicker_wrapper){
			var ui_selcetPicker_wrapper = document.createElement('div');
			ui_selcetPicker_wrapper.classList.add('ui_selcetPicker_wrapper');
			document.body.appendChild(ui_selcetPicker_wrapper);
		}
		// else{
			ui_selcetPicker_wrapper.style.display = 'block';
		// }
		if(elem.classList.contains('gnjp_city_list')){
			var ui_selectPicker = document.createElement('div');
			ui_selectPicker.className = 'gnjp_city_list';
			ui_selcetPicker_wrapper.appendChild(ui_selectPicker);
			

			selectPicker.data = tab_list1;
		}else if(elem.classList.contains('gjjp_city_list')){
			var ui_selectPicker = document.createElement('div');
			ui_selectPicker.className = 'gnjp_city_list';
			ui_selcetPicker_wrapper.appendChild(ui_selectPicker);

			selectPicker.data = tab_list2;
		}

		selectPicker.render(selectPicker.date);
	}
	selectPicker.render = function(data){
		var html = '<div class="ui-selectList_title">支持中文/拼音/简拼输入</div>'+
			'<ul class="ui-selectList_head">';
			for(var key in dataList){
				html += '<li>'+ key +'</li>'
			}
				

		html +=	'</ul>'+
				'<div class="ui-selectList_content">';

			for(var key in dataList){
				html += '<div class="ui-tab_list">'
				for(var key1 in  dataList[key]){
					html += '<div class="item">'
					if(dataList[key][key1].fl){
						html += '<div class="fl">'+ dataList[key][key1].fl+ '</div>'		
					}
						html +=	'<div class="fn">'
					for(var i = 0;i<dataList[key][key1].fn.length;i++){
						html += '<a href="javascript:;">'+dataList[key][key1].fn[i]+'</a>'
					}
					html +=	'</div>'+
						'</div>'

				}
				html +=	'</div>'			
		}
	}
	for(var i =0;i<select_picker.length;i++){
		select_picker[i].addEventListener('focus',function(e){
			selectPicker.init(this);
			
			var e = e || window.event;
			var target = e.target;

			selectPicker.target = target;
			if(selectPicker.target.index == undefined){
				selectPicker.target.index = 0;
			}

			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var top = target.getBoundingClientRect().top + scrollTop;
			var left = target.getBoundingClientRect().left;

			var H = target.offsetHeight;
			var W = target.offsetWidth;

			gnjp_cityList_picker.style.left = left + W/2 + 'px';
			gnjp_cityList_picker.style.top = top + H -1 + 'px';
			gnjp_cityList_picker.style.display = 'block';

			for(var i = 0;i<gnjp_head_list.length;i++){
				gnjp_items[i].style.display = 'none';
				if(gnjp_head_list[i].classList.contains('cur')){
					gnjp_head_list[i].classList.remove('cur');
				}
				if(i == selectPicker.target.index){
					//console.log(selectPicker.target.index)
					gnjp_items[i].style.display = 'block';
					gnjp_head_list[i].classList.add('cur');
					//console.log(gnjp_head_list[0]);
				}
				
			}
		},false);

		gnjp_city_picker[i].addEventListener('mouseleave',function(e){
			var e = e || window.event;
			var target = e.target;

			// var gnjp_cityList_picker = document.getElementsByClassName('gnjp_cityList-picker')[0];
			// console.log(gnjp_cityList_picker)
			// if(gnjp_cityList_picker.style.display == 'none'){
			// 	return;
			// }

			// console.log(e.relatedTarget.nodeName);
			// if(e.relatedTarget.nodeName.toLowerCase() == 'body' || e.relatedTarget.nodeName.toLowerCase() == 'html'){
			// 	// if()
			// 	gnjp_cityList_picker.style.display = 'none';
			// 	console.log(1212);
			// }else 
			//console.log(e.relatedTarget);
			if(e.relatedTarget.classList.contains('gnjp_cityList-picker') || e.relatedTarget.parentNode.classList.contains('gnjp_cityList-picker')){
				// console.log(2323);
				return;
			}else{
				gnjp_cityList_picker.style.display = 'none';
				this.blur();
			}

		},false);
	}
	var ui_selectList_picker = document.createElement('div');
	var ui_selectList_content = document.createElement('div');
	select_picker.init = function(dataList){
		
			
			ui_selectList_content.innerHTML = html;
			var gnjp_cityList_picker = document.createElement('div');
			gnjp_cityList_picker.className = 'gnjp_cityList-picker';
			gnjp_cityList_picker.appendChild(ui_selectList_content);
			document.body.appendChild(gnjp_cityList_picker);
	}
	

		var gnjp_cityList_head = gnjp_cityList_picker.getElementsByClassName('gnjp_cityList_head')[0];
		var gnjp_head_list = gnjp_cityList_head.getElementsByTagName('li');
		var gnjp_items = gnjp_cityList_content.getElementsByClassName('tab_list');
		gnjp_cityList_head.addEventListener('click',function(e){
			var e = e || window.event;
			var target = e.target;
			if(target.nodeName.toLowerCase() == 'li'){
				var index = target.dataset.index;
				selectPicker.target.index = index;
				
				// console.log(gnjp_items);
				var L = this.getElementsByTagName('li');
				console.log(L);
				for(var i = 0;i<gnjp_items.length;i++){
					gnjp_items[i].style.display = 'none';
					console.log(L[i].classList.contains('cur'));
					if(L[i].classList.contains('cur')){
						L[i].classList.remove('cur');
					}
					if(i == index){
						gnjp_items[i].style.display = 'block';
					}
					target.classList.add('cur');
				}
			}
		},false);

		var selectPicker = {};

		gnjp_cityList_picker.addEventListener('click',function(e){
			var e = e || window.event;
			var target = e.target;

			if(target.nodeName.toLowerCase() == 'a' && target.parentNode.classList.contains('fn')){
				selectPicker.target.value = target.innerHTML;
				gnjp_cityList_picker.style.display = 'none';
				if(selectPicker.target.dataset.next){
					var next = document.getElementById(selectPicker.target.dataset.next);
					next.focus();
				}
				
			}
		},false);

		gnjp_cityList_picker.addEventListener('mouseleave',function(e){
			var e = e || window.event;
			var target = e.target;

			if(e.relatedTarget.classList.contains('gnjp_city_picker')){
				return;
			}else{
				selectPicker.target.blur();
				this.style.display = 'none';
			}
		},false);




