import React, { Component } from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChangeTex = this.handleChangeTex.bind(this);
      this.handleChangePrior = this.handleChangePrior.bind(this);
      this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
              Text:
            <input
              id="text"
              onChange={this.handleChangeTex}
              value={this.state.text}
            />
            Priority:
            <input
              id="priority"
              onChange={this.handleChangePrior}
              value={this.state.priority}
            />
            Due Date:
            <input
              id="dueDate"
              onChange={this.handleChangeDueDate}
              value={this.state.dueDate}
            />

            <button>
              Add # {this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChangeTex(e) {
      this.setState({ text: e.target.value });
    }

    handleChangePrior(e) {
      this.setState({ priority: e.target.value });
    }

    handleChangeDueDate(e) {
      this.setState({ dueDate: e.target.value });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }

      const newItem = {
        text: this.state.text,
        id: Date.now(),
        priority: this.state.priority,
        dueDate: this.state.dueDate
      };

      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        priority: '',
        dueDate: ''
      }));
    }
  }