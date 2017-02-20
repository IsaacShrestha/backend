import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return {title: '', content: '', author: '', createdon: new Date().toDateString(), active: ''};
	},

	setupController: function(controller, model){
		controller.set('page', model);
	},

	actions:{
		createPage: function(page){
			var _this = this;
			this.store.createRecord('page', page).save(); /*.then(function(dashboard){
				_this.transitionTo('dashboard');
			});*/
		}
	}
});
