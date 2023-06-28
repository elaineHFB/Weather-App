// import preact
import { h, render, Component } from 'preact'; // This is needed even if it says its unused

import style_widget from './style_widget'
	
function Widget(props){
    return(
        // THIS TOOK SO LONG TO FIGURE OUT: This code singlehandedly lets you selectively style 
        // instances of a component using css depending on the class you assign it.
        <div class = {style_widget[props.class]}> 
            <span> {props.factor}: {props.measure} <sup>{props.degreeSymbol}</sup> </span>
        </div>
    )
}

export default Widget;