export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('gifs/FETCH_TRENDS');
  },
};
