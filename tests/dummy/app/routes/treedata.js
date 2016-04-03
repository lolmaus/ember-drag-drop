import Ember from 'ember';

export default Ember.Route.extend({
  createdStore: false,
  model: function() {
    if (!this.get('createdStore')) {
      return this
        .store
        .createRecord('leaf', {
          id: '1',
          children: [
            this.store.createRecord('leaf', {
              id: '2',
              children: [
                this.store.createRecord('leaf', {id: '3'}),
                this.store.createRecord('leaf', {id: '4'}),
                this.store.createRecord('leaf', {id: '5'})
              ]
            }),
            this.store.createRecord('leaf', {
              id: '6',
              children: [
                this.store.createRecord('leaf', {id: '7'}),
                this.store.createRecord('leaf', {id: '8'})
              ]
            }),
            this.store.createRecord('leaf', {
              id: '9',
              children: [
                this.store.createRecord('leaf', {id: '10'}),
                this.store.createRecord('leaf', {id: '11'}),
                this.store.createRecord('leaf', {id: '12'})
              ]
            })
          ]
        });
    }
  }
});
