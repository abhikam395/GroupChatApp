import React, { Component} from 'react';
import './join.scss';

import { ViewTypes } from './../utils/ViewsType';

export default class JoinComponent extends Component {

    constructor(props){
        super(props);
        this.state = { code: null };
        this.onInputChange = this.onInputChange.bind(this);
        this.onCreateButtonClick = this.onCreateButtonClick.bind(this);
    }

    onCreateButtonClick(){
        this.props.change(ViewTypes.CREATE)
    }

    onInputChange(e){
        let value = e.target.value;
        this.setState({code: value })
    }

    render(){
        let { code } = this.state;

        return (
            <div className="content content--size content--theme">
                <input 
                    type="text" 
                    placeholder="Enter code" 
                    onChange={this.onInputChange}
                    className="content__input content__input--size"
                />
                { code && <button className="button-continue">Continue</button> }
                <div className="content__lines">
                <hr className="line__medium"/>
                <span className="content__label">OR</span>
                <hr className="line__large"/>
                </div>
               <p> Want to create group? <span 
                    onClick={this.onCreateButtonClick}
                    className="content__link">Create
                </span></p>
          </div>
        )
    }
}