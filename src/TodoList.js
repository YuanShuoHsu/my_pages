import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

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
                        placeholder = '留言'
                        value = { this.state.inputValue }
                        onChange = { (e) => this.handleInputChange(e) }
                        onKeyPress={ (e) => this.handleKeypress(e) }
                    />
                    <Button type="primary"
                        onClick = { (e) => this.handleBtnClick(e) }
                    >提交</Button>
                </div>
                {/* <div class="input-group input-group-sm">
                    <input type="text" class="form-control" placeholder="留言" id="search_text_collapse" onkeydown="keyboard_enter_collapse(event)"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="search_button" onclick="search_data()">
                            <i class="fas fa-music fa-sm fa-fw" aria-hidden="true"></i>
                        </button>
                    </div>
                </div> */}
                <p
                    onClick = { (e) => this.handleItemDelete(e) }
                    dangerouslySetInnerHTML = {{ __html: this.state.handleinputValue }}
                >
                </p>
                
            </Fragment>
        )
    }

    handleInputChange(e) {
        const inputvalue = e.target.value
        if (inputvalue.length > 20) {
            return
        }
        this.setState(() => ({
            inputValue: inputvalue
        }))
    }

    handleKeypress(e) {
        if (e.charCode === 13) {
            this.handleBtnClick()
        }
    }

    handleBtnClick() {
        this.setState((preState) => ({
            handleinputValue: preState.inputValue,
            inputValue: ''
        }))
    }

    handleItemDelete() {
        this.setState(() => ({
            handleinputValue: ''
        }))
    }
}

export default TodoList;