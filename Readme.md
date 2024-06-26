<h1>Branch 1 :- React Setup, React DOM, Project Structure</h1>

<p>To create a react app we will use Vite, Commands to create react app using vite is:-
<ul>
<li>1. npm create vite@latest, then follow the terminal instruction.</li>
<li>2. npm run dev :- To start react server using Vite, as soon as you hit this command in terminal you will get a link to a local server press ctrl+right click, this will open chrome and start the react app on browser.</li>
</ul>

<h2>Lets Understand React Structure</h2>

<img src="img/folder.png"/>

<ul>
<li>node_modules :- This folder contain all the downloaded files ie:- dependencies of the project, npm downloaded these files, we do not even have to change this folder manually untill it is required.</li>

<li>Public :- This Folder contain just svg file for logo</li>

<li>src:- src folder contains a folder called assets and multiple files, assets folder contains just a react svg file, and other files in src folder are App.css, App.jsx, index.css, main.jsx.
<h3>what is jsx?</h3>
<br/>
JSX stands for javascript XML its nothing but html with javascript inside. App.jsx and main.jsx are components and app.css and index.css are css files for App.jsx and index.html files, these components will be rendered on index.html file </li>

<li>.gitignore :- this file is for git, whatever written inside this git file will not be pushed on github</li>

<li>index.html :- This page will be rendered and all the components will be rendered on this page.</li>

<li>package.json:- this is a javascript object notation file which contain all the info about our project, it's dependencies, devdependencies, project name, version, script etc..</li>

<li>package-lock.json :- this file is nothing but a detailed version of package.json file</li>

<li>Readme.md :- This is for git/github</li>

<li>vite.config.js:- this is vite file</li>
</ul>
</p>

