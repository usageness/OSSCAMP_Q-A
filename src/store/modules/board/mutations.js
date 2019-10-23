import * as board from "./types";

export default {
	[board.UPDATE_ITEMS_UNSOLVED](state,items){
		console.log("DDD state ", state, items);
		state.items = items;
		state.isInit=true;
		state.loaded="unsolved";
	},
	[board.UPDATE_ITEMS_SOLVED](state,items){
		console.log("DDD state ", state, items);
		state.items = items;
		state.isInit=true;
		state.loaded="solved";
	},
	[board.UPDATE_ITEMS_POPULAR](state,items){
		console.log("DDD state ", state, items);
		state.items = items;
		state.isInit=true;
		state.loaded="popular";
	}
}