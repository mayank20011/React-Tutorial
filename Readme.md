<h1>Branch 1 :- React Setup, React DOM, Project Structure</h1>

<p>To create a react app we will use Vite, Commands to create react app using vite is:-
<ul>
<li>1. npm create vite@latest, then follow the terminal instruction.</li>
<li>2. npm run dev :- To start react server using Vite, as soon as you hit this command in terminal you will get a link to a local server press ctrl+right click, this will open chrome and start the react app on browser.</li>
</ul>

<h2>Lets Understand React Structure :-</h2>

<img src="img/folder.png"/>

<ul>
<li>node_modules :- This folder contain all the downloaded files ie:- dependencies of the project, npm downloaded these files, we do not even have to change this folder manually untill it is required.</li>

<li>Public :- This Folder contain just svg file for logo</li>

<li>src:- src folder contains a folder called assets and multiple files, assets folder contains just a react svg file, and other files in src folder are App.css, App.jsx, index.css, main.jsx.
<h3>what is jsx?</h3>
JSX stands for javascript XML, its nothing but html with javascript inside. App.jsx and main.jsx are components and app.css and index.css are css files for App.jsx and index.html files respectively, these components will be rendered on index.html file </li>

<li>.gitignore :- this file is for git, whatever written inside this git file will not be pushed on github</li>

<li>index.html :- This page will be rendered and all the components will be rendered on this page.</li>

<li>package.json:- this is a javascript object notation file which contain all the info about our project, it's dependencies, devdependencies, project name, version, script etc..</li>

<li>package-lock.json :- this file is nothing but a detailed version of package.json file</li>

<li>Readme.md :- This is for git/github</li>

<li>vite.config.js:- this is vite file</li>
</ul>
</p>

<h2>Lets delete somr files:- </h2>
<p> src -> assets, delete react.svg, now react will throw error beacuse this react.svg is imported in App.jsx so we have to remove that import statement from App.jsx and also delete where it is used in App.jsx , now lets delet all the html from App.jsx only leave a single div inside, we will try our own code here</p>

<img src="img/app.png"/>

<h2>Lets Understand How this React App is working </h2>

<h4>index.html File</h4>
<img src="img/index.png"/>

<h4>main.jsx</h4>
<img src="img/main.png"/>

<p>The entry point or react app is main.jsx, what does this even mean? This means that the first thing thats going to run when react server start is this main.jsx file, so lets explore main.jsx file.

<ul>
<li>In first 4 lines we import react from 'react', ReactDom from 'rect-dom/client', App from './App.jsx' and 'index.css' to use it</li>

<li>If we go through index.html file we will see it has nothing but just a div with id root, so in this main.jsx file we are selecting that root div using js dom and then creating a root variable using react and rendering this app.jsx component inside this root div, we can also render a lot more components here other then app component, but we dont do it, we put more components in app component, sounds confusing? you will learn about it later.</li>
</ul>

</p>

<h2>Function Components</h2>

<img src="img/appjsx1.png"/>

<p>This App.jsx is nothing but a functional component we can create out own functional based component and then export, import it, lets create a child functional component called demon inside app.jsx, this is how now app.jsx looks.</p>

<img src="img/appjsx2.png"/>

<p> We can also write html inside this functional component eg:- lets create a variable and output whats inside this variable. we can do it by writing js inside { } this curley braces. note:- in jsx we dont use class instead we use className we can use class it will work fine but react will throw error and will ask you to change class to className</p>

<img src="img/appjsx3.png"/>

<p>We can also give className using js too eg:-</p>

<img src="img/appjsx4.png"/>


