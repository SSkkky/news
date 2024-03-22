import { createStore } from 'vuex'

export default createStore({
  state: {
    // [{ id: 0, name: '손하늘', msg: '뉴스 등록을 할거에용' }]
    data: []
  },
  getters: {
  },
  mutations: { //동기 처리 로직들을 정의
    postData(state, data) {
      state.data.push(data)
    },
    deleteData(state, data) {
      console.log('push말고 filter라도 해야하남', state, data)
    }
  },
  actions: { //비동기 처리 로직들을 정의
    news({ commit }, action) {
      let data;
      switch (action.type) {
        case 'post':
          data = action.data;
          commit('postData', data);
          break;
        case 'delete':
          data = action.data;
          commit('deleteData', data);
          break;
      }
    }
  },
  modules: {
  }
})
