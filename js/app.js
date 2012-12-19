App = Ember.Application.create();

App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});
App.ApplicationController = Ember.Controller.extend();


App.Person = Em.Object.extend({
	name: null	
});


App.personController = Ember.ArrayController.create({
	content: [{name: 'Adam'}, {name: 'James'}],
	init: function() {
		this._super();
		var person = App.Person.create({
			name: 'Linda'
		});
		this.pushObject(person);	
	console.log(this);
	}

});



App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
});

App.initialize();
