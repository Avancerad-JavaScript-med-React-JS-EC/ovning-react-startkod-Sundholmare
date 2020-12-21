import React from 'react';



function TodoItem(props) {
    let todoDone = '';

    if(props.done === true){
        todoDone = 'Klar'
    }else{
        todoDone = 'Ej klar'
    }

    return (
        <li className="todoListItem">{props.message} - {todoDone}</li>
    )
}

export default TodoItem;