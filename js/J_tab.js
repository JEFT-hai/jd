
	var tab_news = document.getElementsByClassName('tab_news')[0];
	var tab_head = tab_news.getElementsByClassName('tab_head')[0];
	
	tab_head.onmouseover = function(e){
		var e = e || window.event;
		var target = e.target;

		var tab_active = this.getElementsByClassName('tab_head_active')[0];
		var tab_head_item = this.getElementsByClassName('tab_head_item')[0];
		var tab_content = tab_news.getElementsByClassName('tab_content')[0];

		if(target.className.indexOf('tab_head_item') > -1){
			var index = target.getAttribute('data-index');

			var X = tab_head_item.offsetWidth*index;

			tab_sub_H_and_S(tab_content,'tab_content_item',index);

			tab_active.style.transform = 'translateX(' +X+'px)';
			tab_active.style.msTransform = 'translateX(' +X+'px)';

		}
	}

	var J_service = document.getElementsByClassName('J_service')[0];
	var service_entry = J_service.getElementsByClassName('service_entry')[0];
	var service_list = service_entry.getElementsByClassName('service_list')[0];

	var s_tab_head_item = service_list.getElementsByClassName('tab_head_item');

	var service_pop = J_service.getElementsByClassName('service_pop')[0];
	var service_pop_item = service_pop.getElementsByClassName('service_pop_item');

	for(var i=0;i<s_tab_head_item.length;i++){
		s_tab_head_item[i].onmouseover = function(){
			if(!J_service.classList.contains('service_expand')){
				J_service.classList.add('service_expand');
			}
			var a = this.getElementsByClassName('service_lk')[0];
			var index = a.getAttribute('data-index');
			subClass_R_and_A(service_list,'li','service_on',index);
			tab_sub_H_and_S(service_pop,'service_pop_item',index);
		}
	}

	// service_pop_close
	var service_pop_close = document.getElementsByClassName('service_pop_close')[0];
	bind(service_pop_close,'click',function(e){
		if(J_service.classList.contains('service_expand')){
				J_service.classList.remove('service_expand');
		}
	});

	

	// service_list.onmouseover = function(e){
	// 	var e = e || window.event;
	// 	var target = e.target;

	// 	// var tab_active = this.getElementsByClassName('tab_head_active')[0];
	// 	// var tab_head_item = this.getElementsByClassName('tab_head_item')[0];
	// 	console.log(1);
	// 	if(target.className.indexOf('tab_head_item') > -1){
	// 		console.log(1);
	// 		var index = target.getAttribute('data-index');

	// 		var X = tab_head_item.offsetWidth*index;

	// 		// console.log(tab_head_item.offsetWidth);

	// 		// console.log(X);
	// 		// subHidden(tab_content,'tab_content_item');
	// 		tab_sub_H_and_S(service_pop,'service_pop_item',index);

	// 		// tab_active.style.transform = 'translateX(' +X+'px)';
	// 		// console.log(1);
	// 	}
	// }

	// function tab_sub_H_and_S(elem,subClass,index){
	// 	var L = elem.getElementsByClassName(subClass);
	// 	for(var i =0,len=L.length;i<len;i++){
	// 		L[i].style.display = 'none';
	// 		if(i == index){
	// 			L[i].style.display = 'block';
	// 		}
	// 	}
	// }

