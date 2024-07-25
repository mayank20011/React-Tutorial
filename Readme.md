<h1>In This Branch We will cover Majour Hooks Used in React</h1>
<p>As Till now we have Learn useState Hook and useEffect hook, Lets Discover a Few more Important Hooks</p>
<p>Some Majour Hooks are:-</p> 
<ol type="1">
<li>useState</li>
<li>useEffect</li>
<li>useReducer</li>
<li>Context api, useContext</li>
<li></li>
<li><li>
<li></li>
</ol>

<h3>3.) useReducer Hook</h3>
<p>The useReducer hook in react is a powerfull tool for managing complex state logic, it is an alternative to useState Hook. As in our app.jsx we have a state called video and there are 4 functions addvideeo, updatevideo, deletevideo and editvideo, now imagine if a lot of components in our app.jsx requires all these functions as props, so for each component we have to make 4 props and send it, this will make codee look complicated. So to overcome this problem we use useReducer hook.</p>
<img src="img/hooks1.png"/>
<p>Lets see what useReducer do and how it works.</p>
<p>Syntax:- <br/> const [state,dispatch]=useReducer(reducerfunction, initialvalueofstate)<br/>Lets create useReducer for videos state, But what is reducer and dispatch.<br/>Reducer:- it is a function whose return is a state and who takes a sate and action as an argument. we will knw about all this terms in a few mins.
action is nothing but a object which has 2 keys type and payload. eg:-<br/>{<br/>type:"ADD",<br/>payload:video<br/>}<br/></p>
<img src="img/reducer1.png"/>