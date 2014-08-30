// Assignment 1 : Create A Restaurant Object


	/* 

	Create a new Object to encapsulate all restaurant functions and properties ,

	Some of this properties include things like a

	1 - a private variable called "storeId"

	2 - a private variable called "sales"

	3 - a public array variable with strings called "employeeRoster"

	4 - a closure called "makeFood", that logs to the console "Food was made."

	5 - a public facing method, called "orderFood", that privately calls "makeFood" closure

	6 - a public facing method, a setter , that sets the variable "storeId" with its parameter,
		called "setStoreId"

	7 - a public facing method, a getter , that returns the storeId , called "getStoreId"

	*/

	var Restaurant = function () {};

	/* 

	Allow for this object to be a prototype from which other objects can be instantiated

	a way to "open" new restaurants , like so 

	*/

	var laJolla = new Restaurant();

	/* 
	
	Create a three Instance of the restaurant in seperate variables, called,

	8 - laJolla

	9 - carlsbad

	10 - oceanside

	11 - set the storeId of each instance with their appropriate zipcodes

	*/

	laJolla.setStoreId();

	/*

	12 - Figure out how to make the carlsbad instance, and only that instance,
		 console log a different message, the new message should be
		 "Burrito was made." instead of generic "Food was made."
		 when calling the "makeFood" public method.

	*/
	
	carlsbad.makeFood(); // "Burrito was made."

	laJolla.makeFood();  // "Food was made."









