<h1>Hooks, State, useState hook</h1>

<h2>Hooks</h2>

<p>Hooks are external functions (Because we can not create that functionality inside that function Component, so we hook that functionality from this external function and thats why this fuction is called hook) that we use inisde our component function <br/>
<h3>Commonly Used Hooks:</h3>
1.) useState: Allows you to add state to functional components.<br/>
2.) useEffect: Handles side effects (e.g., data fetching, subscriptions) in functional components.<br/>
3.) useContext: Provides access to the context API within functional components.<br/>
4.) useReducer: An alternative to useState for managing more complex state logic.<br/>
5.) useMemo and useCallback: Optimize performance by memoizing values and functions.
<br/>

<h3>Rules for using Hooks:</h3>
<p>1.) Hooks can only be called inside React Functional Components</p>
<p>2.) Hooks must be called at the top level of component (not inside loop condition or nested Functions.)</p>
<p>3.) Hooks can not be conditional (their order of execution should remain consistent)</p>

<b>Note :- </b> Yo can also Create your own custom hook.
</p>

<h2>State</h2>
<p>State is a fundamental concept that allows components to manage and store dynamic data. it represent the current condition or values of a component and enables component to keep track of changing information. <br/>eg:- suppose there is a variable that stores no of click on a specific button, the value will increment by 1 on button click, so the value is current state and when we click on it we will update the value and this new value is new state, but react will not update the UI of the component even if the state is updated, That's where useStateHook comes in play. it will update the UI of the component based on the the state change</p>

<h2>useState </h2>

<p>To use useState hook you need to import the hook in your component first, then u have to declare the useState hook
<br/>eg:-<br/>import {useState} from "react";<br/>[count,setCount]=useState(0)</p>
<p>Lets break this second line and see, what does this mean<br/>useState() is a function thats taking an initial value and returning a arrray with 2 elements, the first one is a variable and the second is a function to change the value of this variable.</p>



