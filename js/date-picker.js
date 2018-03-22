// datepicker.target => 选中的input
// datepicker.target.selected => 该input中选中的日期；
// datepicker.target.noClick => 不可以选择的日期 eg:已经过去的时间;入住离开时间要大于入住开始时间;
// monthdata => 当前月的数据
// datepicker.hidden() => 隐藏datepicker

var date_picker = document.getElementsByClassName('datepicker');
// console.log(date_picker);

for(var i = 0;i<date_picker.length;i++){
	bind(date_picker[i],'focus',function(e){
		// console.log(this);
		// console.log(this);
		var e = e || window.event;
		var target = e.target || e.srcElement;
		// console.log(target);
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var top = target.getBoundingClientRect().top + scrollTop;
		var left = target.getBoundingClientRect().left;
		console.log(top);
		// var top = target.clientTop;
		// var left = target.clientLeft;
		// console.log(top);
		// console.log(document.body.scrollTop);
	  //	console.log(left);
		var W = target.offsetWidth;
		var H = target.offsetHeight;
		// console.log(target);
		// if(target.value != ''){
		// 	var val = target.value;
		// 	console.log(val);
		// 	datepicker.select.month = val.slice(5,7);
		// 	datepicker.select.date = val.slice(8,10);
			// console.log(datepicker.select.month);
			// console.log(datepicker.select.date);
		// }
		// console.log(1);
		datepicker.target = target;
		if(target.getAttribute('data-prve')){
			var val = document.getElementById(target.dataset.prev).value;
			if(val){
				datepicker.target.noClick = Number(val.slice(8,10)) +1;
				if(!datepicker.target.selected){
					datepicker.target.selected = {};
					datepicker.target.selected.date = 1+ Number(val.slice(8,10));
					// console.log(datepicker.target.selected.date);
					datepicker.target.selected.month = val.slice(5,7);
					
				}
			}else{
				datepicker.target.noClick = '';
			}

			// console.log(datepicker.target.noClick);

		}
		// console.log(datepicker.target.selectedbind();
		// target,'mouseenter',function(e){
		// 	console.log(e);
		// 	if(this.onfocus){
		// 		this.focus();
		// 	}
		// },false);
		var datepicker_wrapper = document.querySelector('.ui-datepicker-wrapper');
		// console.log(datepicker_wrapper);
		datepicker.init();
		if(!datepicker_wrapper){
			
			var datepicker_wrapper = document.querySelector('.ui-datepicker-wrapper');
		}else{
			datepicker_wrapper.style.display = 'block';
		}



		datepicker_wrapper.style.left = left+ W/2 + 'px';
		datepicker_wrapper.style.top = top + H -1+ 'px';

		
	}); 
		
	bind(date_picker[i],'mouseleave',function(e){
		var datepicker_wrapper = document.querySelector('.ui-datepicker-wrapper');
		if(!datepicker_wrapper){
			return;
		}
		var datepicker_inner = datepicker_wrapper.querySelector('.ui-date-picker');

		// console.log(e.relatedTarget)
		if(e.relatedTarget.classList.contains('datepicker-layer') || e.relatedTarget.parentNode.parentNode.classList.contains('datepicker-layer')){
			return;
		}else{
			datepicker.hidden();
			this.blur();
		}
		// console.log(this);
			
	},false);
}
// datepicker.init();
(function(){
	var datepicker = {};
	var monthdata;
	datepicker.getMonthData = function(year, month){
		var ret = [];
		var today = new Date();
		if(!year || !month){
			
				year = today.getFullYear();
			if(!datepicker.target.selected){
				month = today.getMonth() + 1;

				datepicker.target.selected = {};
				datepicker.target.selected.date = today.getDate();
				datepicker.target.selected.month = today.getMonth() + 1;
			}else{
				month = datepicker.target.selected.month;
			}
			
		}
		if(!datepicker.target.noClick){
			datepicker.target.noClick = today.getDate();
		}

		// console.log(datepicker.target.selected.month);

		var firstDay = new Date(year, month-1 , 1);

		var firstDayWeekDay = firstDay.getDay();

		var year = firstDay.getFullYear();
		var month = firstDay.getMonth() + 1;

		var lastDay = new Date(year,month,0);

		var lastDate = lastDay.getDate();

		for(var i =0;i<7*6;i++){
			var date = i + 1 - firstDayWeekDay;
			var showDate = date;

			if(0<date && date<lastDate){
				showDate = date;
			}else{
				showDate = 0;
			}

			ret.push({
				month:month,
				date:date,
				showDate:showDate
			});
		}

		return {
			year:year,
			month:month,
			days:ret
		}
	}

	window.datepicker = datepicker;
})();

datepicker.renderDatepicker = function(year,month){

	monthdata = datepicker.getMonthData(year,month);
	// console.log(monthdata)

	var html = '<div class="ui-date-picker datepicker-layer">'+
			'<div class="ui-date-picker-header datepicker-layer">'+
				'<a href="#" class="ui-date-picker-left-btn prev">&lt;</a>'+
				'<div class="ui-date-picker-now">' + 
					monthdata.year +'年'+
					'&nbsp' +
					monthdata.month +'月'+
				'</div>'+
				'<a href="#" class="ui-date-picker-right-btn next">&gt;</a>'+
			'</div>'+
			'<table class="ui-date-picker-content" cellspacing="0">'+
				'<thead class="ui-date-picker-head">'+
					'<tr class="ui-date-picker-week">'+
						'<th>日</th>'+
						'<th>一</th>'+
						'<th>二</th>'+
						'<th>三</th>'+
						'<th>四</th>'+
						'<th>五</th>'+
						'<th>六</th>'+
					'</tr>'+
				'</thead>'+
				'<tbody class="ui-date-picker-body">'

				for(var i=0;i<monthdata.days.length;i++){
					var date = monthdata.days[i];
					// console.log(datepicker.target.selected.month);
					// console.log(datepicker.target.noClick);
					
					if(i%7 === 0){
						html += '<tr>';
					}
					if(date.showDate == 0){
						html += '<td class="no-click"></td>';
					}else if(date.showDate < datepicker.target.noClick && monthdata.month == datepicker.target.selected.month){
						html += '<td class="no-click">'+ date.showDate + '</td>';
					}else if(date.showDate == datepicker.target.selected.date && monthdata.month == datepicker.target.selected.month){
						html += '<td class="selected can-click" data-date = '+date.showDate+'>'+ date.showDate + '</td>';
					}else{
						html += '<td class="can-click" data-date = '+date.showDate+'>'+ date.showDate + '</td>';
					}
					
					if(i%7 === 6){
						html += '</tr>'
					}
				}
			html += '</tbody>'+
					'</table>'+
				'</div>';	
			
			return html;
}

datepicker.render = function(year,month){
	// if(!year || !month){

	// }
	var datepicker_wrapper = document.querySelector('.ui-datepicker-wrapper');
	if(!datepicker_wrapper){
		var html = datepicker.renderDatepicker();
		var datepicker_wrapper = document.createElement('div');
			datepicker_wrapper.className = 'ui-datepicker-wrapper'
		 	datepicker_wrapper.innerHTML = html;
		 	document.body.appendChild(datepicker_wrapper);
	}else{
		var html = datepicker.renderDatepicker(year,month);
		datepicker_wrapper.innerHTML = html;
	}
	// console.log(monthdata.month);
	
}

datepicker.init = function(){
	// console.log(111);
	datepicker.render();

	var datepicker_wrapper = document.querySelector('.ui-datepicker-wrapper');
	// console.log(datepicker_wrapper);

	datepicker_wrapper.style.display = 'block';

	// datebind(picker_wrapper,'mouseenter',function(e){
	// 	datepicker.target.focus();
	// 	this.style.display = 'block';
	// },false);

	datepicker_wrapper.onclick = function(e){
		var e = e || window.event;
		var target = e.target;

		// console.log(target);

		if(target.nodeName.toLowerCase() == 'a'){
			e.preventDefault();
			//var nowMonth = new Date().getMonth()+1;
			
			if(target.classList.contains('prev')){
				// if(monthdata.month-1 == nowMonth){
				// 	datepicker.target.selected = null;
				// }else{
				// 	datepicker.target.selected = 0;
				// }
				datepicker.render(monthdata.year,monthdata.month-1);

			}else if(target.classList.contains('next')){
				// if(monthdata.month+1 == nowMonth){
				// 	datepicker.target.selected = null;
				// }else{
				// 	datepicker.target.selected = 0;
				// }
				datepicker.render(monthdata.year,monthdata.month+1);
			}
		}

		if(target.nodeName.toLowerCase() == 'td'){
			// console.log(target.innerHTMl);
			// console.log(target);
			if(target.classList.contains('can-click')){
				 // = target.innerHTML;
				// console.log(target.innerHTML);
				// console.log(target.dataset.date);
				// console.log(datepicker.target.selected);
				// datepicker.target.selected = {};
				datepicker.target.selected.date = target.getAttribute('data-date');
				datepicker.target.selected.month = monthdata.month;
				datepicker.target.value = monthdata.year + '-' + toTwo(datepicker.target.selected.month) + '-' + toTwo(datepicker.target.selected.date);
				if(datepicker.target.classList.contains('short-datepicker')){
					console.log(2424);
					datepicker.target.value = toTwo(monthdata.year) + '/' + toTwo(datepicker.target.selected.month) + '/' + toTwo(datepicker.target.selected.date);
				}
				// datepicker.target.dispatchEvent('input');
				// datepicker.init();
				// console.log(datepicker.target.nextInput);
				
				var td = datepicker_wrapper.getElementsByTagName('td');
				for(var i=0;i<td.length;i++){
					if(td[i].classList.contains('selected')){
						td[i].classList.remove('selected');
					}
					
				}
				target.classList.add('selected');
				datepicker_wrapper.style.display = 'none';

				if(datepicker.target.getAttribute('data-next')){
					var nextId = datepicker.target.dataset.next;
					var next = document.getElementById(nextId);
					next.focus();
				}
			}else{
				return ;
			}
		}
	};

	function toTwo(val){
		if(val <= 9){
			val = '0' + val;
		}else if(val > 100){
			val = val.toString().slice(2);
		}
		return val;
	}

	bind(datepicker_wrapper,'mouseleave',function(e){
		if(e.relatedTarget == datepicker.target){
			return;
		}
		datepicker.target.blur();
		this.style.display = 'none';
	},false);
}

datepicker.hidden = function(){
	var datepicker_wrapper = document.querySelector('.ui-datepicker-wrapper');
	datepicker_wrapper.style.display = 'none';
}








 //    datepicker.target.selected = function(val){
 //    	var selected;
 //    	if(!val){
 //    		selected = new Date().getDate();
 //    	}else{
 //    		selected = val;
 //    	}

 //    	return selected;
	// }
	