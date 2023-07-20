//*
//simple hello world
console.log("hello world!");
//alert message
alert("connected");
//**commets

//console.log("hello");
/*console.log("bye");
console.log("bye1");
console.log("bye2");*/
console.log("connected");

//*variable or data types
var name="vijay";
typeof(name);
var $emial="hhh.gmail.com";
typeof(name);
name=10.20;
typeof(name);
name=-10.344;
typeof(name);
var bool=true;
typeof(bool);

//unary operators 
var a =10;
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

//Shift operators

var a=8;//1000
console.log(a<<1);
console.log(a>>1);
console.log(a<<2);

//relation operators

var a=10;
var name="10";
console.log(a==name);
console.log(a===name);

//bitwise operators

var a= 8,b=2;
console.log('a&b:'+(a&b));
console.log('a^b:'+(a^b));
console.log('~a:'+(~a));

//logical opertaors

var a= true,
b=false;
console.log('a&&b:'+(a&&b));

//assigment ternary operators

var a=2;
console.log('a=2:'+(a=2));
console.log(a==2);
console.log("ok");
console.log("not ok");

//conditional statement -if else

var a =5;
var b =6;

if (a+b==11) 
console.log("equal");

else
console.log("not equal");

//contioanl staement switch

/*var day="sun";
switch(day)
{
	case "mon";
	break;
	case "tues";
	break;
	
	case "thurs";
	break;
	
	case "fri";
	break;
	case "sat";
	break;
	
	case "sun";
	break;
	

	

}*/

//loops

for(var n=1;n<11;n++)
console.log(n);
var n1=1;
while(n1<11)

{
	console.log(n1);
	n1++;
}
do{
	console.log(n1);
	n1++;

}while(n1<2)

//arrays


 //array method splice


 let arr =[1,2,3,4,5];
 arr.splice(1,3)
 arr;

let arr1= arr.splice(1);
arr1

 