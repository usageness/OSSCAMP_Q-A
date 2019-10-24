export const S1_FILTER1 = "S1_FILTER1"
export default {
	[S1_FILTER1](state){
		return ["data1", "data2"];
	},
	getShow: function(state) {
		return state.is_Show;
	},
	getPost: function(state) {
		console.log("자 겟포스트 했어", state.reply);
		let result = {
			title: state.title,
			con: state.con,
			reply: state.reply,
			recom: state.recom
		};
		return result;
	},
	getReply: function(state) {
		console.log('reply:', state.reply, 'con:', state.con);
		return state.reply;
	}
}
