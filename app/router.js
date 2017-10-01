import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('contact');
  this.route('companies');
  this.route('why-bds');
  this.route('custom-packaging');
  this.route('our-mission');
  this.route('humanitarian-aid');
});

export default Router;
