import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem';


function App() {
    return(
        <div className="container">
            <h1>Todo</h1>
            <ul className="todoList">
                <TodoItem done={false} message="Sälj barnen"/>
                <TodoItem done={false} message="Boka en spåkvinna" />
                <TodoItem done={true} message="Odla papaya" />
                <TodoItem done={true} message="Deklarera skatten" />
            </ul>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
