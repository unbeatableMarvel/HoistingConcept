//hoisting of variable ---------------
//This phenonemon (where variables are 'hoisted' to the 'top' of the function) is caused by Javascript's declaration of variables in a function scope, meaning that variables declared in a function are available anywhere in that function, even before they are assigned a value

a=100; //intialization of variable
function value()
{
	console.log("hoisting result :",a);//variable is used
}
value();//function is called to print the value of a.
var a;//declaring the value of a after it is used.

//hoisting of function ---------------

function hoisted()
{
	//assigner();     //it will throw error because var assigner is not hoisted before it is called.
	simplefunc();

	var assigner=function()
	{
		console.log("assigned var assigner");
	}
     assigner(); //it will call the assigner variable assigned function because it had hoisted the assigner.
	function simplefunc()
	{
		console.log("simple  funcction execution");
	}
}
hoisted();