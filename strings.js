let name = "Aurwa";

//console.log(typeof name);
let age = 25;

//console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String('Hitesh-hc'); 
/*
object of type 'String' => This object can access all porperties of strings.

When you create a string using the new String() constructor, you're creating a string object wrapper around the primitive string value. This means that while the object has access to all the methods and properties of the String object, JavaScript automatically converts it to a primitive string value in most contexts to maintain compatibility with the language's behavior.

So, when you access characters using square brackets [], you're essentially treating it like an array or array-like object, which is a common practice in JavaScript. 
*/
//console.log(gameName);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('h'));

//const newString = gameName.slice(-6, 7);
//console.log(newString);

const newString = gameName.substring(0, 5);
//console.log(newString);

const anotherStr = "    Aurwa   ";
console.log(anotherStr);
console.log(anotherStr.trim());

const url = "aurwa.com%20chaudary"
console.log(url.replace("%20", "-"));
console.log(url.includes("aurwa"));