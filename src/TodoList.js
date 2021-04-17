import React, { Component, Fragment } from 'react';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            handleinputValue:''
        }
    }
    render() {
        return(
            <Fragment>
                <div>
                    <input
                        value = { this.state.inputValue }
                        onChange = { (e) => this.handleInputChange(e) }
                    />
                    <button
                        onClick = { (e) => this.handleBtnClick(e) }
                    >提交</button>
                </div>
                <p>
                    { this.state.handleinputValue }
                </p>
            </Fragment>
        )
    }
    handleInputChange(e) {
        const inputvalue = e.target.value
        if(inputvalue.length > 20) {
            return
        }
        this.setState({
            inputValue: inputvalue
        })
    }
    handleBtnClick(e) {
        this.setState({
            handleinputValue: this.state.inputValue
        })
    }
}


export default TodoList;