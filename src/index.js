import dva from 'dva';
import createLoading from 'dva-loading';

import { Toast } from 'antd-mobile'
import './index.css';

// 1. Initialize
const app = dva({
	onError(error, dispatch) {
    setTimeout(() => {
      Toast.info(`${error.errMsg}`)
    },1001)
  },
  
  onStateChange(state){
    const { loading } = state

    if (loading.global) {
      Toast.loading('加载中...', 1)
    }else{
      Toast.hide()
    }
  }

});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/Login').default);
app.model(require('./models/Home').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
