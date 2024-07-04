<h1>Events, Event handler, Synthetic Event Object</h1>

<h3>Events</h3>
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
