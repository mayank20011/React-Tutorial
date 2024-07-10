<h1>Forms, Event Objects, lifting state up.</h1>

<p>Lets create a form to add youtube thumbnails in previous code, so lets create a component called addVideo</p>
<img src="img/form1.png"/>
<p>Lets see whats inside this handleForm function and how does our form look like</p>
<img src="img/form2.png"/>
<p>Lets fill all the form and try to submit it and see what will be the output on form submit</p>
<img src="img/Form3.png"/>
<h4>Ques:- Now the problem is, we have this obj in our child comonent and we want this object to go to its parent component called App, How can we do it?</h4>

<h2>Lifting State Up</h2>
<p>In Lifting state we just pass the data from child component to the parent component, how? <br/>Using a function<br/>We Create a function in parent component and will pass the data as argument to that function, so whenever we will call it, the function will run in the parent componet</p>
<p>See the addVideo function and we are passing it to AddVideo Component</P>
<img src="img/form4.png"/>
<p>See how we Received the fun as prop in AddVideo Component</p>
<img src="img/form5.png">
<p>Let's see if it works or not</p>
<img src="img/form6.png"/>

<h3>You have successfully learnt Basics of React and now we are moving to advance React, Switch to Branch 7, CRUD</h3>

