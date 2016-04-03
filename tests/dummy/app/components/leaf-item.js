import Ember from 'ember';
import layout from '../templates/components/leaf-item';

export default Ember.Component.extend({
  leaf: null,
  sortingScope: 'leaf',

  layout: layout,
  classNames: ['leaf'],

  actions: {
    sortEndAction: function() {
      console.log('Sort Ended', this.get('leaf.children'));
    }
  }
});
