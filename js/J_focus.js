
					var J_focus = document.getElementsByClassName('J_focus')[0];
					var focus_list = document.getElementsByClassName('focus_list')[0];
					var focus_prev_btn = document.getElementsByClassName('focus_prev')[0];
					var focus_next_btn = document.getElementsByClassName('focus_next')[0];

					var slider_indicators = document.getElementsByClassName('slider_indicators')[0];
					var isFocus = false;
					var focus_timer;

					function t1(){
						focus_timer = setInterval(function(){
							focus_new(focus_list,NaN,1);
						},4000);
					}
					t1();

					J_focus.onmouseover = function(e){
						clearInterval(focus_timer);
					}

					J_focus.onmouseleave = function(e){
						t1();
					}

					focus_next_btn.onclick = function(e){
						e.preventDefault();
						focus_new(focus_list,NaN,1);
					}

					focus_prev_btn.onclick = function(e){
						e.preventDefault();
						focus_new(focus_list,NaN,-1);
					}
					
					// function control_p_Or_n(elem,val){
					// 	elem.index = elem.index?elem.index:0;

					// 	var L = elem.getElementsByTagName('li');
					// 	var len = L.length;

					// 	fadeOut(L[elem.index]);
					// 	elem.index = (len+val+elem.index)%len;
					// 	// L[elem.index].className = L[elem.index].className.relpace(' fadeOut','');
					// 	fadeIn(L[elem.index]);
					// }

					function focus_new(elem,index,direction){

						if(isFocus){return;}

						elem.index = elem.index?elem.index:0;

						if(elem.index == index){return;}

						var L = elem.getElementsByTagName('li');
						var len = Number(L.length);

						fadeOut(L[elem.index]);

						if(direction){
							if(direction>0){
								elem.index = (direction+elem.index)%len;
							}else{
								elem.index = (len+direction+elem.index)%len;
							}
							
						}else{
							elem.index =  Number(index);
						}

						subClass_R_and_A(slider_indicators,'i','slider_indicators_btn_active',elem.index);
						// addsubClass(slider_indicators,'i',elem.index,' slider_indicators_btn_active');
						fadeIn(L[elem.index]);
						isFocus = true;
						setTimeout(function(){
							isFocus = false;
						},300);
					}
					
					
					slider_indicators.onmouseover = function(e){
						var e = e || window.event;
						var target = e.target;
						
						if(target.nodeName.toLowerCase() == 'i'){

							var index = target.getAttribute('data-index');
							
							focus_new(focus_list,index);
							
						}
					}				

					// function focus_next(elem){
					// 	elem.index = elem.index?elem.index:0;

					// 	var L = elem.getElementsByTagName('li');
					// 	var len = L.length;

					// 	fadeOut(L[elem.index]);
					// 	elem.index = (1+elem.index)%len;
					// 	// L[elem.index].className = L[elem.index].className.relpace(' fadeOut','');
					// 	fadeIn(L[elem.index]);

					// }

					// function focus_prev(elem){
					// 	elem.index = elem.index?elem.index:0;

					// 	var L = elem.getElementsByTagName('li');
					// 	var len = L.length;

					// 	fadeOut(L[elem.index]);
					// 	elem.index = (len-1+elem.index)%len;
					// 	// L[elem.index].className = L[elem.index].className.relpace(' fadeOut','');
					// 	fadeIn(L[elem.index]);

					// }
