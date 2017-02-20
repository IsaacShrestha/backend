import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.findRecord('page', params.page_id);
	},

	setupController: function(controller, model){
		controller.set('page', model);
	},

	actions:{
		updatePage: function(page) {
			var _this = this;
			page.save();
					}
	}
});