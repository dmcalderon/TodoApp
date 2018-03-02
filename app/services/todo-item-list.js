import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  todoItems: [],
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
  },

  addTodoItem(todoText, todoStatus) {

    let post = this.get('store').createRecord('todo', {
      text: todoText,
      status: todoStatus
    });

    post.save().then((data) => {
      this.get('todoItems').pushObject(data.todo);
    }).catch((err) => {
      console.log(`got error ${err}`)
    });

  },

  removeTodoItem(id) {

    let todo = this.get('store').peekRecord('todo', id);

    if (todo) {
      todo.destroyRecord().then(() => {

      }).catch((err) => {
        console.log(`Error occurred during deletion: ${err}`)
      });
    }
  },

  updateTodo(id) {

    let todo = this.get('store').peekRecord('todo', id);

    if (todo.get('hasDirtyAttributes')) {
      todo.save().then(() => {
        console.log('Update successful!');
      }).catch((err) => {
        console.log(`Got error while updating todo: ${err}`);
      });
    }
  },

  updateStatus(id, status) {
    let todo = this.get('store').peekRecord('todo', id);

    if (todo) {
      todo.set('status', status === true ? 'complete' : 'incomplete');
      this.updateTodo(id);
    }
  }
});
