<h1>CRUD Operation, useEffect Hook</h1>

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
