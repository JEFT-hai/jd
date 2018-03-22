
var shortcut = document.getElementsByClassName('shortcut')[0];
var dorpdown = document.getElementsByClassName('dorpdown');
for(var i = 0,len = dorpdown.length;i<len;i++){
	dorpdown[i].onmouseenter = function(e){
		this.className += ' hover';
	};
	dorpdown[i].onmouseleave = function(e){
		this.className = this.className.replace(' hover','');
	};
}
var mycity = dorpdown[0].getElementsByClassName('mycity')[0];
var dorpdown_layer = dorpdown[0].getElementsByClassName('dorpdown-layer')[0];

dorpdown_layer.onclick = function(e){
	var e = e || window.event;
	var target = e.target;
	
	removeLiAClass(this,' selected');
	if(target.nodeName.toLowerCase() == 'a'){
		target.className += ' selected';
		mycity.getElementsByTagName('span')[0].innerHTML = target.innerHTML;
		this.style.display = 'none';
	}
}
