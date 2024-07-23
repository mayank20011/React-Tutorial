<h1>CRUD Operation</h1>

<h2>1.) Delete</h2>
<P>CRUD Stands for Create, Read, Update, Delete. <br/>As we have created new video thumbnails using form, now lets try to delete the thumbnail, to do so lets create a delete button in thumbnail component, so that when we click on it, the video will get deleted.</p>
<img src="img/crud1.png"/>
<p>On clicking on this (X) button we want the thumbnail to dlt, ie:- change the videos array and dlt the element from it, but the array is in parent component called app, How can we send that info to parent?<br/> Using the last branch concept, lifting state up, By creating a dlt function in app and passing the fun as prop to this thumbnail component and when we call this dlt function from thumbnail.jsx we will pass the info that is required to dlt the thumbnail, <br/> Lets try to do it,But Before that Lets modify our code a lil bit, lets give id to each Thumbnail container and each element of videos array.</p>
<img src="img/dlt1.png"/>
<p>Now when we add any new thumbnail using forms, we used to add id to  it too.</p>
<img src="img/dlt2.png"/>
<p>Now lets also add id to the each thumnail component</p>
<img src="img/dlt3.png"/>
<p>Lets catch this prop and use it.</P>
<img src="img/dlt4.png"/>
<h3>Ques:- Why we assigned id to this div? <br/>So that when we click on the cross button we will get the id of the parent div using event object and then match the id with the elements in video array and dlt the specific element from the array.</h3>
<p>Now Lets create the dltvideo function in app component as we were sharing data from child to parent, so fun should be inside parent container and it should be called from child container</p>
<img src="img/dlt5.png"/>
<p>Now Lets Receive this function and try to use it.</p>
<img src="img/dlt6.png"/>
<p>Lets Check The Feature, if its working or not, Lets delete 2nd thumbnail, This is what our webpage looks like before deleting thumbnails.</p>
<img src="img/dlt7.png"/>
<p>After Deleting</p>
<img src="img/dlt8.png"/>

<h2>2.) Update</h2>
<p>Lets Try to update the Thumbnail on clicking on it, so lets create a button on which when we click the data will go to the form input box.</p>
<img src="img/update1.png"/>
<p>OnClicking this yellow button we want our data to flow from thumbnail component to its sibling component called addVideo, because we want that data on form input box, How can we do it? <br/>Pass Data to parent and then parent pass Data to The sibling of the Thumbnail Component. (child to parent datat transfer through function) <br/> Thats why we added onClick Event on this yellow button so that when the button is clicked the function will run which is in parent component.</p>
<img src="img/update2.png"/>
<p>Now we have all the info about the thumbnail, its id, data (in editableVideo state) so lets pass This to form so that we can write it in the form when, clicked,<br/> So passing editableVideo and a function called updateVideo, why UpdateVideo? Because when we will update all the video in form and when we will send submit button, then the data has to go from form to app ie:- we have to change the videos array that contain info about all the objects thumbnail.</p>
<img src="img/update3.png"/>
<p>Lets receive them</p>
<img src="img/update4.png"/>
<p>Now Lets create our updateVideo function in app component</p>
<img src="img/update5.png"/>
<p>Lets Run it</p>
<img src="img/update6.png"/>
<p>But we cant change the update fields, if we click submit button from form the data went to the parent container and then videos array is modified, we can check it by putting console statement in update function because that fun run when we try to update video, But whats the point? if we cant change the values in input box.. (we cant change it because we has put value attribute of the input box to editable videos objects key value pair, and which made it uneditable.) <img src="img/update7.png"/> <br/> So how can we Solve this problem.<br/> Using useEddect Hook, Lets learn about it. and then later we will try to sole this issue with use effect hook.</P>

<h2>useEffect Hook</h2>
<p>Beofore Learning about useEffect hook we shoul Learn abou React Component Lifecycles</p>
<h3>Components Life Cycle</h3>
<ol type="1">
<li>Initialization:- State of a Component is initalized in first step.</li>
<li>Mounting:- The component is rendered on Screen.</li>
<li>Updation:- When State changes the react re render the component.</li>
<li>Unmounting:- Removing Component from screen.</li>
</ol>

<p>We use UseEffect Hook when we want to perform any task in between any components lifecycle. useEffect hook takes a callback functin and a dependency array as argument. Lets Try to solve our problem of unable to edit form using useEffect, We are getting a warning, lets try to solve the warning first</p>

<img src="img/error1.png"/>

<P>The error is telling that we are changing the value attribute of input fields in form from noting to a specific value, either we should have a value attribute every time or no value attribute at anytime.but we want value attribute. because we have to show data in it for editing the components. so how to solve it? using useState().</p>

<img src="img/form7.png"/>
<p>Here we created a object called default value with same keys as editableVideo prop but these keys are empty. and we also declared a state called value to set the value of vallue attribute in input field, if we have editablevideo prop then we will set the value state to editable video else the value will be default ie:- empty string because of default value</p>
<img src="img/form8.png"/>
