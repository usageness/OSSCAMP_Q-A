import axios from "axios";
export default {
	async loadTodos(){
		let result = await axios.get("./mockup/todos.json");
		return result.data.items;
	}
}