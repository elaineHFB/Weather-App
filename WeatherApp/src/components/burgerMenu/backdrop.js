// import preact
import { h, render, Component } from 'preact';
import style_burger from './style_burger'; // General burger styling

// Backdrop is for clicking out of the burger menu
const Backdrop = () => {
	return (
        <div class = {style_burger["backdrop"]}></div>
	)
}

export default Backdrop
