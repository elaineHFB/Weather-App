// import preact
import { h, render, Component } from 'preact'; // This is needed even if it says its unused

import BurgerMenu from '../burgerMenu/burgerMenu';
import Backdrop from '../burgerMenu/backdrop';
import Sidebar from '../burgerMenu/sidebar';

import style_widget from './style_widget'
	
export default class HeaderWidget extends Component{

    constructor(){
        super()
        this.state = {
            sideBarState : false
        }
    }

    render(){
        return(
            <div>
                <BurgerMenu onClick={this.setSidebar}/>
                {/* <Backdrop/> 
                    Originally Backdrop would pop up when the burger was clicked,
                    so that clicking outside the sidebar, would go back to the
                    burger's normal state.
                */}
                <Sidebar sidebarState = { this.state.sidebarState }/>
                <div class = {style_widget.headerWidgetBody}>
                    <p ID = {style_widget.location}> {this.props.location} </p>
                    <p><span ID = {style_widget.temp}> {this.props.temperature}<sup>°</sup>C </span><img src={`http://openweathermap.org/img/wn/${this.props.icons}.png`} alt={this.props.conditions}/> </p>
                </div>
            </div>
        )
    }

    // When the burger is clicked, it sets the sidebar to on or off
	setSidebar = () => {
		this.setState({
			sidebarState: !this.state.sidebarState
		})
		// this.state.sidebarState ? console.log("Sidebar On") : console.log("Sidebar Off") // Debug stuff
	}
    
}
