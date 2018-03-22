
			function removeTagClass(elem,val,tag){
				var L = elem.getElementsByTagName(tag);
				for(var i =0,len = L.length;i<len;i++){
					L[i].className = L[i].className.replace(val,'');
				}
			}
			function addsubClass(elem,tag,index,val){
				var L = elem.getElementsByTagName(tag);
				L[index].className += val;
			}

			function subClass_R_and_A(elem,tag,val,index){
				var L = elem.getElementsByTagName(tag);
				for(var i =0,len = L.length;i<len;i++){
					L[i].classList.remove(val);
					if(i == index){
						L[i].classList.add(val);
					}
				}
			}


			function subHidden(elem,cla){
				var D = elem.getElementsByClassName(cla);
				for(var i =0,len = D.length;i<len;i++){
					D[i].style.display = 'none';
				}
			}

			function subShow(elem,cla,index){
				var L = elem.getElementsByClassName(cla);
				L[index].style.display = 'block';
			}

			function tab_sub_H_and_S(elem,subClass,index){
				var L = elem.getElementsByClassName(subClass);
				for(var i =0,len=L.length;i<len;i++){
					L[i].style.display = 'none';
					if(i == index){
						L[i].style.display = 'block';
					}
				}
			}

			function removeLiAClass(elem,val){
				var L = elem.getElementsByTagName('li');
				for(var i =0;i<L.length;i++){
					L[i].getElementsByTagName('a')[0].className = L[i].getElementsByTagName('a')[0].className.replace(val,'');
				}
			}

			function fadeOut(elem){
				var timer = setInterval(function(){
					if(!elem.op){elem.op = 1;}
					elem.op -= 0.3;
					elem.style.opacity = elem.op;
					elem.style.zIndex = elem.op;
					if(elem.op <= 0.1){
						elem.style.opacity = 0;
						elem.op = 0;
						elem.style.zIndex = 0;
						clearInterval(timer);
					}
				},40);
			}
			function fadeIn(elem){
				var timer = setInterval(function(){
					if(!elem.op){elem.op = 0;}
					elem.op += 0.3;
					elem.style.opacity = elem.op;
					elem.style.zIndex = elem.op;
					if(elem.op >= 0.9){
						elem.op = 1;
						elem.style.opacity = 1;
						elem.style.zIndex = 1;
						clearInterval(timer);
					}
				},40);
			}

			