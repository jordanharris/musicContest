var modelSubmissions = require('../model/submission');

var submissionVid = module.exports = {

	create: function(req, res){
		var formsubmission = req.body.submissions;
		var submissionArry = modelSubmissions.submissionEvents(formsubmission);
		res.redirect('/contestSubmissions');
	},

	showSubmissions: function(req, res){
		var vids = modelSubmissions.submissionInfo();
		var emptyArr = [];
		for (var i = 0; i < vids.length; i+=2) {
			emptyArr.push([vids[i],vids[i+1]])
		};
		res.render('viewSubmissions', { viewSub : emptyArr});
	}
}