// import preact
import { h, render, Component, useState } from 'preact'; // This is needed even if it says its unused

import style_searchMenu from './style_searchMenu.css'       //The menu is a seperate CSS file due to keyframe issues with LESS
import style_searchItems from './style_searchItems'

import {locations} from "./hardcodeLocations" // Import hard-coded locations

export default class SearchMenu extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput : props.searchInput
        }
    }

    render(){
        return(
            <div class = {style_searchMenu.searchMenu}> 
                <span> Search Menu </span>
                <ul class = {style_searchItems.searchLocations}>
                    {
                        // Up until .map(), this code will return an array of locations that includes the string inputted
                        locations.filter( (place) => place.location.toLowerCase().includes(this.state.searchInput)).map(
                            // Now from this filtered array, run the following function on every item
                            // This takes each location and gives it a list item that when clicked, changes the location
                            (place) => (
                                <li onClick={() => {this.clickedLocation(place.location)}}>
                                    {place.location}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }

    // This is a lifecycle method for updating the searchInput state whenever the search text changes. Docs on Preact.
    componentWillReceiveProps(nextProps) {
        this.setState({ searchInput: nextProps.searchInput });  
      }
    
    // Clicked location
    clickedLocation = (location) => {
        this.props.toggleMenu()             // This was passed in from searchWidget, it turns the menu off after chosing a location
        this.props.setLocation(location)    // This was passed down from iphone, it modifies the actual main page itself
    }
}