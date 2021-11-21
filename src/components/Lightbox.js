import React,{Component, Fragment} from "react";
import {createPortal} from 'react-dom';
const portal_modal=document.getElementById('modal-light-box');

export default class LightBox extends Component{

    constructor(props){
        super(props);
        this.element=document.createElement('div');
    }

    componentDidMount(){
        portal_modal.appendChild(this.element);
        console.log(this.element)
    }

    componentWillUnmount(){
        portal_modal.removeChild(this.element);
    }

    render(){
        return createPortal(
            this.props.children,this.element
            );
    }

}