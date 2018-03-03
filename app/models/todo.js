import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  text: DS.attr(),
  status: DS.attr(),
  isComplete: Ember.computed.equal('status', 'complete')
});
