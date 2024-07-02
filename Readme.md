<h1>Components, Props, JSX</h1>

<h2>Functional Components :-</h2>

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
