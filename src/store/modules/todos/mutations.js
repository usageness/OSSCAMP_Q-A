import * as todos from "./types";


export default {
	[todos.UPDATE_ITEMS](state, list){
		state.items = list
	},
	[todos.ADD_ITEM](state,newItem){
		state.items.push({
			content:newItem.content,
			isDone:false
		})
	},
	[todos.REMOVE_ITEM](state,index){
		state.items.splice(index,1);
	}
}
