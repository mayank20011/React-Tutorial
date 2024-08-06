<h1>In This Branch We will cover Majour Hooks Used in React</h1>
<p>As Till now we have Learn useState Hook and useEffect hook, Lets Discover a Few more Important Hooks</p>
<p>Some Majour Hooks are:-</p> 
<ol type="1">
<li>useState</li>
<li>useEffect</li>
<li>useReducer</li>
<li>Context api, useContext</li>
<li>Context API With UseReducer</li>
<li>Custom Hooks<li>
<li></li>
</ol>

<h3>3.) useReducer Hook</h3>
<p>The useReducer hook in react is a powerfull tool for managing complex state logic, it is an alternative to useState Hook. As in our app.jsx we have a state called video and there are 4 functions addvideeo, updatevideo, deletevideo and editvideo, now imagine if a lot of components in our app.jsx requires all these functions as props, so for each component we have to make 4 props and send it, this will make codee look complicated. So to overcome this problem we use useReducer hook.</p>
<img src="img/hooks1.png"/>
<p>Lets see what useReducer do and how it works.</p>
<p>Syntax:- <br/> const [state,dispatch]=useReducer(reducerfunction, initialvalueofstate)<br/>Lets create useReducer for videos state, But what is reducer and dispatch.<br/>Reducer:- it is a function whose return is a state and who takes a sate and action as an argument. we will knw about all this terms in a few mins.
action is nothing but a object which has 2 keys type and payload. eg:-<br/>{<br/>type:"ADD",<br/>payload:video<br/>}<br/></p>
<img src="img/reducer1.png"/>
<P>The Reducer function returns a state based on  the action that it has to perform.</p>
 <p>As on line 29 videos is a state and dispatch is a function to change that state,videoreducer is a function which can perform multiple tasks like add, delete, update video and videosdb is to set the initial value of videos.<br/>Now Lets see how to change state using dispatch function.<br/>As we were changing state of videos from child components of app.jsx ie:- Thumbnail and AddVideo component. so lets pass the dispatch() function as prop to both of them.</p>
 <img src="img/reducer2.png"/>
 <p>Lets receive this value in prop and call the function when needed.</p>
 <img src="img/reducer3.png"/>
 <p>Here we can se wee are calling dispatch function but not reducer function, so how is it working? Dispatch function calls reducer function internally and pass both the arguments to the reducer function previous state and action to it.</p>

 <h3>4.) Context API</h3>
 <p>The Context API allows us to manage a global state and share datat across components without prop drilling. its better to create a new file in a new folder called context</p>
 <img src="img/createContext1.png"/>
 <p>We could have also created a variable called theme and put the value dark in it and passed it to thre createContext hook on line 2.<br/>Now we have created value and lets try to use this value dark in app.jsx file</p>
 <img src="img/ContextAPI2.png"/>
 <p>Lets create a dark and light class in app.css and see how this work</p>
 <img src="img/contextcss.png"/>
 <p>Lets See The output How our app will look</p>
 <img src="img/darktheme.png"/>
 <p>We can see how our whole app background changed to dark and color of text become white, But thr thumbnail component did not get effeced, lets see why?</p>
 <img src="img/bootstrap.png"/>
 <p>As We can see its becase of bootstrap, we used bootstrap to create them, and bootstrap css gets prefrence over normal css. Lets also change this according to theme, in thumbnail.jsx</p>
 <img src="img/bootstrap2.png"/>
 <p>Lets see How the ui will look in lightmode.</p>
 <img src="img/lightmode.png"/>
 <p>In Real life code we dont change these modes from inside code but we get a button on the website t change modes so lets try to create that button in app.</p>

<h3>5.) Context API With UseReducer</h3>
<p>Lets Completely remove the problem of prop drilling with the help of Context Api with useReducer.<br/>ie:- also remove the dispatch function from the props.<br/>Lets Create 2 files called VideosContext.js and VideosDispatchContext.js to store video state and dispatch function to manage video state.</p>
<img src="img/videosContext.png"/>
<img src="img/videosDispatchContext.png"/>
<p>Now Lets Try to use these context in app.jsx</p>
<img src="img/videos&dispatch.png"/>
<p>As Now me made video and dispatch function available to child components of app using context hook, lets try to access them.</p>
<p>As we were passing dispatch and videos to the VideoList Component in App.jsx to pass dispatch further and to make ui from videos using map methode. so lets access videos using useCOntext hook in VideoList component.</p>
<img src="img/combine1.png"/>
<p>Now inside Thumbnail component child of VideoList component, We were using dispatch function to dltvideo, lets use VideoDisopatchContext There too</p>
<img src="img/combile2.png"/>
<p>We used dispatch in addVideo component too </p>
<img src="img/combine3.png"/>
<h3>6.) Customm hooks</h3>
<p>We can create our own custom hooks, Lets create a folder called hooks and then create our own hooks. as in our code we can see, we are importing useContext hook in each file wherever we are using the VideoDispatchContext and VideoContext so lets try to remove this using custom hooks, lets create VideoDispatch file to create a Dispatch hook, according to convention we must write use in front of function name.</p>
<img src="img/custom hook1.png"/>
<p>Now instead of using dispatch directly using useEffect lets use our own custom hook called useDispatch.</p>
<img src="img/combine4.png"/>
<p>Similarly lets update the rest of the code for dispatch function.</p>
