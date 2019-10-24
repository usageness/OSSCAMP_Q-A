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
	},
	[board.UPDATE_ITEMS_SEARCHED](state,items){
		console.log("DDD state ", state, items);
		state.items = items;
	},
	[board.UPDATE_SHOW_VISIBLE](state, payload){
		console.log("DDD state ", state, state.is_Show);
		state.is_Show = true;
		state.title = payload.title;
		state.con = payload.con;
		state.reply = payload.reply;
		state.recom = payload.recom;
	},
	[board.UPDATE_SHOW_INVISIBLE](state){
		console.log("DDD state ", state, state.is_Show);
		state.is_Show = false;
	}
}
