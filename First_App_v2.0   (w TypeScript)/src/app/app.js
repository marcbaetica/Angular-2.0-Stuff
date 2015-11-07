var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2'); //the Component and bootstrap symbols are imported from the Angular2 module
//our component
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        //the Component and bootstrap symbols are imported from the Angular2 module
        angular2_1.Component({
            selector: 'myApp',
            template: '<h1>My First Angular 2 App!</h1>' //tells Angular how to render a view
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})(); //the component controller (an empty-do-nothing class. Usually the properties and application logic goes here)
//it is time to bootstrap the application itself so we can see the changes in the view
angular2_1.bootstrap(AppComponent); //the bootstrap method tells Angular to start the application with this component at the application root. We'd be correct to guess that someday our application will consist of more components arising in tree-like fashion from this root.
//# sourceMappingURL=app.js.map