import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deletePage: function() {
			this.sendAction('action', this.get('page'));
		}
	}
});
