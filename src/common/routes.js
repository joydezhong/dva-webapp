import Home from './Home';
import InMobile from './InMobile';
import OutMobile from './OutMobile';
import Find from './Find';
import MyPage from './MyPage';

const routes = [
	{
		name: '首页',
		path: '/',
		component: Home
	},{
		name: '买手机',
		path: '/InMobile',
		component: Home
	},{
		name: '卖机',
		path: '/OutMobile',
		component: Home
	},{
		name: '发现',
		path: '/Find',
		component: Home
	},{
		name: '我的',
		path: '/MyPage',
		component: Home
	}
];
