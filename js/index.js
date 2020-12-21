import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem';
import AddTodo from './addTodo';


class App extends React.Component{
    constructor(props){
        super(props);
        console.log('this.props är:', this.props)
    }
    render() {
        return(
            <div className="container">
                <h1>{this.props.title}</h1>
                <ul className="todoList">
                    <TodoItem done={false} message="Sälj barnen"/>
                    <TodoItem done={false} message="Boka en spåkvinna" />
                    <TodoItem done={true} message="Odla papaya" />
                    <TodoItem done={true} message="Deklarera skatten" />
                </ul>
                <AddTodo buttonText="Frida fick IG"/>
            </div>
        )
    }
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));
