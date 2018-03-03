import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  todoItemList: Ember.inject.service('todo-item-list'),
  store: Ember.inject.service(),
  isInputEmpty: true,

  actions: {

    addTodo() {
      this.get('todoItemList').addTodoItem(this.get('todoText'), this.get('todoChecked') === true ? 'complete' : 'incomplete');
    },
    checkInputEmpty(text) {
      this.set('isInputEmpty', text === '' ? true : null);
    },
  }
});
