<h1>Events, Event handler, Synthetic Event Object, Event Bubling</h1>

<h3>1.) Events, Event handler and Synthetic Event Object</h3>
<p>Events allow you to respond to user interaction with your web application. just like in HTML, React components can handle various events such as clicks, Keyboard input, and other actions. <br/>eg:- Lets Try to create a button that will send a alert messege on clicking it.</p>
<img src="img/button.png"/>
<p>Now Lets import this in app.js and pass Children component to it</p>
<img src="img/children.png"/>
<p>Now lets Try to add Event on this button component</p>
<img src="img/event.png"/>
<p>The "pause" Written inside alert object is comming from this event object, whenever a event happens, the web broser sends the event object automatically to the handler function (the function that will run on event), this event object contains the detail of the event ie:- from which object this event take place, what are the cordinates of the point of event place and so much more (you can console loge this e in handle function and check the console in detail to see whts inside this e object), so this e is nothing but that event object, we received it here and used it to get the value written inside the button.</p>

<h4>As we have 2 Button components in app.js, what if we want both of them to have different, handler function? Can we do it?
<br/>Yes, as we can pass anything as props, so what if we try to pass a function.</h4>
<img src="img/function.png"/>
<p>Now Lets Receive this prop in button component and see how to use it,</p>
<img src="/img/abc.png"/>
<h4>QUES:- Now can we have 2 different function for one button? eg:-suppose we have just a single button for play and pause and initially the button is at pause if we click on it the play func will run and again clicking on it then pause fun will run, can we do this?</h4>
<img src="img/3btn.png"/>
<p>The output on button click will be</p>
<p>Pause Button</P>
<img src="img/pausebtn.png"/>
<p>Play Button</P>
<img src="img/playbtn.png"/>
<p>Pause/PlayButton</P>
<img src="img/playpause.png"/>

<h3>2.) Event Bubling</h3>
<p>In React, event bubbling refers to the behavior where an event starts from the innermost component (such as a button or a child element) and propagates upward through its parent components (eg:- App Component) in the component tree. Let’s explore how event bubbling works and how you can use it effectively.<br/> Lets add a Event on the app component.</p>
<img src="img/appevent.png"/>
<p>Now Lets try to click on any button and on app container (basically anywhere on screen because app container is holding all these components that are visible on screen).</p>
<p>Output of APP container click</p>
<img src="img/appclick.png"/>
<p>Output of button click</p>
<img src="img/ebblng.png"/>
<p>As this event bubling is happening because of child component, so lets go to handler function of child component and try to prevent this event bubling</p>
<img src="/img/Noeventbubling.png"/>
<p>e.stopPropagation() methode is used to stop propagation from child to parent event bubling</p>

