import React, {Component} from 'react';
import './App.css';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Input from './components/Input.js';
import Todolist from './components/Todolist.js';

window.id = 0;
document.title = "Multitask"
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
    debugger;
    if (e.target.className !== 'done') 
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
        <Title value="Multitask"/>
        <form autocomplete="off" onSubmit={this.addToDo}>
          <Input
            className="input-field"
            name="input"
            placeholder="I need to do..."
            inputRef={input => this.inputRef = input}/>
          <Button className="submit-btn"/>
        </form >
        <div className="list-container" key={window.id}>
          {this
            .state
            .todo
            .map((todo, i) => (

              <Todolist
                className="list-item"
                name={this.state.todo.text}
                key={todo
                .text
                .toString() + '-div'}>

                <span>{todo.text}</span>
                <span className="done" key={i} onClick={(e) => this.removeToDo(e, todo.id)}>
                  <i className="fa fa-check" aria-hidden="true"></i>
                </span>
              </Todolist>
            ))}
        </div>

      </div>
    );
  }
}

export default App;
