import Ember from 'ember';

export default Ember.Component.extend( {
  dragCoordinator: Ember.inject.service(),
  attributeBindings: ['draggable'],
  draggable: 'true',
  tagName: 'div',
  overrideClass: 'sortable-objects',
  classNameBindings: ['overrideClass'],
  enableSort: true,
  sortableObjectList: Ember.A(),

  didInsertElement() {
    this.set('dragCoordinator.sortComponentController', this);
  },
  willDestroyElement() {
    this.set('dragCoordinator.sortComponentController', null);
  },
  dragStart: function(event) {
    if (!this.get('enableSort')) {
      event.preventDefault();
      return;
    }
   if (!this.get('dragCoordinator.currentDragObject')) {
     //prevent dragging if a drag object is not currently being targeted
     return false;
   }
  },
  dragOver: function() {
    //needed so drop event will fire
    return false;
  },
  drop: function() {
    if (this.get('enableSort')) {
      this.sendAction('sortEndAction');
    }
  }
});
