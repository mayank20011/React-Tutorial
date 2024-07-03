<h1>Conditional Rendering, Maps</h1>

<h2> 1) Conditional Rendering</h2>

<p>As the name says Rendering the content on webpase based on condition, Suppose we want to render a tick after channel name in thumbnail if the channel is verified, we will send the value verified="True" for the cahnnel which are verifired, so How Can we do so, There are 3 majour Ways to do it</p>

<ol type="i">
<li>If/Else Statement</li>
<li>Ternary Operaotr</li>
<li>Logical And Operator</li>
</ol>

<p>Lets Understand Each One in Detail</p>

<ol type="i">
<li><b>If/Else Statement :-</b> We Can use if else statement for conditional rendering, The biggest drawback is that we can not write if else statements inside the return statement, ie:- the UI that we are returning. <br/>so where we can write?<br/>Anywhere in the Component before return statement, Lets try to write click after the channel name if it is verified.<br/>
This is how we will send data to props
<img src="img/verified.png"/>
We Will Receive this value and use if else, for conditional rendering,
<img src="img/ss3.png"/>
As For First Component the verified value was false but for 2nd and third the value was true so the output look like this.
<img src="img/output.png"/>
</li>
<li><b>Ternary OPerator :-</b>It is considered a Good way to render content using ternary operator, Syntax:- <br/> Statement ? (condition that will be executed if statement true):(condition to be executed if statement is false) Lets try to do the above same task using ternary, the app.jsx will remail same as in above eg because we are just making changes in thumbnail rendering methode<br/>
App.js is still the same, look.
<img src="img/verified.png"/>
This is how our Thumbnail Component will look like
<img src="img/ternary.png"/>
Still the output remain the same
<img src="img/output.png"/>
</li>
<li>Logical And Operator:- We know there should be 2 Statements for && operator <br/> Statement1 && Statement2, if statement 1 is false then the code wont be executed and if the first statement is true, then the && operator will check next statement if both true, second statement will be returned. eg:-
<img src="img/&&.png"/>
Output of the code in all 3case remains the exactly same.
</li>
</ol>

<h2> 2) Map Methode</h2>
<p> Map Methode is a array methode, which takes a callback function as input and pass the index and value at that index for each iteration.<br/> what's the use in react?<br/> As in app.jsx we declared Thumbnail methode 3 times, what if we have to use it 1000 times? so will still hard encode it 1000 time? <br/> No, We will use map methode to do it<br/> Lets first create a json file which will contain a array of multiple objects, each object will store the value of each Thumbnail props, <br/> Inside src folder we will create a folder called Video data ehich will contain a file called video.js</p>
<img src="img/data.png"/>
Now lets import File in app.js and use this file
<img src="img/mapmethode.png"/>
