export const DONE_ITEMS = "doneItems"
export default {
	[DONE_ITEMS](state){
		return state.items.filter((item)=>item.isDone);
	}
}
