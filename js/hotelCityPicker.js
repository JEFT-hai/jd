var hotelCityList = {
		'热门城市':{
			item:{
				fn:[
				'北京','上海','广州','成都','武汉','杭州','深圳','三亚','厦门','南京','青岛','西安','天津','重庆','苏州','济南','长沙','香港','大连','哈尔滨'
				]
			}
		},
		ABC:{
			item1:{
				fl:'A',
				fn:[
					'安顺市','安吉','安庆','鞍山'
				]
			},
			item2:{
				fl:'B',
				fn:[
					'北京','百色','包头','滨州','北海','本溪','蚌埠','北戴河','保定','宝鸡'
				]
			},
			item3:{
				fl:'C',
				fn:['长沙','重庆','成都','常熟','长春','慈溪','常州','沧州','长治','赤峰','长白山','承德','潮州','昌黎','郴州']
			}
		},
		DEFG:{
			item1:{
				fl:'D',
				fn:[
					'大连','大邑','敦煌','大庆','德州','德清','达州','登封','大理','东莞','丹东','大同','德阳','东营'
				]
			},
			item2:{
				fl:'E',
				fn:[
					'恩施','恩平','峨眉山','额尔古纳'
				]
			},
			item3:{
				fl:'F',
				fn:[
					'凤凰','福州','佛山','抚顺','阜阳'
				]
			},
			item4:{
				fl:'G',
				fn:[
					'广州','贵阳','桂林','广元','赣州'
				]
			}
		},
		HJ:{
			item1:{
				fl:'H',
				fn:[
					'杭州','香港','哈尔滨','衡水','惠州','邯郸','衡阳','海宁','淮安','葫芦岛','合肥','湖州','横店','黄山','华山','宏村','呼伦贝尔','宏村','海口','河源','呼和浩特'
				]
			},
			item2:{
				fl:'J',
				fn:[
					'济南','锦州','晋江','嘉峪关','晋中','晋城','吉林','焦作','金华','济宁','嘉兴','江门','即墨','九江','揭阳','九寨沟','江阴','景德镇','荆州','九华山'
				]
			}
		},
		KLM:{
			item1:{
				fl:'K',
				fn:[
					'凯里','开平','昆山','昆明','开封'
				]
			},
			item2:{
				fl:'L',
				fn:[
					'临沂','丽水','阆中','乐山','拉萨','六安','聊城','丽江','连云港','洛阳','柳州','临安','廊坊','兰州','庐山','龙岩','临汾','泸州'
				]
			},
			item3:{
				fl:'M',
				fn:[
					'马鞍山','澳门','茂名','绵阳','梅州','牡丹江'
				]
			}
		},
		NPQ:{
			item1:{
				fl:'N',
				fn:[
					'南京','南阳','宁波','南宁','南浔','南通','南昌','南戴','河南','充宁海'
				]
			},
			item2:{
				fl:'P',
				fn:[
					'平遥','蓬莱','攀枝花','莆田','盘锦'
				]
			},
			item3:{
				fl:'Q',
				fn:[
					'青岛','曲阜','齐齐哈尔','千岛湖','衢州','秦皇岛','泉州','清远','琼海','钦州'
				]
			}
		},
		RSTW:{
			item1:{
				fl:'R',
				fn:[
					'日照','乳山','瑞安','瑞丽','荣成'
				]
			},
			item2:{
				fl:'S',
				fn:[
					'上海','苏州','深圳','三亚','韶关','汕尾','十堰','汕头','沈阳','绍兴','石家庄','宿迁','三清山','商丘','上饶市'
				]
			},
			item3:{
				fl:'T',
				fn:[
					'天津','桐乡','腾冲','台山','铜陵','太仓','天水','同里','泰安','通辽','唐山','桐庐','太原','台州','泰州'
				]
			},
			item4:{
				fl:'W',
				fn:[
					'武汉','温州','无锡','婺源','乌镇','芜湖','潍坊','武夷山','威海','梧州','吴江','武当山','五台山'
				]
			}
		},
		XYZ:{
			item1:{
				fl:'X',
				fn:[
					'厦门','西安','咸阳','西塘','西宁','西昌','许昌','徐州','咸宁','邢台','信阳','象山','香格里拉','新乡','西双版纳','兴城','湘潭','襄阳'
				]
			},
			item2:{
				fl:'Y',
				fn:[
					'宜昌','宜春','雁荡山','银川','营口','延安','余姚','扬州','榆林','延吉','雅安','宜宾','阳江','宜兴','玉林','烟台','阳朔','岳阳','盐城'
				]
			}
		}
}

var hotelCityPicker = {};
hotelCityPicker.toggleDrop = false;

var hotelCity_picker = document.getElementsByClassName('hotelCity_picker');

for(var i =0;i<hotelCity_picker.length;i++){
	hotelCity_picker[i].addEventListener('focus',function(e){

		var e = e || window.e;
		var target = e.target;

		hotelCityPicker.target = target;

		if(hotelCityPicker.target.index == undefined){
			hotelCityPicker.target.index = 0;
		}

		hotelCityPicker.init(this);

		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		var top = target.getBoundingClientRect().top + scrollTop;
		var left = target.getBoundingClientRect().left;

		var H = target.offsetHeight;
		var W = target.offsetWidth;

		var ui_hotelPicker_wrapper = document.getElementsByClassName('ui_hotelPicker_wrapper')[0];

		ui_hotelPicker_wrapper.style.left = left + W/2 + 'px';
		ui_hotelPicker_wrapper.style.top = top + H -1 + 'px';
		ui_hotelPicker_wrapper.style.display = 'block';

	},false);

	hotelCity_picker[i].addEventListener('mouseleave',function(e){
		var e = e || window.event;
		var target = e.target;

		var ui_hotelPicker_wrapper = document.getElementsByClassName('ui_hotelPicker_wrapper')[0];
		if(!ui_hotelPicker_wrapper){
			return;
		}
		if(ui_hotelPicker_wrapper.style.display == 'none'){
			return;
		}

		if(e.relatedTarget.classList.contains('ui_hotelPicker_wrapper') || e.relatedTarget.parentNode.classList.contains('ui_hotelPicker_wrapper')){
			return;
		}else{
			ui_hotelPicker_wrapper.style.display = 'none';
			this.blur();
		}

	},false);

};

hotelCityPicker.init = function(elem){

	var ui_hotelPicker_wrapper = document.getElementsByClassName('ui_hotelPicker_wrapper')[0];
	if(!ui_hotelPicker_wrapper){
		var ui_hotelPicker_wrapper = document.createElement('div');
		var ui_hotelPicker = document.createElement('div');
		ui_hotelPicker.className = 'ui-hotelPicker';

		ui_hotelPicker_wrapper.classList.add('ui_hotelPicker_wrapper');
		document.body.appendChild(ui_hotelPicker_wrapper);
	}else{
		var ui_hotelPicker = document.getElementsByClassName('ui-hotelPicker')[0];
	};

	ui_hotelPicker_wrapper.style.display = 'block';

	hotelCityPicker.data = hotelCityList;

	// console.log(ui_hotelPicker)
	ui_hotelPicker.innerHTML = hotelCityPicker.render(hotelCityPicker.data);
	ui_hotelPicker_wrapper.appendChild(ui_hotelPicker);

	var ui_hotelList_head= ui_hotelPicker_wrapper.getElementsByClassName('ui-hotelList_head')[0];
	var ui_hotelList_headList = ui_hotelList_head.getElementsByTagName('li');

	var ui_hotelList_content= ui_hotelPicker_wrapper.getElementsByClassName('ui-hotelList_content')[0];
	var ui_hotelList_contentList = ui_hotelList_content.getElementsByClassName('ui-tab_list');

	var ui_head_width = 0;
	for(var i = 0;i<ui_hotelList_headList.length;i++){
		ui_hotelList_headList[i].setAttribute('data-index',i);
		ui_head_width += ui_hotelList_headList[i].clientWidth;

		ui_hotelList_contentList[i].style.display = 'none';

		if(i == hotelCityPicker.target.index){
			ui_hotelList_headList[i].classList.add('cur');
			ui_hotelList_contentList[i].style.display = 'block';
		}
	}

	ui_hotelPicker.style.width = ui_head_width + 35 + 'px';

	// ui_hotelPicker_wrapper.addEventListener('click',function(e){
	// 	e.preventDefault();
	// 	// elem.focus();
	// 	hotelCityPicker.toggleDrop = true;
	// },false);

	ui_hotelList_head.addEventListener('click',function(e){
		var e = e || window.event;
		var target = e.target;

		if(target.nodeName.toLowerCase() == 'li'){
			var index = target.getAttribute('data-index');
			hotelCityPicker.target.index = index;

			for(var i = 0;i<ui_hotelList_headList.length;i++){
				if(ui_hotelList_headList[i].classList.contains('cur')){
					ui_hotelList_headList[i].classList.remove('cur');
					ui_hotelList_contentList[i].style.display = 'none';
				}
				if(i == hotelCityPicker.target.index){
					ui_hotelList_headList[i].classList.add('cur');
					ui_hotelList_contentList[i].style.display = 'block';
				}
				
			}

		}
	},false);

	ui_hotelList_content.addEventListener('click',function(e){
		var e = e||window.event;
		var target = e.target;

		if(target.nodeName.toLowerCase() == 'a'){
			var val = target.innerHTML;
			hotelCityPicker.target.value = val;

			ui_hotelPicker_wrapper.style.display = 'none';

			if(hotelCityPicker.target.getAttribute('data-index')){
				var nextID = document.getElementById(hotelCityPicker.target.dataset.next);
				nextID.focus(); 
			}			
		}else{
			ui_hotelPicker_wrapper.style.display = 'block';
		}
	},false);

	ui_hotelPicker_wrapper.addEventListener('mouseleave',function(e){
		var e = e || window.event;

		if(e.relatedTarget.classList.contains('hotelCity_picker')){
			return;
		}else{
			ui_hotelPicker_wrapper.style.display = 'none';
			elem.blur();
		}

	},false);
	
}

hotelCityPicker.render = function(dataList){
	var html = '<div class="ui-hotelList_title">支持中文/拼音/简拼输入</div>'+
		'<ul class="ui-hotelList_head">';
		for(var key in dataList){
			html += '<li>'+ key +'</li>'
		};
			

	html +=	'</ul>'+
			'<div class="ui-hotelList_content">';

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

	//console.log(dataList)
	//console.log(html,33);

	return html;
}

