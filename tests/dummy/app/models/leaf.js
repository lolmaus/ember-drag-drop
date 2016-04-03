import Model from 'ember-data/model';
import {hasMany, belongsTo} from 'ember-data/relationships';

var Book = Model.extend({
  parent: belongsTo('leaf', {inverse: 'children'}),
  children: hasMany('leaf', {inverse: 'parent'})
});

export default Book;
