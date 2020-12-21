import React, {Component} from 'react';

class AddTodo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
                <input type="text" placeholder="Skriv en Todo"/>
                <button>{this.props.buttonText}</button>
            </section>
        )
    }
}

export default AddTodo;