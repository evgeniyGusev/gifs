const API_KEY = '?api_key=CGjqcZbkSazZKtbADId22wKHu2QQYMWp';

export const state = {
  gifs: {
    trend: [],
  }
}

export const mutations = {
  SET_TREND_GIFS(state, payload) {
    state.gifs.trend = payload;
  }
}

export const actions = {
  async FETCH_TRENDS({ commit }, data) {
    try {
      const response = await this.$axios.get(`v1/gifs/trending${API_KEY}`, data);

      commit('SET_TREND_GIFS', response.data.data);
    } catch (e) {
      console.error(e);
    }
  }
}
