import { getProductLists } from '../services/Home'

export default {

  namespace: 'home',

  state: {
    productInfo: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
        if (pathname === "/") {
          dispatch({type: 'getProductLists', payload: { date: query }})
        }
      })
    },
  },

  effects: {
    *getProductLists({ payload = {} }, { call, put, select }) {
      // 获取列表
      const data = yield call(getProductLists, payload)

      if (!data) return

      yield put({
        type: 'change',
        payload: {
          name: 'productInfo',
          value: data
        }
      })

      return data
    },
  },

  reducers: {
  	change(state, action) {
      const {payload} = action

      if (!payload || !payload.name) return

      return {
        ...state,
        [payload.name]: payload.value
      }
    }
  },

};
