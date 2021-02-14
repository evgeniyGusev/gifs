const API_KEY = 'CGjqcZbkSazZKtbADId22wKHu2QQYMWp';

export const state = () => ({
  gifs: {
    trend: [],
  },
  users: [],
});

export const mutations = {
  SET_TREND_GIFS(state, payload) {
    state.gifs.trend = payload;
  },
  SET_USERS(state, payload) {
    state.users = payload;
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
  },

  async FETCH_USERS({ commit }) {
    try {
      const response = await this.$axios.get(`/v1/gifs/categories?api_key=${API_KEY}`);

      commit('SET_USERS', response.data.data.map(el => ({
        ...(el.gif.user ? el : false)
      })));
    } catch (e) {
      console.error(e);
    }
  },
}
