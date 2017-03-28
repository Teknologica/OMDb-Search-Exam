# Introduction

Search the OMDb API

## Task Details
- Consume the [OMDb API](http://www.omdbapi.com/) to fetch the top 10 results matching your search query (JSON).
- Create an interface with at least one input field to be used to search for movies by title.
- Present the results in real time and update the interface as the user types his search query.
- Once the results are displayed allow the user to click on any particular movie to view its details.
- On the movie details view display the plot and other information including the poster image.
- Make your code and UI as clean as possible, be creative.
- Thank you so much E&C!

## Requirements
- You can fork this repo or make your own.
- Please use ES6, Typescript or ES5. No CoffeeScript.
- You must create a SPA.
- Please use any version of Angular
- You can include a `package.json` or other build tools and processors (Webpack, Babel, SASS tools, etc.).
- You can use any CSS framework or make your own styles.
- Please provide any install or runtime instructions in the `readme.md`.

## OMDb API Examples
Please note that the OMDb API does not require any form of authentication. See the [OMDb API documentation](http://www.omdbapi.com/#parameters) for all supported parameters.

### Search by query

```
http://www.omdbapi.com/?s=ghost //results 1-10
http://www.omdbapi.com/?s=ghost&page=2 //  results 11-20
```
- Returns the first 10 results based on the query value provided as `s`
- Pagination can be added via `&page=n`, where `n` is 1-100

#### Movie Object Structure
```json
{
    "Title": "Mission: Impossible - Ghost Protocol",
    "Year": "2011",
    "imdbID": "tt1229238",
    "Type": "movie",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
}
```

### View movie details by `imdbID`
```
http://www.omdbapi.com/?i=tt1229238
```
- Using the `imdbID` provided by the search results will let you fetch the details of a particular movie.


This project is based on [Angular-Seed](https://github.com/mgechev/angular-seed) - Provides fast, reliable and extensible starter for the development of Angular projects.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start use:

```bash
# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# generate api documentation
$ npm run compodoc
$ npm run serve.compodoc


# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod
```
_Does not rely on any global dependencies._

# Running tests

```bash
$ npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
$ ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor
# Make sure you do have Java in your PATH (required for webdriver)

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
$ npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
$ npm start -- --env-config ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# License

MIT
