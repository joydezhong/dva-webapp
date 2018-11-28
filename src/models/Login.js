import {login} from '../services/Login'

export default {

  namespace: 'login',

  state: {
  	token: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
        if (pathname === "/Login") {
          // dispatch({type: 'login', payload: { date: query }})
        }
      })
    },
  },

  effects: {
    *login({ payload = {} }, { call, put, select }) {
      // 登陆
      const {toke} = yield call(login, payload)

      if (toke) {
        localStorage.token = toke
        yield put({
          type: 'setToken',
          payload: toke
        })
      }

      // 获取token
      return toke
    },
  },

  reducers: {
  	setToken(state, action){
      const { payload } = action
      return {
        ...state,
        token: payload
      }
   	},
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
