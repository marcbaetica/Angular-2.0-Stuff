import {Component, bootstrap} from 'angular2/angular2'

@Component ({
	selector: 'nameHere',
	template: '<h2>Hello {{#name.value}} !!!</h2>'
})
export class MyAppComponent {
	sayHello(name){
		console.log(name.value);
	}
}

bootstrap(MyAppComponent);