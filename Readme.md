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
<li></li>
<li></li>
</ol>
