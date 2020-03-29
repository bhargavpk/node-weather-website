# node-weather-website

Node JS on its own does not recognize HBS as templating. So we need to set hbs as templating engine in Node js.
Steps are:
1) Clone all the files into a file
2) From the root file of the project, run 'npm install' in terminal. This will install all necessary npm modules listed in package.json file.
3) Go to file /src/app.js. This contains code that server understands.
4) publicPath variable contains path to Public directory. This is where HTMl/hbs files will look for css or images or js files when you want to link to them
5) viewsPath variable contains path to views directory. This is where hbs will look for files when you render them.
6) partialsPath variable contains path to views directory. This is where hbs will look for partials files when you want them in your hbs files.

app.set('view engine','hbs'); -- This will tell server to set hbs as templating engine to view in web app
app.set('views',viewsPath); -- This will tell server to use files for hbs from directory in viewsPath path
hbs.registerPartials(partialsPath); -- This will tell hbs to use required partials from directory in partialsPath path

Run node app.js in terminal. This will enable server.
In browser, type localhost:3000 to see web app.
Use route /help to get help.hbs on browser. 
