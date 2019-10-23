import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import board from "./modules/board"

export default new Vuex.Store({
	modules:{
		board
	}
})
