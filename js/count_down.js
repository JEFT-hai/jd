(function(){
	var now = new Date();

	var now_h = now.getHours();
	var now_m = now.getMinutes();
	var now_s = now.getSeconds();

	var count_h = 5 - now_h%6;
	var count_m = 60 - now_m;
	var count_s = 60 - now_s;

	// console.log(count_h,count_m,count_s);

	var sk_cd_h = document.getElementsByClassName('sk_cd_h')[0];
	var sk_cd_m = document.getElementsByClassName('sk_cd_m')[0];
	var sk_cd_s = document.getElementsByClassName('sk_cd_s')[0];

	function renderCD(val1,val2,val3){
		sk_cd_h.innerHTML = val1;
		sk_cd_m.innerHTML = val2;
		sk_cd_s.innerHTML = val3;
	}
	renderCD(toTwo(count_h),toTwo(count_m),toTwo(count_s));

	function toTwo(val){
		if(Number(val) <= 9){
			val = '0' + val;
		}

		return val;
	}

	var timer;
	timer = setInterval(function(){
		
		if(count_s == 0){
			count_s = 59;
			if(count_m == 0){
				count_m = 59;
				if(count_h == 0){
					count_h = 5;
				}else{
					count_h--;
				}
			}else{
				count_m--;
			}
		}else{
			count_s--;
		}

		renderCD(toTwo(count_h),toTwo(count_m),toTwo(count_s));
	},1000);
})();