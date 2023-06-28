// import preact
import { h, render, Component } from 'preact';
import style_burger from './style_burger'; // General burger styling



// Burger menu for more options
const BurgerMenu = (props) => {
	return (
		// Burger constant that will do the functionality passed by props.onClick
        <div class={style_burger["burger"]} onClick={props.onClick}> 
			<img src='../../assets/icons/burger.png'/> 
        </div>
	)
	
}
// https://www.flaticon.com/free-icon/menu-burger_5544492 <=== Icon source
export default BurgerMenu