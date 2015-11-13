import {Component, Template} from 'angular2/angular2';


@Component ({
	selector: 'hello'
})
@Template({
	inline:'
		<div>
			<label>Name:</label>
			<input type="text" #ref (keyup)> //just need to reference the object to get its value updated and listen on the event 'keyup'
			//also watchers changed by using a new concept called Zones which looks for add event listener to be added somewhere on the project
			<hr>
			<h1>Hello {{ref.value}}!</h1>	//another update is that if it doesnt find the ref reference then angular will throw an error in the console (not try to create a model like in v1.X)
		</div>
	'
})

export class Hello{}