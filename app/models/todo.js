import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  status: DS.attr(),
  isComplete: Ember.computed.equal('status', 'complete')
});
