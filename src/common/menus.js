import homeImg from '../assets/home.svg';
import homeImg_act from '../assets/home_active.svg';
import mobileImg from '../assets/mobile.svg';
import mobileImg_act from '../assets/mobile_active.svg';
import moneyImg from '../assets/money.svg';
import moneyImg_act from '../assets/money_active.svg';
import findImg from '../assets/find.svg';
import findImg_act from '../assets/find_active.svg';
import meImg from '../assets/me.svg';
import meImg_act from '../assets/me_active.svg';

const menus = [
	{
		title: '首页',
		key: 'Home',
		icon: homeImg,
		selectedIcon: homeImg_act,
		isSelect: true,
		route: '/'
	},
	{
		title: '买手机',
		key: 'InMobile',
		icon: mobileImg,
		selectedIcon: mobileImg_act,
		route: '/InMobile'
	},
	{
		title: '卖机',
		key: 'OutMobile',
		icon: moneyImg,
		selectedIcon: moneyImg_act,
		route: '/OutMobile'
	},
	{
		title: '发现',
		key: 'Find',
		icon: findImg,
		selectedIcon: findImg_act,
		route: '/Find'
	},
	{
		title: '我的',
		key: 'My',
		icon: meImg,
		selectedIcon: meImg_act,
		route: '/MyPage'
	}
];

export default menus;
