import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function(){
  	this.route('dashboard', {path: '/'});
  	this.route('addpage', {path: '/new'});
  	this.route('editpage', {path: ':page_id/edit'});
  });
});

export default Router;
