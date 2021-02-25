import React, { Component} from 'react';
import './create.scss';

import { ViewTypes } from './../utils/ViewsType';

export default class CreateComponent extends Component {

    constructor(props){
        super(props);
        this.state = { name: null };
        this.onInputChange = this.onInputChange.bind(this);
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
    }

    onJoinButtonClick(){
        this.props.change(ViewTypes.JOIN)
    }

    onInputChange(e){
        let value = e.target.value;
        this.setState({ name: value });
    }

    render(){
        let { name } = this.state;

        return (
            <div className="content content--size content--theme">
                <input 
                    type="text" 
                    placeholder="Enter name"
                    onChange={this.onInputChange}
                    className="content__input content__input--size"
                />
                { name && <button className="button-continue">Continue</button> }
                <div className="content__lines">
                    <hr className="line__medium"/>
                    <span className="content__label">OR</span>
                    <hr className="line__large"/>
                </div>
                <p> Want to create group? <span 
                    onClick={this.onJoinButtonClick}
                    className="content__link">Join
                </span></p>
            </div>
        )
    }
}