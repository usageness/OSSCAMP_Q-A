export const S1_FILTER1 = "S1_FILTER1"
export default {
	[S1_FILTER1](state){
		return ["data1", "data2"];
	},
	getShow: function(state) {
		return state.is_Show;
	},
	getPost: function(state) {
		console.log('title:', state.title, 'con:', state.con);
		let result = {
			title: state.title,
			con: state.con
		};
		return result;
	}
}
