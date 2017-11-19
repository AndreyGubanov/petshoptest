import Vue from 'vue';
import Vuex from 'vuex';
import data from './data.json';

Vue.use(Vuex);

export function createStore () {
    return new Vuex.Store({
        state: {
            json: data,
            currPage: 1,
            itemsPerPage: 4,
        },
        actions: {
        },
        mutations: {

            changePage(state, payload) {
                state.currPage = payload;
            }

        },
        getters: {
            itemCount: state => {
                return state.json.length;
            },
            maxPages: state => {
                return Math.ceil(state.json.length/state.itemsPerPage);
            }
        }
    })
}
