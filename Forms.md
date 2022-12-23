Angular supports two ways to collect and validate thee data

1. Template Driven Form-> Which is simple form which can be used to develop forms.
  Everything which we are using in an application is defined into the template that we defining along with component.

To use Template Driven Form we need to use FormsModule-> app.module.ts
ngForm -> This directive we have to use in the angular form. It is enclosed in the form tag.

ngModel -> We can add this ngModel directive to the control.

All the input elements are registered with the ngForm, will create the instance of the FormControl class and assign to the ngModel.


ngSubmit-> This directive will submit the form when we either hit the key or click the submit(type) button.


2. Model Driven Form-> Reactive Froms
 These forms where we will define the structure of the form in the component class.
 
 Here we will use FormGroup and FormControl
 To use Model Driven Form, we need to use {ReactiveFormsModule}
 
 FormControl: encapsulate the state of a single form element. It stores the values and the state of teh form elements. It helps us to interact with them using properties and methods.
 
 FormGroup: Represents the collection of hte form control. It also contains other form groups and form arrays.
 
 AngularBuilder: FormBuilder API makes it easier to build reactive forms. We can add formgroup, nested form group anf formcontrols easily.
