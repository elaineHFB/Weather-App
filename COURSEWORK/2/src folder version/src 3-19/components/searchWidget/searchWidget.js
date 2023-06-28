// import preact
import { h, render, Component, useState } from 'preact'; // This is needed even if it says its unused

import style from '../iphone/style'

import SearchMenu from './searchMenu';
	
export default class SearchWidget extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchMenuVisible: false,
            search: ""
        }
        
    }



    render(){
        return(
            <div>
                {
                    this.state.searchMenuVisible && // If the searchMenuVisible is true, display the elements below
                    <SearchMenu id='searchMenu' 
                    searchInput = {this.state.search} // state.search based on lowerCaseInput
                    setLocation = {this.props.setLocation}
                    toggleMenu = {this.searchMenuOn}
                    />
                }

                <input id = 'search' 
                class={style.footer} 
                placeholder='Search Location..' 
                onClick = {this.searchMenuOn}
                onKeyUp = {this.lowerCaseInput}/>
            </div>
        )
    }

    // Formats the dynamic search input into lowercase, so that the search state 
    // can be passed as a prop into the SearchMenu component, in the correct format.
    lowerCaseInput = (event) => {
        var input, lowerCaseInput;
        input = event.target.value;
        lowerCaseInput = input.toLowerCase();
        this.setState({ search: lowerCaseInput })
        // console.log("In filter: " + this.state.search) // Dynamic input testing

	}

    // Used to bring up the search menu, passed into the SearchWidget
	searchMenuOn = () => {
		this.setState({
			searchMenuVisible: !this.state.searchMenuVisible
		})
	}

    
    
}
