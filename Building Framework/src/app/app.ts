import {Component, bootstrap} from 'angular2/angular2';		//the Component and bootstrap symbols are imported from the Angular2 module

//our component
@Component ({		//the component annotation (component's metadata). The @ before the method identifies Component as a decoration (a TypeScript feature for creating a metadata about the class). Angular finds this metadata in the transpiled JS and responds appropriately
	selector: 'myApp',		//specifies a CSS selector for a host HTML element. Angular CREATES and DISPLAYS an INSTANCE of our AppComponent whenever it encounters a my-app element
	template: '<h1>My First Angular 2 App!</h1>'	//tells Angular how to render a view
})
class AppComponent { }	//the component controller (an empty-do-nothing class. Usually the properties and application logic goes here)

//it is time to bootstrap the application itself so we can see the changes in the view
bootstrap(AppComponent);	//the bootstrap method tells Angular to start the application with this component at the application root. We'd be correct to guess that someday our application will consist of more components arising in tree-like fashion from this root.