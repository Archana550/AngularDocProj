# Angular Service
- It is a piece of code or logic that is used to perform some specific task. A service can contain a value or function or both.
- The service in angular are injected into the application using the dependency Injection.
- Whenever we need to reuse the components(logic or data) we need to go for Angular Service. The logic or data implemented in a service and it can be
 used across multiple components of the application.
 
 Steps for using Angular service:
 
 1. Export the calls
 2. Decorate the clause using @injectable
 3. We have to import the injectable decorator from the angular library.
 
 Service can be implemented either in constructor or ngOnInit(recommended).
 
 
 ngOnInit()-> This is a lifecycle hook method provided by angular which is called after the constructor 
 and it is generally used to perform tasks related to angular bindings.
 
 Services can be added either in component level(app.component.ts) or module level(app.module.ts)
 
 - Command to generate services= ng g service <<servicename>>  e.g. ng g c student
