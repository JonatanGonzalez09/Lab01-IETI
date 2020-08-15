import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        //const list = this.props.todoList;
        const list = this.props.items;
        const listItems = list.map((item) =>
            <Todo
                text={'Text: ' + item.text}
                priority={'Priority: ' + item.priority}
                dueDate={'Due Date: ' + item.dueDate}
            />
        );
        return (
          <ul>{listItems}</ul>
        );
    }
}