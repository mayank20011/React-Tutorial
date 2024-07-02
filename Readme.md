<h1>Components, Props, JSX</h1>

<h2> 1) Functional Components :-</h2>

<p>Functional Component is nothing but a simple javascript Function that returns a React element (usually written in JSX). These componens are commonlu used for rendering UI elements and are often stateless (i.e., they dont manage their own state). 

<br/>eg:- Lets change app.jsx, delete everything from app.jsx and write our own code
<br/>
<img src="img/Appdlt.png">
Now Lets Create our own App.jsx Components

<br/>

Step 1 :- Create a Function Called App, Function name should start with capital letter, its a convention, else react will throw error.

Step 2 :- At the end of the Function write a export default statement, so we can export this component anywhere we want.

Step 3 :- write JSX in return statement, if we wants to return multiple lines from a function then we should return them in () else return statement will return undefined instead of JSX, so for safe practice always return in () backets;

<img src="img/App.jsx.png"/>

 As We have not changed anything in main.jsx, this App.jsx File/Component is imported in main.jsx and then rendered inside root div using dom and react dom. as you can see at line no 3, App is imported and at line 8 "App" component is used.

 <img src="img/Main.jsx.png"/>

</p>

<h2> 2) Export Import</h2>
<p>
Export is used to export  a module and import is used to import it in some other file ,there are 2 ways to export import :-<br/>

(i.) Simple export :- We use this methode when we want to export more then 1 function from a file, we generally dont do it because each file should contain only one component but its better to learn about this too. to do this we justwrite export in front of all the functions in file "all the function that we want to export" and where we want to import then we use {} lets see an eg:- create a file called export.jsx and create multiple ui components in it and import in app.jsx
<br/>
Thats how we will export these functions from a single file.
<img src="img/exports.png">
Lets import these functions in App.jsx
<img src="img/import.png">
<br/>
<br/>

(ii.) export default:- when we export just a single function from a file. just check image after step3 of creating a functional component.<br/>
</p>

<h4>Note:- while working on a real life project we dont create component directly in src folder, we create a folder called components in src folder and then create diff-diff components inside it.</h4>

<h2> 3.) JSX </h2>
<p>Till now we used to write html in diff file and then js in diff file then we used to connect it, eg:- there is a form we want to put onsubmit event on it, so we write html of the form then we used to get that form element using js and then we apply our event on it, but with js we can do it in single file.</p>

<h4>Rules of JSX</h4>
<ol type="1">
<li>A component must only return a single Element, if you want to return more then one element then return them in a div or fregment(<></>), we use fregments becausse with div we add unwanted node to the dom.
<img src="img/fregment.png"/></li>
We are trying to written multiple elements from a single componets thats why react is throwing error , lets wrap them in fregments, we could wrap them in div too but it will add a layer to the dom and we dont want that.
<img src="img/fregment2.png"/>
<li></li>
</ol>
