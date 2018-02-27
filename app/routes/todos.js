import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    //console.log(params);
    return this.get('store').findAll('todo');
  }
});
