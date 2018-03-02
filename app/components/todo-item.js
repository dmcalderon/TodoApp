import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  todoItemList: Ember.inject.service('todo-item-list'),
  id: null,
  status: null,

  actions: {
    removeTodo() {
      this.get('todoItemList').removeTodoItem(this.get('id'));
    },
    onChecked(event) {
      this.get('todoItemList').updateStatus(this.get('id'), event.target.checked);
    },
    onBlur() {
      this.get('todoItemList').updateTodo(this.get('id'));
    }
  }
});
