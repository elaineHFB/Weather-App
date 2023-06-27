// import preact
import { h, render, Component } from 'preact';
import style_burger from './style_burger'; // General burger styling

// Sidebar for the burger menu
// Sidebar content never changes, hence a const component
const Sidebar = (props) => {
	return (
        // The sidebar is either open, or closed. This depends on the sidebarstate.
        // If the sidebar is open, it gets sidebar--open styling, otherwise it gets regular .sidebar styling
        <div class = {props.sidebarState ? style_burger["sidebar--open"] : style_burger.sidebar}> 
            <li>
                <a>Settings</a>
            </li>
            <li>
                <a>Saved Locations</a>
            </li>
        </div>
	)
	
}
export default Sidebar