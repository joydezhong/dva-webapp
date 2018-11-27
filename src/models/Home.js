import {login} from '../services/Home'

export default {

  namespace: 'home',

  state: {
  	token: '',
  	me: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({ payload = {} }, { call, put, select }) {
      // 登陆
      const {id} = yield call(login, payload)

      if (id) {
        localStorage.token = id
        yield put({
          type: 'setToken',
          payload: id
        })
      }

      // 获取个人信息
      return id
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
