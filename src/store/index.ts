import { createStore } from 'vuex';

const defaultState = {
    count: 0
};

const store = createStore({
    state() {
        return defaultState;
    },
    mutations: {
        increment(state: typeof defaultState) {
            // eslint-disable-next-line no-param-reassign
            state.count += 1;
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment');
        }
    },
    getters: {
        double(state: typeof defaultState) {
            return 2 * state.count;
        }
    }
});

export default store;
