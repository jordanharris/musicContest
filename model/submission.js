var formApplication = [];

var submissionData = module.exports = {

	submissionEvents: function(formSub){
		if(formApplication.length <  4){
			formApplication.push(formSub);
		}
	},

	submissionInfo: function(){
		return formApplication.slice();
	}
}