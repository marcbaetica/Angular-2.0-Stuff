import {Component, Template} from 'angular2/angular2';


@Component({
	selector: 'hello'
})
@Template({
	inline: '
	< div >
		<label>Name:</label>
		< input type= "text" #ref > <!--just need to reference the object to get its value updated -->
		<hr>
		<h1>Hello {{ref.value }}!</h1>	<!-- another update is that if it doesnt find the ref reference then angular will throw an error in the console (not try to create a model like in v1.X) -->
	</div>

	< !-- adding a button with to compensate for the lack of the event listener within the input tag -->
	< !-- the event listener for the button is located in the Hello class -->
	< button id= "button" (click)="onClick(ref)"> Click me!</button>
'
})


export class Hello {
	constructor() {};

	onClick(value) { console.log("angular clicked! The value is: " + value) }	//returns <input type="text" #ref class="ng-binding"> so we are actually working with elements from the dom now
}