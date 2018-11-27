import Home from '../routes/Home';
import InMobile from '../routes/InMobile';
import OutMobile from '../routes/OutMobile';
import Find from '../routes/Find';
import MyPage from '../routes/MyPage';

const routes = [
	{
		name: '首页',
		path: '/',
		component: Home
	},{
		name: '买手机',
		path: '/InMobile',
		component: InMobile
	},{
		name: '卖机',
		path: '/OutMobile',
		component: OutMobile
	},{
		name: '发现',
		path: '/Find',
		component: Find
	},{
		name: '我的',
		path: '/MyPage',
		component: MyPage
	}
];


export default routes;
