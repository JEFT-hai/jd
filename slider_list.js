var slider = document.getElementsByClassName('slider');

var sk_slider_data = [
	{
		img:'jd/slider_item1.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'潘苹果 甘肃天水花牛苹果/蛇果 12个 单果约70mm 简装',
			sk_item_price:{
				sk_item_price_new:'23.70',
				sk_item_price_old:'49.90'
			}
		}
		
	},
	{
		img:'jd/slider_item2.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'360 智能摄像机 云台版 1080P 网络wifi家用监控高清摄像头 红外夜视 双向通话 360度旋转监控 白色',
			sk_item_price:{
				sk_item_price_new:'219.00',
				sk_item_price_old:'299.00'
			}
		}
		
	},
	{
		img:'jd/slider_item3.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'美的（Midea）大尺寸 大面板侧吸式抽油烟机 CXW-180-DJ118',
			sk_item_price:{
				sk_item_price_new:'1189.00',
				sk_item_price_old:'14499.90'
			}
		}
		
	},
	{
		img:'jd/slider_item4.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'福临门 食用油 家香味压榨一级花生油（京东定制）6.18L 中粮出品',
			sk_item_price:{
				sk_item_price_new:'109.90',
				sk_item_price_old:'149.90'
			},
			sk_item_tag:'量贩装'
		}
		
	},
	{
		img:'jd/slider_item5.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'东芝(TOSHIBA) Q200系列 240GB SATA3 固态硬盘',
			sk_item_price:{
				sk_item_price_new:'599.00',
				sk_item_price_old:'699.00'
			}
		}
		
	},
	{
		img:'jd/slider_item6.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'努比亚nubia Z17 无边框 曜石黑 8GB+64GB 全网通 移动联通电信4G手机 双卡双待',
			sk_item_price:{
				sk_item_price_new:'2599.00',
				sk_item_price_old:'2799.00'
			}
		}
		
	},
	{
		img:'jd/slider_item7.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'闪迪（SanDisk）A1 128GB 读速100MB/s 至尊高速移动MicroSDXC UHS-I存储卡 TF卡',
			sk_item_price:{
				sk_item_price_new:'238.00',
				sk_item_price_old:'299.00'
			}
		}
		
	},
	{
		img:'jd/slider_item8.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'好奇 Huggies 铂金装 纸尿裤 M126+10片 中号尿不湿【6-11kg】（新老包装随机发货）',
			sk_item_price:{
				sk_item_price_new:'202.90',
				sk_item_price_old:'269.90'
			},
			sk_item_tag:'量贩装'
		}
		
	},
	{
		img:'jd/slider_item9.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'金龙鱼 食用油 原料欧洲进口 物理压榨 阳光葵花籽油5L+送400ml',
			sk_item_price:{
				sk_item_price_new:'69.80',
				sk_item_price_old:'85.90'
			}
		}
		
	},
	{
		img:'jd/slider_item10.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'良品铺子 京致年货礼盒 干果坚果 零食大礼包 14袋装 送礼  混合套餐 1571g',
			sk_item_price:{
				sk_item_price_new:'79.00',
				sk_item_price_old:'128.00'
			}
		}
		
	},
	{
		img:'jd/slider_item11.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'风行(FunTV) G65Y-T 65英寸 4K超高清 8G+64位芯片 秒播 BesTV海量内容 超窄边框网络智能WIFI平板液晶互联网电视（金色）',
			sk_item_price:{
				sk_item_price_new:'3787.00',
				sk_item_price_old:'5599.90'
			}
		}
		
	},
	{
		img:'jd/slider_item12.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'秋叶原（CHOSEAL）原装超五类网线 非屏蔽 纯铜线芯 高速网线 工程家装专用箱线 灰色 305米 QS2608AT305S',
			sk_item_price:{
				sk_item_price_new:'389.00',
				sk_item_price_old:'459.00'
			},
			sk_item_tag:'量贩装'
		}
		
	},
	{
		img:'jd/slider_item13.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'澳纽宝 手工调理牛排套餐 10片装（西冷*3、眼肉*3、板腱*3、T骨*1） 1620g/套 原切牛排 含安佳黄油',
			sk_item_price:{
				sk_item_price_new:'199.00',
				sk_item_price_old:'259.00'
			}
		}
		
	},
	{
		img:'jd/slider_item14.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'舒洁（Kleenex）湿厕纸 40片10包装 私处清洁湿纸巾湿巾 可搭配卷纸卫生纸使用',
			sk_item_price:{
				sk_item_price_new:'81.80',
				sk_item_price_old:'88.90'
			}
		}
		
	},
	{
		img:'jd/slider_item15.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'林内（Rinnai）13升智能精控恒温 CO安防 燃气热水器 RUS-13E22CWNF（天然气） (JSQ26-22C)',
			sk_item_price:{
				sk_item_price_new:'2799.00',
				sk_item_price_old:'3880.00'
			}
		}
		
	},
	{
		img:'jd/slider_item16.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'芝华士（Chivas）洋酒 12年 苏格兰威士忌 1000ml',
			sk_item_price:{
				sk_item_price_new:'199.90',
				sk_item_price_old:'299.90'
			}
		}
		
	},
	{
		img:'jd/slider_item17.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'鑫宝鹭 擦玻璃器双层中空双面擦窗高楼清洁器擦玻璃神器家用搽洗窗户刷刮 升级款U型杆+擦头',
			sk_item_price:{
				sk_item_price_new:'69.00',
				sk_item_price_old:'139.90'
			}
		}
		
	},
	{
		img:'jd/slider_item18.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'扬子（YAIR）3匹 一级能效 变频 智能 无氟环保 冷暖 纯圆柱空调柜机 KFRd-72LW/(72W1902)-A1(B)',
			sk_item_price:{
				sk_item_price_new:'5499.00',
				sk_item_price_old:'6599.00'
			}
		}
		
	},
	{
		img:'jd/slider_item19.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'Anker安克原装正品 新iphone专用无线充电器苹果手机精美小巧 适iPhone8Plus/X/三星note8/S7edge/S8 黑',
			sk_item_price:{
				sk_item_price_new:'99.00',
				sk_item_price_old:'128.00'
			}
		}
		
	},
	{
		img:'jd/slider_item20.jpg!q90.webp.jpg',
		text:{
			sk_item_name:'南极人（Nanjiren）男士内裤4条平角内裤男95%棉透气中腰短裤男式内裤XL(175/100)',
			sk_item_price:{
				sk_item_price_new:'39.90',
				sk_item_price_old:'69.90'
			},
			sk_item_tag:'量贩装'
		}
		
	}
	// ,
	// {
	// 	img:'jd/slider_item4.jpg!q90.webp.jpg',
	// 	text:{
	// 		sk_item_name:'潘苹果 甘肃天水花牛苹果/蛇果 12个 单果约70mm 简装',
	// 		sk_item_price:{
	// 			sk_item_price_new:23.70,
	// 			sk_item_price_old:49.90
	// 		}
	// 	}
		
	// },
	// {
	// 	img:'jd/slider_item2.jpg!q90.webp.jpg',
	// 	text:{
	// 		sk_item_name:'360 智能摄像机 云台版 1080P 网络wifi家用监控高清摄像头 红外夜视 双向通话 360度旋转监控 白色',
	// 		sk_item_price:{
	// 			sk_item_price_new:219.00,
	// 			sk_item_price_old:299.00
	// 		}
	// 	}
		
	// },
	// {
	// 	img:'jd/slider_item3.jpg!q90.webp.jpg',
	// 	text:{
	// 		sk_item_name:'美的（Midea）大尺寸 大面板侧吸式抽油烟机 CXW-180-DJ118',
	// 		sk_item_price:{
	// 			sk_item_price_new:1189.00,
	// 			sk_item_price_old:14499.90
	// 		}
	// 	}
		
	// },
	// {
	// 	img:'jd/slider_item4.jpg!q90.webp.jpg',
	// 	text:{
	// 		sk_item_name:'福临门 食用油 家香味压榨一级花生油（京东定制）6.18L 中粮出品',
	// 		sk_item_price:{
	// 			sk_item_price_new:109.90,
	// 			sk_item_price_old:149.90
	// 		},
	// 		sk_item_tag:'量贩装'
	// 	}
		
	// }
];

var slider_daily_data = [
	{img1:'jd/slider_daily_1_1.jpg!q90!cc_350x300.webp.jpg',img2:'jd/slider_daily_1_2.jpg!q90',img3:'jd/slider_daily_1_3.jpg!q90',img4:'jd/slider_daily_1_4.jpg!q90',tit:'别错过，一年中肥美的小龙虾都在七月份',subtit:'每年夏天的7、8月份正是豪吃小龙虾的大好时节，因为这个时候是小龙虾的盛产之时，也正是小龙虾最为肥美的时候，所以爱吃小龙虾的你一定不要错过了吃小龙虾的大好时机。就算你生在内陆，也能在网络购买到江苏盱眙，湖北潜江等正宗原产地的小龙虾。 让你一尝这季节性的美味。'},
	{img1:'jd/slider_daily_2_1.jpg!q90!cc_350x300.webp.jpg',img2:'jd/slider_daily_2_2.jpg!q90',img3:'jd/slider_daily_2_3.jpg!q90',img4:'jd/slider_daily_2_4.jpg!q90',tit:'冬日养生要对口，鲜嫩羊肉更滋补',subtit:'天气变冷后，就想吃各种能让身体暖呼呼的食物。在南方冬天就有吃羊肉汤锅的习惯，这是因为羊肉对暖身子特别有作用。不管是火锅的时候来上一盘羊肉卷涮着吃，还是平时自己下厨炒上一盘精制的孜然羊肉，又或者周末的时候炖上一锅滋补力十足的羊肉汤.....多食这些对口的滋补食材，让你暖意十足过冬天。'},
	{img1:'jd/slider_daily_3_1.jpg!q90!cc_350x300.webp.jpg',img2:'jd/slider_daily_3_2.jpg!q90',img3:'jd/slider_daily_3_3.jpg!q90',img4:'jd/slider_daily_3_4.jpg!q90',tit:'周末做顿大餐，美味肉类备起来',subtit:'【现货】金鹏 鲜活乳山生蚝 2.5kg XXL(120(含)-150g(不含))',subtit:'美食有着一种让人无法抗拒的魅力，不仅满足口腹之欲，更是给人带来幸福感。结束了一周忙碌的工作，到了周末不妨用美食好好犒劳下自己或家人。肉类食物是餐桌上常见的菜肴，尤其是冬天，身体需要大量的热量，才可以更好地抵抗寒冷，因此肉类食物是不可缺少的。下面推荐一组肉类食材，有牛肉、羊肉、猪肉，值得备上一些。'}
];

var slider_mime_data = [
	{img:'jd/slider_mime_1.jpg!q90!cc_350x250.webp.jpg',name:'苹果员工屁股下的办公椅, 比你的iPhone X还贵',desc:'国外不少科技公司都很注重屁股下面的那张椅子。'},
	{img:'jd/slider_mime_2.jpg!q90!cc_350x250.webp.jpg',name:'妈妈的朋友圈01呵呵回东北过年了！安全回家必备好物',desc:'快过春节了，小雷和婉婉商量，今年过年想带呵呵去爷爷奶奶家过年，虽然婉婉心中有诸多顾虑，但还是先答应了下来，因为呵呵1岁半了，还没去过北方过过年。于是，接下来的几天，婉婉都沉浸在各种即将要回那个印象中寒冷、干燥、每天要接待无穷无尽的长辈，以及各种大鱼大肉的老家的无尽担忧中，愁得都睡不着觉。婉婉在即将要出发的前一周发了四条关于即将带孩子回老家担忧和问询的朋友圈，想寻求周围朋友的帮助以及同情，但主要还是宣泄自己的情绪。于是有了下面这些事……'},
	{img:'jd/slider_mime_3.jpg!q90!cc_350x250.webp.jpg',name:'你绝对不能错过的十款MUJI 精选单品',desc:'Hello 大家好'}
];

var top_slider_data = [
		[
			{img:'jd/top_slider_1_1.jpg!q90.webp.jpg',index:1,name:'【现货】金鹏 鲜活乳山生蚝 2.5kg XXL(120(含)-150g(不含))'},
			{img:'jd/top_slider_1_2.jpg!q90.webp.jpg',index:2,name:'Ωmega 原装进口熟冻新西兰全壳青口贝 1.15kg 23-24只 袋装 火锅食材 海鲜水产'},
			{img:'jd/top_slider_1_3.jpg!q90.webp.jpg',index:3,name:'美加佳 冷冻美国加州笔管鱿鱼 300g 袋装 火锅食材'},
			{img:'jd/top_slider_1_4.jpg!q90.webp.jpg',index:4,name:'禧美 熟冻加拿大北极甜虾 无黑头 500g/袋 50-55只'},
			{img:'jd/top_slider_1_5.jpg!q90.webp.jpg',index:5,name:'獐子岛 冷冻海螺肉片120g 火锅食材 烧烤食材'},
			{img:'jd/top_slider_1_6.jpg!q90.webp.jpg',index:6,name:'【礼券】阳澄联合海鲜礼盒大礼包 3088型海鲜礼券礼品卡10种食材'}
		],
		[
			{img:'jd/top_slider_2_1.jpg!q90.webp.jpg',index:1,name:'盐池滩羊 排肉搭档 800g/袋（羊排寸排+羊后腿肉）煲汤食材'},
			{img:'jd/top_slider_2_2.jpg!q90.webp.jpg',index:2,name:'科尔沁 内蒙古牛肉 筋头巴脑500g/袋'},
			{img:'jd/top_slider_2_3.png!q90.webp',index:3,name:'恒都 澳洲精修牛腩块 1kg/袋 草饲牛肉'},
			{img:'jd/top_slider_2_4.jpg!q90.webp.jpg',index:4,name:'恒都 羔羊排 1.2kg/袋 烧烤食材'},
			{img:'jd/top_slider_2_5.jpg!q90.webp.jpg',index:5,name:'伊赛 牛脊骨肉段 700g 谷饲 清真牛肉 火锅食材'},
			{img:'jd/top_slider_2_6.jpg!q90.webp.jpg',index:6,name:'上海名牌  元盛  澳洲雪花西冷牛排 170g/单片 礼盒装 秘制调味  王品牛排供应商'}
		],
		[
			{img:'jd/top_slider_3_1.jpg!q90.webp.jpg',index:1,name:'泰国进口 休闲零食 小老板 调味海苔 脆紫菜 辣味 32g/袋（新老包装随机发货）'},
			{img:'jd/top_slider_3_2.jpg!q90.webp.jpg',index:2,name:'葡韵手信 澳门特产 休闲零食 俄罗斯曲奇180g'},
			{img:'jd/top_slider_3_3.jpg!q90.webp.jpg',index:3,name:'泰国进口 克恩兹原味香脆椰子片40g'},
			{img:'jd/top_slider_3_4.jpg!q90.webp.jpg',index:4,name:'Zek zek超级辣鸡味马铃薯片 韩国进口零食 火鸡非油炸非膨化食品60g'},
			{img:'jd/top_slider_3_5.jpg!q90.webp.jpg',index:5,name:'葡韵手信 澳门特产 休闲零食 传统糕点小吃 千层酥150g'},
			{img:'jd/top_slider_3_6.jpg!q90.webp.jpg',index:6,name:'泰国进口 休闲零食 小老板 调味海苔 脆紫菜 泰式咖喱蟹味 32g/袋（新老包装随机发货）'}
		],
		[
			{img:'jd/top_slider_4_1.jpg!q90.webp.jpg',index:1,name:'美的(Midea)143升 家用冰柜 冷藏冷冻转换冷柜 一级能耗 大冷冻力(妙趣金)BD/BC-143KM(E)'},
			{img:'jd/top_slider_4_2.jpg!q90.webp.jpg',index:2,name:'小天鹅 LittleSwan 8公斤变频全自动波轮洗衣机 360度喷瀑水流 智能三水位 TB80V21D'},
			{img:'jd/top_slider_4_3.jpg!q90.webp.jpg',index:3,name:'海尔（Haier)8公斤直驱变频静音全自动波轮洗衣机 智能模糊控制 特色牛仔洗 XQB80-BM21JD'},
			{img:'jd/top_slider_4_4.jpg!q90.webp.jpg',index:4,name:'小米（MI）小米电视4 L55M5-AB 55英寸 2GB+8GB 4.9mm超薄 4K超高清智能液晶平板电视机（黑色）'},
			{img:'jd/top_slider_4_5.jpg!q90.webp.jpg',index:5,name:'暴风 AI电视4 50英寸人工智能语音全高清超薄互联网平板液晶显示网络电视机wifi 50AI4A'},
			{img:'jd/top_slider_4_6.jpg!q90.webp.jpg',index:6,name:'海尔（Haier)8公斤变频滚筒洗衣机 京东微联智能APP控制 EG8012B39SU1'}
		],
		[
			{img:'jd/top_slider_5_1.jpg!q90.webp.jpg',index:1,name:'小米MIX2 全面屏游戏手机 8GB+128GB 全陶瓷尊享版 黑色 全网通4G手机 双卡双待'},
			{img:'jd/top_slider_5_2.jpg!q90.webp.jpg',index:2,name:'【白条】Apple iPhone 8 Plus (A1864) 64GB 银色 移动联通电信4G手机'},
			{img:'jd/top_slider_5_3.jpg!q90.webp.jpg',index:3,name:'小米 红米Note5A 全网通版 4GB+64GB 铂银灰 移动联通电信4G手机 双卡双待'},
			{img:'jd/top_slider_5_4.jpg!q90.webp.jpg',index:4,name:'荣耀 V10 高配版 6GB+64GB 沙滩金 移动联通电信4G全面屏游戏手机 双卡双待'},
			{img:'jd/top_slider_5_5.jpg!q90.webp.jpg',index:5,name:'飞利浦（PHILIPS） E106 烈焰红 环保材质 防尘防滑 直板按键 移动联通2G 双卡双待 老人手机 学生备用功能机'},
			{img:'jd/top_slider_5_6.jpg!q90.webp.jpg',index:6,name:'【保险套餐版】Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机'}
		]
];

var slider_coupon_data = [
	{img:'jd/slider_coupon_1.jpg!q90!cc_70x70.webp.jpg',price:400,limit:'满799元可用',desc:'购买富安娜家纺指定商品【富安娜神券日】'},
	{img:'jd/slider_coupon_2.jpg!q90!cc_70x70.webp.jpg',price:100,limit:'满1399元可用',desc:'【小米盛典】【小米Note3 6+64G券后1999】'},
	{img:'jd/slider_coupon_3.jpg!q90!cc_70x70.webp.jpg',price:120,limit:'满199元可用',desc:'雅叔旗舰店'},
	{img:'jd/slider_coupon_4.jpg!q90!cc_70x70.webp.jpg',price:10,limit:'满0元可用',desc:'【自营】海信冰洗部分商品'},
	{img:'jd/slider_coupon_5.jpg!q90!cc_70x70.webp.jpg',price:80,limit:'满799元可用',desc:'PMAO官方旗舰店'},
	{img:'jd/slider_coupon_6.jpg!q90!cc_70x70.webp.jpg',price:100,limit:'满199元可用',desc:'购买富安娜家纺指定商品【富安娜神券日】'}
];

var slider_special_data = [
	{tit:'司法拍卖',subtit:'法院好货 公开抢拍',img:'jd/slider_special_1.jpg!q90!cc_350x250'},
	{tit:'白条商城',subtit:'最高12期免费',img:'jd/slider_special_2.jpg!q90!cc_350x250'},
	{tit:'京东金融',subtit:'会理财 懂生活',img:'jd/slider_special_3.jpg!q90!cc_350x250'},

	{tit:'京东扶贫',subtit:'买特产 助扶贫',img:'jd/slider_special_4.jpg!q90!cc_350x250'},
	{tit:'企业采购',subtit:'新用户下单送E卡',img:'jd/slider_special_5.jpg!q90!cc_350x250'},
	{tit:'陪伴宝宝',subtit:'特价低至9.9',img:'jd/slider_special_6.jpg!q90!cc_350x250'},

	{tit:'健康服务',subtit:'体验惠健康',img:'jd/slider_special_7.jpg!q90!cc_350x250'},
	{tit:'京东旅行',subtit:'春运免费光速抢火车票',img:'jd/slider_special_8.jpg!q90!cc_350x250'},
	{tit:'品牌特卖',subtit:'品牌限时特卖',img:'jd/slider_special_9.jpg!q90!cc_350x250'},

	{tit:'全球尖货',subtit:'全球自营好货',img:'jd/slider_special_10.jpg!q90!cc_350x250'},
	{tit:'设计师推荐',subtit:'全球设计精选',img:'jd/slider_special_11.jpg!q90!cc_350x250'},
	{tit:'环球时尚',subtit:'环球名品,奢华精选',img:'jd/slider_special_12.jpg!q90!cc_350x250'},
]
// jpg!q90!cc_70x70.webp



function appendTopList(ele,index,len,dataList){
	var slider_item = ele.getElementsByClassName('slider_item');
	// slider_item[0];
	var html = '';

	for(var i=index*len;i<index*len+len;i++){
		if(slider_item[index].innerHTML != ''){
			return;
		}
		html += '<div class="top_item">';

		html += '<a class="top_item_lk" href="javascript:;">'+
					'<div class="lazyimg lazyimg_loaded top_item_img">'+
						'<img src="'+dataList[i].img+'"class="lazyimg_img"></div>'+
						'<span class="top_item_rank top_item_rank_'+(i+1)+'">'+dataList[i].index+'</span>'+
						'<span class="top_item_name">'+dataList[i].name+'</span>'+
				'</a>'

		html += '</div>';
	}

	if(slider_item[index].innerHTML == ''){
		slider_item[index].innerHTML = html;
	}
	
	
}

function renderSlider(elem,len,num,allNum,btn,indi,lk){
	var html = '';
	if(btn){
		html += '<button class="slider_control slider_control_prev">'+
					'<i class="icon-if_icon-ios7-arrow-left_211689"></i>'+
				'</button>';
	}
	

	html += '<div class="slider_list" style="overflow: hidden;">'

		

	if(btn){
		html += '<div class="slider_wrapper" style="opacity:1;width:'+(allNum/num + 2)*len+'px;transform:translate('+(-len)+'px,0);-ms-transform:translate('+(-len)+'px,0);transition:none">';
		for(var i = -num;i<allNum+num;i++){
			if(lk){
				html+= '<a data-index="'+i+'" href="javascript:;" class="slider_item '+lk+'" style="float: left; width:'+(len/num)+'px;"></a>';
			}else{
				html+= '<div data-index="'+i+'" class="slider_item" style="float: left; width:'+(len/num)+'px;"></div>';
			}
		}
	}else if(indi){
		html += '<div class="slider_wrapper" style="opacity:1;width:'+(allNum/num)*len+'px;transform:translate(0,0);-ms-transform:translate(0,0);transition:none">';
		for(var i = 0;i<allNum;i++){
			html+= '<div data-index="'+i+'" class="slider_item" style="float: left; width:'+(len/num)+'px;"></div>';
		}
	}		
		html += '</div>'
	html += '</div>'
	
	if(btn){
		html += '<button class="slider_control slider_control_next">'+
					'<i class="icon-if_icon-ios7-arrow-right_211607"></i>'+
				'</button>';
	}

	if(indi){
		html += '<div class="slider_indicators">';

		html += '<i data-index="0" class="slider_indicators_btn slider_indicators_btn_active"></i>';
		for(var i =1;i<allNum;i++){
			html += '<i data-index="'+i+'" class="slider_indicators_btn"></i>';
		}
								
		html += '</div>';
	}	

	elem.innerHTML = html;

	if(btn){
		var slider_control_prev = elem.querySelector('.slider_control_prev');
		var slider_control_next = elem.querySelector('.slider_control_next');
		var slider_wrapper = elem.querySelector('.slider_wrapper');
		slider_control_next.addEventListener('click',function(e){
			if(elem.index == undefined){
				elem.index = 0;
			}
			elem.index  = elem.index + 1;

			slider_wrapper.style.transform = 'translate('+(-elem.index-1)*len+'px,0)';
			slider_wrapper.style.transition = 'all 0.5s ease-in-out';
			if(elem.index == (allNum/num)){
				elem.index = 0;
				setTimeout(function(){
					slider_wrapper.style.transform = 'translate('+(-1)*len+'px,0)';
					slider_wrapper.style.transition = 'none';
					// if(indi){
					// 	subClass_R_and_A(slider_i,'i','slider_indicators_btn_active',elem.index);
					// }
				},500);
			}
			
			appendList(elem,'sk_',(elem.index+1)*num,num);
			if(indi){
				subClass_R_and_A(slider_i,'i','slider_indicators_btn_active',elem.index);
			}
		},false);
		slider_control_prev.addEventListener('click',function(e){
			if(!elem.index){
				elem.index = 0;
			}
			elem.index  = elem.index - 1;

			slider_wrapper.style.transform = 'translate('+(-elem.index-1)*len+'px,0)';
			slider_wrapper.style.transition = 'all 0.5s ease-in-out';

			if(elem.index < 0){
				elem.index = (allNum/num-1);
				setTimeout(function(){
					slider_wrapper.style.transform = 'translate('+(-elem.index-1)*len+'px,0)';
					slider_wrapper.style.transition = 'none';
					appendList(elem,'sk_',(elem.index+1)*num,num);
					// if(indi){
					// 	subClass_R_and_A(slider_i,'i','slider_indicators_btn_active',elem.index);
					// }
				},500);
			}
			appendList(elem,'sk_',(elem.index+1)*num,num);
			if(indi){
				subClass_R_and_A(slider_i,'i','slider_indicators_btn_active',elem.index);
			}
		},false);
	}

	if(indi){
		var slider_w = elem.querySelector('.slider_wrapper');
		var slider_i = elem.querySelector('.slider_indicators');
		var slider_i_width = slider_i.offsetWidth;
		slider_i.style.marginLeft = (-slider_i_width/2)+'px';
		slider_i.addEventListener('mouseover',function(e){
			var e = e ||window.event;
			var target = e.target;

			if(target.nodeName.toLowerCase() == 'i'){
				var index = Number(target.getAttribute('data-index') || target.dataset.index);
				elem.index = index;

				if(btn){
					slider_w.style.transform = 'translate('+(-(index + num)*len)+'px,0)';
					slider_w.style.transition = 'all 0.5s ease-in-out';
				}else{
					slider_w.style.transform = 'translate('+(-index*len)+'px,0)';
					slider_w.style.transition = 'all 0.5s ease-in-out';

					var i = Number(this.parentNode.getAttribute('data-index'));
					appendTopList(elem,1,3,top_slider_data[i]);
				}

				subClass_R_and_A(slider_i,'i','slider_indicators_btn_active',index);
				
			}
		})
	}
	
}

var top_wrapper = document.getElementsByClassName('top_wrapper');

for(var i = 0;i<top_wrapper.length;i++){
	// var slider_indicators = [];
	// var slider_wrap = [];
	var len = top_wrapper[0].offsetWidth;
	renderSlider(top_wrapper[i],len,1,2,false,true);
	appendTopList(top_wrapper[i],0,3,top_slider_data[i]);
	
}

for(var i =0;i<slider.length;i++){
	if(slider[i].classList.contains('sk_list_inner')){
		var len = slider[i].offsetWidth;
		var x = len;
		var num = 4;
		var allNum = 20;
		renderSlider(slider[i],x,num,allNum,true,false);
		var slider_wrapper = slider[i].getElementsByClassName('slider_wrapper')[0];
		var slider_item = slider_wrapper.getElementsByClassName('slider_item');
		var dataIndex = slider_item[num].getAttribute('data-index');
		dataIndex = (allNum + dataIndex)%allNum;

		appendList(slider_wrapper,'sk_',num,4);

	}else if(slider[i].classList.contains('coupon_slider')){
		var len = slider[i].offsetWidth;
		renderSlider(slider[i],len,1,2,false,true);
		
		appendCoupon(slider[i],3,slider_coupon_data);
	}else if(slider[i].classList.contains('daily_slider')){
		var len = slider[i].offsetWidth;
		renderSlider(slider[i],len,1,3,true,true,'daily_lk');
		appendDaily(slider[i],3,slider_daily_data);
	}else if(slider[i].classList.contains('mime_slider')){
		var len = slider[i].offsetWidth;
		renderSlider(slider[i],len,1,3,true,true,'mime_lk');

		appendMime(slider[i],3,slider_mime_data);
	}else if(slider[i].classList.contains('special_slider')){
		var len = slider[i].offsetWidth;
		renderSlider(slider[i],len,1,4,true,true);
		appendSpecial(slider[i],3,slider_special_data);
	}
}

function appendSpecial(elem,Num,dataList){
	var slider_item = elem.getElementsByClassName('slider_item');

	for(var i =0;i<slider_item.length;i++){
		var html = '';
		var dataIndex = Number(slider_item[i].getAttribute('data-index') || slider_item[i].dataset.index);
		var Index = (dataIndex + 4)%4;
			for(var j=0;j<Num;j++){
	
				if(j == Num-1){
					html += '<div class="box box_last">';
				}else{
					html += '<div class="box ">';
				}

				html +=	    '<div class="box_hd">'+
									'<a href="javascript:;" class="box_hd_lk">'+
										'<h3 class="box_tit">'+dataList[Index*Num+j].tit+'</h3>'+
										'<i></i>'+
										'<span class="box_subtit">'+dataList[Index*Num+j].subtit+'</span>'+
									'</a>'+
								'</div>'+
								'<div class="box_bd">'+
									'<a class="sort_large" href="javascript:;">'+
										'<div class="lazyimg  sort_large_img">'+
											'<img src="'+dataList[Index*Num+j].img+'" class="lazyimg_img">'+
										'</div>'+
									'</a>'+
								'</div>'+
							'</div>'
							
			}

		slider_item[i].innerHTML = html;
	}
}

function appendCoupon(elem,Num,dataList){
	var slider_item = elem.getElementsByClassName('slider_item');

	for(var i =0;i<slider_item.length;i++){
		var html = '';
			for(var j=0;j<Num;j++){

				html +=	'<div class="coupon_item">'+
							'<a class="coupon_lk" href="javascript:;">'+
								'<div class="lazyimg lazyimg_loaded coupon_img">'+
									'<img src="'+dataList[i*Num+j].img+'" class="lazyimg_img">'+
								'</div>'+
								'<div class="coupon_more">'+
									'<div class="coupon_more_inner">更多精选好券</div>'+
								'</div>'+
								'<div class="coupon_info">'+
									'<div class="mod_price coupon_price">'+
										'<i>¥</i>'+
										'<span>'+dataList[i*Num+j].price+'</span>'+
									'</div>'+
									'<div class="coupon_limit">'+dataList[i*Num+j].limit+'</div>'+
									'<div class="coupon_desc">'+dataList[i*Num+j].desc+'</div>'+
								'</div>'+
							'</a>'+
						'</div>';

				// html += '<div class="top_item">';

				// 	html += '<a class="top_item_lk" href="javascript:;">'+
				// 				'<div class="lazyimg lazyimg_loaded top_item_img">'+
				// 					'<img src="'+dataList[0][i*Num+j].img+'"class="lazyimg_img"></div>'+
				// 					'<span class="top_item_rank top_item_rank_'+(i*Num+j+1)+'">'+dataList[0][i*Num+j].index+'</span>'+
				// 					'<span class="top_item_name">'+dataList[0][i*Num+j].name+'</span>'+
				// 			'</a>';

				// html += '</div>';
			}
		slider_item[i].innerHTML = html;
	}
}

function appendMime(elem,allNum,dataList){
	var slider_item = elem.getElementsByClassName('slider_item');

	for(var i=0;i<slider_item.length;i++){
		var dataIndex = Number(slider_item[i].getAttribute('data-index') || slider_item[i].dataset.index);
		var index = (dataIndex + allNum)%allNum;

		var html = '';
		html += '<div class="lazyimg lazyimg_loaded mime_item_img">'+
					'<img src="'+dataList[index].img+'" class="lazyimg_img">'+
				'</div>'+
					'<p class="mime_item_name">'+dataList[index].name+'</p>'+
					'<p class="mime_item_desc">'+dataList[index].desc+'</p>';

		slider_item[i].innerHTML = html;
	}
}

function appendDaily(elem,allNum,dataList){
	var slider_item = elem.getElementsByClassName('slider_item');

	for(var i=0;i<slider_item.length;i++){
		var dataIndex = Number(slider_item[i].getAttribute('data-index') || slider_item[i].dataset.index);
		var index = (dataIndex + allNum)%allNum;

		var html = '';
		html += '<div class="lazyimg daily_img"><img src="'+dataList[index].img1+'" class="lazyimg_img"></div>';

		html += '<div class="daily_cover">'+
					'<div class="daily_list">'+
						'<div class="daily_item">'+
							'<div class="lazyimg lazyimg_loaded daily_item_img">'+
								'<img src="'+dataList[index].img2+'" class="lazyimg_img">'+
							'</div>'+
						'</div>'+
						'<div class="daily_item">'+
							'<div class="lazyimg lazyimg_loaded daily_item_img">'+
								'<img src="'+dataList[index].img3+'" class="lazyimg_img">'+
							'</div>'+
						'</div>'+
						'<div class="daily_item">'+
							'<div class="lazyimg lazyimg_loaded daily_item_img">'+
								'<img src="'+dataList[index].img4+'" class="lazyimg_img">'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<h3 class="daily_title">'+
						'<span class="daily_title_txt">'+dataList[index].tit+'</span>'+
					'</h3>'+
					'<div class="daily_subtit">'+dataList[index].subtit+'</div>'+
					'<div class="daily_btn">立即查看</div>'+
				'</div>';

		slider_item[i].innerHTML = html;
	}

}

function appendData(elem,cls,num,data){
	var slider_wrapper = elem.getElementsByClassName('slider_wrapper')[0];
	var slider_item = slider_wrapper.getElementsByClassName('slider_item');

	for(var i=0;i<num;i++){
		slider_item[i].classList.add(''+cls+'item');
		var dataIndex = parseInt(slider_item[i].getAttribute('data-index'));

		var html = '';

		html += '<a class="'+cls+'lk" href="javascript:;">';

		if(data[i].img){
			html += '<div class="lazyimg sk_item_img">'+
						'<img src="'+data[i].img+'" class="lazyimg_img">'+
					'</div>'
		}
		html += '</a>';
	}
}

 function appendList(elem,cls,index,len){
	var slider_item = elem.getElementsByClassName('slider_item');

	for(var i=index;i<index+len;i++){

		slider_item[i].classList.add(''+cls+'item');
		var dataIndex = parseInt(slider_item[i].getAttribute('data-index'));

		dataIndex = (20 + dataIndex )%20;

		var html = '';

		html += '<a class="'+cls+'item_lk" href="javascript:;">'+
					'<div class="lazyimg sk_item_img">'+
						'<img src="'+sk_slider_data[dataIndex].img+'" class="lazyimg_img">'+
					'</div>'+
					'<p class="sk_item_name">'+sk_slider_data[dataIndex].text.sk_item_name + '</p>'+
					'<div class="sk_item_price">'+
						'<span class="mod_price sk_item_price_new">'+
							'<i>¥</i>'+
							'<span>'+sk_slider_data[dataIndex].text.sk_item_price.sk_item_price_new +'</span>'+
						'</span>'+
						'<span class="mod_price sk_item_price_origin">'+
							'<i>¥</i>'+
							'<span>'+sk_slider_data[dataIndex].text.sk_item_price.sk_item_price_old +'</span>'+
						'</span>'+
					'</div>'+
				'</a>';
		if(slider_item[i].innerHTML == ''){
			slider_item[i].innerHTML = html;
		}
		
	}
}

var sk_chn = document.getElementsByClassName('sk_chn')[0];
var sk_chn_indicators = sk_chn.getElementsByClassName('slider_indicators')[0];
var sk_chn_lk = sk_chn.getElementsByClassName('sk_chn_lk');

bind(sk_chn_indicators,'mouseover',function(e){
	var e = e || window.event;
	var target = e.target || e.srcElement;

	console.log(222)
	
	if(target.nodeName.toLowerCase() == 'i'){

		var index = target.getAttribute('data-index');
		console.log(index);

		subClass_R_and_A(sk_chn_indicators,'i','slider_indicators_btn_active',index);

		if(index == 0){
			sk_chn_lk[0].style.opacity = 1;
			sk_chn_lk[1].style.opacity = 0;
			sk_chn_lk[0].style.zIndex = 1;
			sk_chn_lk[1].style.zIndex = 0;
		}else{
			sk_chn_lk[0].style.opacity = 0;
			sk_chn_lk[1].style.opacity = 1;
			sk_chn_lk[0].style.zIndex = 0;
			sk_chn_lk[1].style.zIndex = 1;
		}
		
	}
});

var top_tab = document.getElementsByClassName('top_tab')[0];
var tab_head = top_tab.getElementsByClassName('tab_head')[0];
var tab_content = top_tab.getElementsByClassName('tab_body')[0];

bind(tab_head,'mouseover',function(e){
	var e = e || window.event;
	var target = e.target;

	if(target.classList.contains('tab_head_item')){
		var index = target.getAttribute('data-index') || target.dataset.index;

		subClass_R_and_A(tab_head,'div','active',index);
		tab_sub_H_and_S(tab_content,'tab_body_item',index);
	}
});
// var daily_slider = document.getElementsByClassName('daily_slider')[0];
