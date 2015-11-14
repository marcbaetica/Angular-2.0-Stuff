import {Component, Template} from 'angular2/angular2';


@Component({
	selector: 'hello'
})
@Template({
	inline: '
		< div >
			<label>Name:</label>
			< input type= "text" #ref > <!-- just need to reference the object to get its value updated -->
			<hr>
			<h1>Hello {{ref.value }}!</h1>	<!-- another update is that if it doesnt find the ref reference then angular will throw an error in the console (not try to create a model like in v1.X) -->
		</div>

		< !-- adding a button with to compensate for the lack of the event listener within the input tag -->
		< !-- the event listener for the button is located in the Hello class -->
		<button id="button" (click)="onClick()"">Click me!</button>
	'
})


//NOTE: there's nothing to reffer this to the code above. However it works in spite of not having to do $scope.apply or other methods
//we just use raw JS to listen to an event on the DOM and update it through the change detection simply because Angular2 knows about the event listener within the application
//the way Angular handles this is through (click)="onClick()" something that is on the controller
export class Hello {
	constructor() {
		//this event listener can be put anywhere inside the code not just in the constructor
		document.querySelector("body /deep/ #button")  //the selector that we pass in is just a way to reach inside the Shadow DOM for the purposes of this example
			.addEventListener("click", function() {console.log("Button has been clicked!")})
	};

	onClick() {console.log("angular clicked!!")}
}