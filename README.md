## TEST PROJECT - DOCUMENT UPLOADER
----

### User Interface
For the user interface I decided to go with ReactJS with `TypeScript` using `mobx` as the state manager for the components.

I decided to use `ngrok` to setup a test link between my Windows PC where I wrote the Web API and my Mac where I coded the React UI. For the ngrok url I hardcoded this in the `src/Constants.tsx`. 

The reason for ngrok is I have limited knowledge of deploying to Azure but I was able to configure the Azure Blob Store with some guidance from Google.com

> NOTE: If you plan on using ngrok as I have then you need to update the constant in `src/Constants.tsx` before building and running the app.
`THIS WILL NEED TO BE ADDED TO ENV VARIABLE IF ITS TO BE USED IN ANY PROD ENV.`

### INSTALLATION INSTRUCTIONS

#### To build
```
$ npm run build:clean 
```
This will delete the node_modules, package-lock.json and the build folder. It will then start the local server at `http://localhost:3000`

----

```
$ npm run start
```
This starts the build watch process and the server at `http://localhost:3000`

----

```
$ npm run build
```
Only builds the project

In order to view the UI navigate to `http://localhost:3000/docs`
