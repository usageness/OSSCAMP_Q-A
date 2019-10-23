import * as todos from "./types";
import todosApi from "./api/todosApi";
export default {
	async [todos.LOAD_ITEMS]({commit}, payload) {
		let list = await todosApi.loadTodos();
		commit(todos.UPDATE_ITEMS, list);
	},
	[todos.ADD_ITEM]({commit}, payload) {
		commit(todos.ADD_ITEM, payload.newItem);
	},
	[todos.REMOVE_ITEM]({commit}, payload) {
		commit(todos.REMOVE_ITEM, payload.index);
	}
}