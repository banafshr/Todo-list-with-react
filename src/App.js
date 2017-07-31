import React, {Component} from 'react';
import './App.css';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Input from './components/Input.js';
import Todolist from './components/Todolist.js';

window.id = 0;
class App extends Component {
  constructor(props) {
    super(props)
    //initial state
    this.state = {
      todo: []
    }
    //input value
    this.inputRef = null;

    this.addToDo = this
      .addToDo
      .bind(this);

    this.removeToDo = this
      .removeToDo
      .bind(this);

  }

  addToDo(e) {
    e.preventDefault();
    if (this.inputRef.value) {
      const todoItem = {
        text: this.inputRef.value,
        id: window.id++
      }
      this
        .state
        .todo
        .push(todoItem);
      this.setState({todo: this.state.todo});
      this.inputRef.value = '';
    }
  }

  removeToDo(e, i) {
    if (e.target.type !== 'checkbox') 
      e.preventDefault();
    const remainder = this
      .state
      .todo
      .filter((todoItem) => {
        console.log(todoItem.id, i);
        if (todoItem.id !== i) 
          return todoItem;
        }
      )
    //remove element from state
    this.setState({todo: remainder})

  }

  render() {
    return (
      <div className="wrapper">
        <Title value="To Do App"/>
        <form onSubmit={this.addToDo}>
          <Input
            className="input-field"
            name="input"
            placeholder="I need to do..."
            inputRef={input => this.inputRef = input}/>
          <Button className="submit-btn"/>
        </form>
        {this
          .state
          .todo
          .map((todo) => (
            <div><Todolist
              className="list-wrapper"
              name={this.state.todo.text}
              key={todo.id}
              value={todo.text}/>
              <input type="checkbox" onClick={(e) => this.removeToDo(e, todo.id)}/></div>
          ))}
      </div>

    );
  }
}

export default App;
