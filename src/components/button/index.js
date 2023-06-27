// import preact
import { h, render, Component } from 'preact';
	
// I MODIFIED THE BUTTON COMPONENT TO TAKE IN A PROP TO DISPLAY ANY TEXT
export default class Button extends Component {

	

	// rendering a function when the button is clicked
	render() {
		let cFunction = this.props.clickFunction;
		if(typeof cFunction !== 'function'){
			cFunction = () => { // Sets cFunction to print console.log() whenever it is invoked
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
			<div>
				<button onClick={cFunction}> {/*On click, invoke the cFunction*/}
					{this.props.displayText}
				</button>
			</div>
		);
	}
}
