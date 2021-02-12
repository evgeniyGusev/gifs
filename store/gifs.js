const API_KEY = 'CGjqcZbkSazZKtbADId22wKHu2QQYMWp';

export const state = () => ({
  gifs: {
    trend: [],
  }
});

export const mutations = {
  SET_TREND_GIFS(state, payload) {
    state.gifs.trend = payload;
  }
}

export const actions = {
  async FETCH_TRENDS({ commit }) {
    try {
      const response = await this.$axios.get(`v1/gifs/trending?api_key=${API_KEY}`);

      commit('SET_TREND_GIFS', response.data.data);
    } catch (e) {
      console.error(e);
    }
  }
}
